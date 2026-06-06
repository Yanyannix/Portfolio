export default function Footer() {
  return (
    <footer className="relative bg-[#050816] py-24 text-white overflow-hidden border-t border-white/10">

      {/* 🌌 FLOATING GLOWS */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#52e3a5]/10 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full animate-pulse" />

      {/* ⚡ GRID OVERLAY */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#52e3a5_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">

        {/* 🔥 NAME HERO */}
        <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-wide">
          Adrian Hinayon
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Crafting modern, interactive, and animated web experiences with React,
          Tailwind, and motion design.
        </p>

        {/* 🧭 NAVIGATION CARDS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {[
            { label: "About", link: "#about" },
            { label: "Projects", link: "#projects" },
            { label: "Skills", link: "#skills" },
            { label: "Certificates", link: "#certificate" },
            { label: "Contact", link: "#contact" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="
                px-6 py-3
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-md
                text-gray-300
                hover:text-[#52e3a5]
                hover:border-[#52e3a5]/40
                hover:shadow-[0_0_20px_rgba(82,227,165,0.2)]
                transition-all duration-300
                hover:scale-105
              "
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* ⚡ SOCIAL / STATUS BAR */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">

          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 rounded-full bg-[#52e3a5] animate-pulse"></span>
            Available for freelance work
          </div>

          <div className="text-gray-500 text-sm">
            Built with React • Tailwind • Framer Motion
          </div>

        </div>

        {/* ✨ FOOTER BOTTOM */}
        <div className="border-t border-white/10 pt-8 text-gray-600 text-sm">
          © 2026 <span className="text-[#52e3a5]">Adrian Hinayon</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}