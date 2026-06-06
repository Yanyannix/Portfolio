import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
        fixed
        pointer-events-none
        top-0
        left-0
        z-50
      "
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
      }}
    >
      <div className="w-[300px] h-[300px] bg-[#52e3a5]/20 blur-[120px] rounded-full" />
    </div>
  );
}