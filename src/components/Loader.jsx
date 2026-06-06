import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* GLOW ORBS */}
      <div className="absolute w-[350px] h-[350px] bg-[#52e3a5]/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute w-[250px] h-[250px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* ROTATING RINGS */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border border-[#52e3a5]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* CENTER CORE */}
      <motion.div
        className="absolute w-[120px] h-[120px] bg-[#52e3a5]/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-black text-[#52e3a5] tracking-widest z-10"
      >
        My Portfolio
      </motion.h1>

      {/* SCANNER LINE */}
      <motion.div
        className="absolute w-full h-[2px] bg-[#52e3a5]/60"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: "100vh", opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* LOADING BAR */}
      <div className="absolute bottom-20 w-[220px] h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#52e3a5] to-cyan-400"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
            ease: "linear",
          }}
        />
      </div>

      {/* HUD LABEL */}
      <motion.p
        className="absolute bottom-28 text-xs tracking-[6px] text-white/40"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SYSTEM BOOTING • LOADING PORTFOLIO
      </motion.p>
    </motion.div>
  );
}