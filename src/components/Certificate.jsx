import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jfif";
import cert5 from "../assets/cert5.png";

export default function Certificate() {
  const certificates = [
    {
      image: cert1,
      title: "Introduction to Front End Development",
      description:
        "Introduction to Front End Development is a beginner-level course that teaches how to build the user interface of a website or web application. It covers the basics of HTML, CSS, and JavaScript, which are used to create layouts, design styles, and add interactivity. This helps learners understand how websites are built and how users interact with them.",
    },
    {
      image: cert2,
      title: "Python For Beginners",
      description:
        "Python for Beginners is an introductory course that teaches the basics of Python programming. It covers fundamental concepts such as variables, data types, loops, functions, and simple problem-solving. This course helps beginners build a strong foundation in coding and prepares them for more advanced programming topics.",
    },
    {
      image: cert3,
      title: "Full Stack Java Development",
      description:
        "Full Stack Java Development is the practice of creating complete web applications using Java for backend development and technologies like HTML, CSS, and JavaScript for the frontend. It involves working with databases, APIs, and server-side logic to build fully functional and interactive systems.",
    },
    {
      image: cert4,
      title: "Certificate of Recognition in Capstone Project",
      description:
        "A Certificate of Recognition in Capstone Project is given to students who successfully complete their final project. It recognizes their hard work, creativity, and ability to apply their skills to create a meaningful output.",
    },
    {
      image: cert5,
      title: "Certificate of Completion in Internship Program",
      description:
        "A Certificate of Completion in Internship Program is given to students who have successfully finished their internship training. It recognizes their dedication, professionalism, and the practical skills they gained while working in a real workplace environment.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % certificates.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  const cert = certificates[index];

  return (
    <section
      id="certificate"
      className="relative py-32 px-6 bg-[#050816] text-white text-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#52e3a5]/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#52e3a5_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#52e3a5] uppercase tracking-[6px] mb-4">
          DIGITAL ARCHIVE
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-16">
          ACHIEVEMENT <span className="text-[#52e3a5]">CORE</span>
        </h2>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center">

          {/* LEFT */}
          <motion.button
            whileHover={{ scale: 1.3 }}
            onClick={prev}
            className="absolute left-0 text-6xl text-[#52e3a5] drop-shadow-[0_0_15px_#52e3a5]"
          >
            ‹
          </motion.button>

          {/* CARD WRAPPER */}
          <div className="relative w-[340px] md:w-[480px]">

            {/* RINGS */}
            <motion.div
              className="absolute inset-0 rounded-[40px] border border-[#52e3a5]/30"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-[-10px] rounded-[50px] border border-cyan-400/10"
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* CARD */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, rotateY: 40 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotateY: -40 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-[30px] overflow-hidden relative shadow-[0_0_60px_rgba(82,227,165,0.15)]"
              >
                {/* IMAGE */}
                <div className="w-full h-[300px] overflow-hidden relative">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* SCAN LINE */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-[#52e3a5]"
                    animate={{
                      y: [0, 300, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* INFO */}
                <div className="p-6 text-left border-t border-white/10 bg-black/30 backdrop-blur-md h-[180px]">
                  <h3 className="text-xl font-bold text-[#52e3a5]">
                    {cert.title}
                  </h3>

                  <p className="text-gray-300 mt-3 text-sm line-clamp-4">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <motion.button
            whileHover={{ scale: 1.3 }}
            onClick={next}
            className="absolute right-0 text-6xl text-[#52e3a5] drop-shadow-[0_0_15px_#52e3a5]"
          >
            ›
          </motion.button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {certificates.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.4 }}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index
                  ? "bg-[#52e3a5] shadow-[0_0_12px_#52e3a5]"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}