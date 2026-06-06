import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "Next.js", "Vite"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "Firebase", "Supabase", "REST API", "MongoDB"],
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "Figma", "UI/UX", "MySQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* HUD GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#52e3a5_1px,transparent_1px),linear-gradient(to_bottom,#52e3a5_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/6RMhx.gif')] opacity-5 mix-blend-overlay pointer-events-none" />

      {/* GLOW ORBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#52e3a5]/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-[#52e3a5] tracking-[6px] uppercase">
            SYSTEM STATUS
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            SKILL <span className="text-[#52e3a5]">INTERFACE</span>
          </h2>
        </div>

        {/* HUD PANELS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={gIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gIndex * 0.2 }}
              className="
                relative
                border border-[#52e3a5]/30
                bg-white/5
                backdrop-blur-xl
                rounded-2xl
                p-6
                overflow-hidden
              "
            >
              {/* HUD HEADER BAR */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#52e3a5] font-bold tracking-widest">
                  {group.title}
                </h3>
                <span className="text-xs text-white/50">ACTIVE</span>
              </div>

              {/* SKILL LIST */}
              <div className="space-y-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="
                      relative
                      group
                      cursor-pointer
                    "
                  >
                    {/* BACK BAR */}
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                      {/* FILL BAR */}
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${60 + Math.random() * 40}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-[#52e3a5]"
                      />
                    </div>

                    {/* LABEL */}
                    <div className="flex justify-between mt-2">
                      <span className="text-sm font-medium group-hover:text-[#52e3a5] transition">
                        {skill}
                      </span>
                      <span className="text-xs text-white/40">LVL</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CORNER HUD DECOR */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#52e3a5]/40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#52e3a5]/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}