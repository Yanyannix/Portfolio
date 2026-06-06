import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import projectImg from "../assets/eVital.jpg";
import projectImg2 from "../assets/MyCart.png";

const projects = [
  {
    title: "eVital",
    description:
      "A self-service health check-up kiosk designed to make basic health monitoring more accessible.",
    status: "ACTIVE",
    featured: true,
    image: projectImg,
    github: "https://evitalcapstoneproject.vercel.app/",
    details:
      "A self-service kiosk that allows individuals to check vital signs and receive instant health data securely.",
  },
  {
    title: "Shopping_List",
    description:
      "A minimalist shopping list mobile application built using React Native and Firebase.",
    status: "DEPLOYED",
    featured: false,
    image: projectImg2,
    github: "https://github.com/Yanyannix/Shopping_List",
    details:
      "React Native app with authentication, dark mode, and real-time database support.",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const handleMouseMove = (e, setTilt) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -18;
    const rotateY = ((x / rect.width) - 0.5) * 18;

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = (setTilt) => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#52e3a5_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-[#52e3a5] uppercase tracking-[6px] mb-4">
          FEATURED WORKS
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-14">
          PROJECT <span className="text-[#52e3a5]">SHOWCASE</span>
        </h2>

        {/* CENTERED 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center">
          {projects.map((project, index) => {
            const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

            return (
              <motion.div
                key={index}
                onClick={() => setSelected(project)}
                onMouseMove={(e) => handleMouseMove(e, setTilt)}
                onMouseLeave={() => resetTilt(setTilt)}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                }}
                whileHover={{ scale: 1.03 }}
                className="relative w-full max-w-md cursor-pointer transition-all"
              >
                {/* FEATURED BADGE */}
                {project.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#52e3a5] text-black text-xs px-4 py-1 rounded-full font-bold shadow-lg">
                      ⭐ FEATURED PROJECT
                    </span>
                  </div>
                )}

                {/* CARD */}
                <div
                  className={`rounded-2xl p-[1px] ${
                    project.featured
                      ? "bg-gradient-to-r from-[#52e3a5] to-cyan-400"
                      : "bg-white/10"
                  }`}
                >
                  <div className="bg-[#0b1024]/90 backdrop-blur-lg rounded-2xl overflow-hidden">

                    {/* IMAGE */}
                    <div className="h-44 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <div className="flex justify-between text-xs text-white/60 mb-3">
                        <span className="text-[#52e3a5]">NODE</span>
                        <span>{project.status}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#52e3a5] mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-300 mb-6">
                        {project.description}
                      </p>

                      <div className="text-xs text-white/40">
                        Hover + Click for details →
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-lg bg-[#0b1024] p-6 rounded-2xl border border-[#52e3a5]/30"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white/60 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-[#52e3a5] mb-3">
                {selected.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {selected.description}
              </p>

              <p className="text-sm text-white/60 mb-6">
                {selected.details}
              </p>

              <a
                href={selected.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-[#52e3a5] text-black font-medium hover:scale-105 transition"
              >
                Open Project →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}