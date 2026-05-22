import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorMode = "default" | "uiux" | "code" | "link";

let setModeExternal: (m: CursorMode) => void = () => {};
export const setCursorMode = (m: CursorMode) => setModeExternal(m);

export function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    setModeExternal = setMode;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const size = mode === "default" ? 14 : mode === "link" ? 36 : 96;
  const label =
    mode === "uiux" ? "WIRES" : mode === "code" ? "CODE" : mode === "link" ? "→" : "";

  return (
    <>
      {/* big lens */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:flex items-center justify-center rounded-full font-mono text-[10px] tracking-[0.2em] uppercase mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          background: mode === "default" ? "var(--cream)" : "var(--blue)",
          color: "var(--cream)",
          opacity: hidden ? 0 : 1,
          transition: "width .25s ease, height .25s ease, background .25s ease",
          border: mode !== "default" ? "1px solid var(--cream)" : "none",
        }}
      >
        {label}
      </motion.div>
    </>
  );
}
