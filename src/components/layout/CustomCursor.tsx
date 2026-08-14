"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.7 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.7 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsPointerFine(mq.matches);
    if (!mq.matches) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isPointerFine) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-accent-cyan"
        style={{ x, y }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-accent-violet/60"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          marginLeft: isHovering ? -24 : -12,
          marginTop: isHovering ? -24 : -12,
        }}
        animate={{
          backgroundColor: isHovering ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </div>
  );
}
