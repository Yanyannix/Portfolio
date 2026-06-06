import { useState } from "react";
import { motion } from "framer-motion";

const orbitIcons = [
  { icon: "📧" },
  { icon: "💬" },
  { icon: "📍" },
  { icon: "💻" },
  { icon: "🔗" },
  { icon: "⚡" },
];

export default function Contact() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#52e3a5]/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* TITLE */}
        <p className="text-[#52e3a5] uppercase tracking-[8px] mb-4 text-sm">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          Let’s Build Something
          <span className="block gradient-text mt-2">
            Amazing Together
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 mb-20">
          Got a project, idea, or opportunity? I’m open for collaborations and freelance work.
        </p>

        {/* ORBIT AREA */}
        <div
          className="relative flex items-center justify-center z-0"
          onMouseMove={handleMouseMove}
        >
          {/* ORBIT RINGS */}
          <div className="absolute w-[520px] h-[520px] rounded-full border border-white/10 animate-spin-slow z-0"></div>
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 animate-spin-reverse z-0"></div>

          {/* ORBIT ICONS */}
          {orbitIcons.map((item, i) => {
            const angle = (i / orbitIcons.length) * Math.PI * 2;

            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                className="absolute z-0 text-2xl bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 pointer-events-none"
                animate={{
                  x: x + mouse.x * 0.03,
                  y: y + mouse.y * 0.03,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(82,227,165,0.6)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 12,
                }}
              >
                {item.icon}
              </motion.div>
            );
          })}

          {/* MAIN CARD (FRONT LAYER FIX) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 glass rounded-[42px] p-10 md:p-14 w-full max-w-xl border border-white/10 overflow-hidden"
          >
            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#52e3a5]/10 via-transparent to-purple-500/10 blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-5xl mb-5">💬</div>

              <h3 className="text-3xl font-bold gradient-text mb-2">
                Get In Touch
              </h3>

              <p className="text-gray-400 mb-10">
                Tap below to contact me instantly.
              </p>

              {/* INFO */}
              <div className="grid gap-4 text-left">
                <div className="flex justify-between bg-white/5 px-5 py-4 rounded-2xl">
                  <span className="text-gray-400">Email</span>
                  <span className="font-semibold">
                    adrianhinayon28@gmail.com
                  </span>
                </div>

                <div className="flex justify-between bg-white/5 px-5 py-4 rounded-2xl">
                  <span className="text-gray-400">Location</span>
                  <span className="font-semibold">Davao City, PH</span>
                </div>

                <div className="flex justify-between bg-white/5 px-5 py-4 rounded-2xl">
                  <span className="text-gray-400">Status</span>
                  <span className="text-[#52e3a5] font-bold">
                    ● Available
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
                <a
                  href="mailto:adrianhinayon28@gmail.com"
                  className="bg-[#52e3a5] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-[#52e3a5]/20"
                >
                  Send Email
                </a>

                <a
  href="/Hinayon-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
>
  Download CV
</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}