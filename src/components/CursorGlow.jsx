import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px] rounded-full blur-3xl opacity-30"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.55) 0%, rgba(236,72,153,0.35) 35%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}
