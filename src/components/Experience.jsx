import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

const exp = [
  {
    role: "Full Stack Developer Intern",
    company: "Kodnest Technology",
    time: "March 2025 - April 2025",
    points: [
      "Built modern web apps with smooth UI and real-time features",
      "Integrated Firebase Auth, Firestore, and secure dashboards",
      "Deployed production-ready apps on Vercel with clean UX",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Brandstalk",
    time: "2025 - 2026",
    points: [
      "Created a Multi-Coaching Management Platform for a cricket academy with player enrollment, membership purchases, community forum, cricket gear store, and private staff dashboards for managing users, schedules, and content.",
      "Built reusable UI components with Tailwind + React",
      "Focused on performance and clean design systems",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeInUp(16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">
            A timeline of where I’ve built and gained Experience.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-blue-500/30" />

          <div className="space-y-12">
            {exp.map((e, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="hidden lg:block">
                    {isLeft ? (
                      <div className="relative lg:pr-10">
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                        <motion.div
                          variants={fadeInUp(16)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
                        >
                          <p className="text-white/50 text-sm">{e.time}</p>
                          <h3 className="text-xl font-bold mt-1">{e.role}</h3>
                          <p className="text-white/70 mt-1">{e.company}</p>

                          <ul className="mt-4 space-y-2 text-white/70">
                            {e.points.map((p, idx) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    ) : null}
                  </div>

                  <div>
                    {!isLeft ? (
                      <div className="relative lg:pl-10">
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                        <motion.div
                          variants={fadeInUp(16)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
                        >
                          <p className="text-white/50 text-sm">{e.time}</p>
                          <h3 className="text-xl font-bold mt-1">{e.role}</h3>
                          <p className="text-white/70 mt-1">{e.company}</p>

                          <ul className="mt-4 space-y-2 text-white/70">
                            {e.points.map((p, idx) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
