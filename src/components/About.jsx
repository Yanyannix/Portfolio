import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import AdrianImg2 from "../assets/Adrian2.jfif";
import AdrianImg3 from "../assets/adrian3.jfif";

export default function About() {
  const cardRef = useRef(null);

  // 🧿 mouse tracking (3D tilt)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  };

  // ✅ IMAGE STATE (CLICK TO SWITCH)
  const images = [AdrianImg2, AdrianImg3];
  const [imgIndex, setImgIndex] = useState(0);

  const handleImageClick = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#52e3a5]/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ================= IMAGE ================= */}
        <div className="relative flex justify-center">

          {/* ORBIT RINGS */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#52e3a5]/20 animate-spin-slow" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/20 animate-spin-slow" />

          {/* NAME TAG */}
          <motion.div
            className="absolute -top-10 text-[#52e3a5] text-sm tracking-[6px] uppercase"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ADRIAN A. HINAYON • FRONTEND ENGINEER
          </motion.div>

          {/* 3D TILT CARD */}
          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onClick={handleImageClick}   // ✅ CLICK TO CHANGE IMAGE
            whileHover={{ scale: 1.05 }}
            className="relative glass glow p-4 rounded-[40px] cursor-pointer"
          >
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              alt="About"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[380px] h-[500px] object-cover rounded-[30px]"
            />
          </motion.div>
        </div>

        {/* ================= TEXT ================= */}
        <div>
          <p className="text-[#52e3a5] uppercase tracking-[6px] mb-4">
            SYSTEM PROFILE
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Developer <span className="text-[#52e3a5]">Status</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            I build modern, animated, and interactive web experiences using React,
            Tailwind, and motion design systems.
          </p>

          {/* XP SYSTEM */}
          <div className="mt-10 space-y-6">

            <div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Frontend Level</span>
                <span className="text-[#52e3a5]">92</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-[#52e3a5] to-cyan-400"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Backend Level</span>
                <span className="text-[#52e3a5]">78</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-white/60">
                <span>UI/UX Mastery</span>
                <span className="text-[#52e3a5]">88</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-[#52e3a5]"
                />
              </div>
            </div>
          </div>

          <motion.a
  href="/Hinayon-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="mt-10 inline-block bg-[#52e3a5] text-black px-8 py-4 rounded-full font-bold"
>
  Download CV
</motion.a>
        </div>
      </div>
    </section>
  );
}