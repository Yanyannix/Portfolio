import { useEffect } from "react";
import AdrianImg from "../assets/Adrian.jpg";

export default function Hero() {
  // lightweight floating particles (no layout change)
  useEffect(() => {
    const canvas = document.getElementById("heroParticles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    const create = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    };

    for (let i = 0; i < 40; i++) create();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.fillStyle = "rgba(82, 227, 165, 0.25)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      className="
      min-h-screen
      bg-[#050816]
      hero-grid
      text-white
      flex
      items-center
      px-6
      relative
      overflow-hidden
      "
    >

      {/* ⚡ NEW: PARTICLE CANVAS */}
      <canvas
        id="heroParticles"
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* BACKGROUND GLOWS (now animated) */}
      <div className="absolute top-20 left-20 h-72 w-72 bg-[#52e3a5]/20 blur-[120px] rounded-full animate-pulse" />

      <div className="absolute bottom-20 right-20 h-72 w-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* 🌊 NEW: subtle moving light layer */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#52e3a5]/10 via-transparent to-purple-500/10 animate-pulse" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full pt-32 relative z-10">

        {/* LEFT CONTENT (unchanged) */}
        <div className="fadeIn">

          <p className="uppercase tracking-[6px] text-[#52e3a5] mb-6 font-semibold">
            Full Stack Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Hi, I'm
            <span className="gradient-text block mt-2">
              Adrian A.
            </span>
            <span className="block">
              Hinayon
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-xl leading-relaxed">
            I create modern websites, mobile apps,
            and innovative systems with smooth animations,
            responsive layouts, and beautiful user experiences.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="bg-[#52e3a5] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
>
  Contact Me
</button>

            <button className="glass px-8 py-4 rounded-full hover:border-[#52e3a5] transition">
              View Projects
            </button>

          </div>

          {/* STATS (unchanged) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            {[20, 10, 4, 95].map((n, i) => (
              <div key={i} className="glass p-5 rounded-3xl animate-pulse">
                <h2 className="text-3xl font-bold gradient-text">
                  {i === 3 ? "95%" : `${n}+`}
                </h2>
                <p className="text-gray-400">
                  {["Projects", "Clients", "Years", "Success"][i]}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE (unchanged layout, only glow enhancement) */}
        <div className="relative flex justify-center">

          {/* ROTATING RINGS (now smoother glow feel) */}
          <div className="absolute w-[550px] h-[550px] border border-[#52e3a5]/20 rounded-full spinSlow animate-pulse" />

          <div
            className="absolute w-[450px] h-[450px] border border-cyan-400/20 rounded-full spinSlow"
            style={{ animationDirection: "reverse" }}
          />

          <div className="absolute w-[350px] h-[350px] border border-purple-500/20 rounded-full spinSlow animate-pulse" />

          {/* IMAGE CARD */}
          <div className="relative floating">

            <div className="glass glow p-4 rounded-[40px]">
              <img
                src={AdrianImg}
                alt="Adrian"
                className="w-[400px] h-[600px] object-cover rounded-[30px]"
              />
            </div>

            {/* FLOATING LABELS (soft animation added only) */}
            <div className="absolute -left-10 top-20 glass px-5 py-3 rounded-2xl animate-bounce">
              🚀 React Developer
            </div>

            <div className="absolute -right-10 bottom-20 glass px-5 py-3 rounded-2xl animate-bounce">
              ⚡ Full Stack
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-[#52e3a5] text-black px-8 py-4 rounded-full font-bold animate-pulse">
              Available for Work
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}