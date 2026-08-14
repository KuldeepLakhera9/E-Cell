"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generatePoints(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 3.2 + Math.random() * 3.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function ParticleSwarm({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => generatePoints(count), [count]);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const el = pointsRef.current;
    if (!el) return;
    const t = state.clock.getElapsedTime();
    el.rotation.y = t * 0.028;
    el.rotation.x = Math.sin(t * 0.05) * 0.08;

    mouse.current.x += (state.mouse.x - mouse.current.x) * 0.02;
    mouse.current.y += (state.mouse.y - mouse.current.y) * 0.02;
    el.rotation.y += mouse.current.x * 0.12;
    el.rotation.x += -mouse.current.y * 0.08;
  });

  return (
    <group scale={Math.min(viewport.width / 12, 1.15)}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#8B5CF6"
          size={0.028}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Wireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.045;
    ref.current.rotation.x = t * 0.02;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.6, 1]} />
      <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function ParticleField() {
  const count = typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 1100;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <ParticleSwarm count={count} />
      <Wireframe />
    </Canvas>
  );
}
