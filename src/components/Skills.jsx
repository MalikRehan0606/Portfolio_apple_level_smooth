import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverLift, tap } from "./motion";
import {
  Code2,
  Layout,
  Server,
  GitBranch,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";

const groups = [
  {
    title: "Frontend",
    Icon: Layout,
    color: "from-blue-500/30 to-purple-500/20",
    skills: [
      { name: "React", value: 92 },
      { name: "Tailwind CSS", value: 90 },
      { name: "Next.js", value: 84 },
      { name: "JavaScript", value: 88 },
      { name: "TypeScript", value: 78 },
    ],
  },
  {
    title: "Backend",
    Icon: Server,
    color: "from-emerald-500/25 to-cyan-500/15",
    skills: [
      { name: "Node.js", value: 80 },
      { name: "Firebase Auth", value: 86 },
      { name: "Firestore", value: 82 },
      { name: "REST APIs", value: 78 },
    ],
  },
  {
    title: "Tools & Deploy",
    Icon: GitBranch,
    color: "from-pink-500/20 to-orange-500/15",
    skills: [
      { name: "Git & GitHub", value: 90 },
      { name: "Vercel", value: 86 },
      { name: "Firebase Studio", value: 88 },
      { name: "Visual Studio Code", value: 74 },
    ],
  },
];

const badges = [
  { label: "Production Ready", Icon: ShieldCheck },
  { label: "Optimized UI", Icon: Zap },
  { label: "Clean Code", Icon: Code2 },
  { label: "Fast Delivery", Icon: Rocket },
];

function ProgressBar({ value }) {
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-pink-500"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeInUp(16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold">
            Skills <span className="text-blue-400">& Expertise</span>
          </h2>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">
            A clean, modern stack focused on performance, scalability, and smooth
            UI.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {badges.map(({ label, Icon }) => (
            <motion.div
              key={label}
              variants={fadeInUp(10)}
              {...hoverLift}
              {...tap}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm text-white/80"
            >
              <Icon size={16} className="text-blue-300" />
              {label}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeInUp(18)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 overflow-hidden relative transition"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${g.color} opacity-30`}
              />

              <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/35 to-pink-500/25 blur-2xl" />
              </div>

              <motion.div
                className="absolute right-6 top-6 opacity-60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                  <g.Icon size={18} className="text-white/70" />
                </div>
              </motion.div>

              <motion.div
                className="absolute left-6 bottom-6 opacity-40"
                animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                  <span className="text-xs text-white/60">✦</span>
                </div>
              </motion.div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl border border-white/10 bg-black/30">
                    <g.Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{g.title}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between">
                        <p className="text-white/85 font-medium">{s.name}</p>
                        <p className="text-white/50 text-sm">{s.value}%</p>
                      </div>
                      <ProgressBar value={s.value} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp(16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 text-center"
        >
          <p className="text-white/70 leading-relaxed">
            I focus on building{" "}
            <span className="text-white font-semibold">fast</span>,{" "}
            <span className="text-white font-semibold">smooth</span> and{" "}
            <span className="text-white font-semibold">deploy-ready</span> web
            apps with premium UI and scalable backend.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
