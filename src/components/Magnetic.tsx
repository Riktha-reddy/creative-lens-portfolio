import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Magnetic({
  children,
  className = "",
  strength = 0.35,
  as = "div",
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handle = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = motion[as] as any;
  return (
    <Comp
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
