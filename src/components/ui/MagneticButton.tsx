"use client";

import { useRef, useState, type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  as?: ElementType;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseClasses =
    variant === "primary"
      ? "bg-accent-gradient text-background shadow-glow hover:shadow-[0_0_50px_-6px_rgba(139,92,246,0.65)]"
      : "glass glass-hover text-foreground";

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      <Comp
        href={href}
        type={!href ? type : undefined}
        onClick={onClick}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-300 ease-out-expo active:scale-95",
          baseClasses,
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
