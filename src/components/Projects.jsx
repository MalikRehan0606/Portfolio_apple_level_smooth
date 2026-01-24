import { motion } from "framer-motion";
import { fadeInUp, hoverLift, tap } from "./motion";

const projects = [
  {
    title: "TypeZilla",
    type: "Interactive Web App",
    desc: "Typing test with leaderboard, stats, and replays.",
    tags: ["React", "Firebase", "Tailwind"],
    img: "/projects/type.png",
    live: "https://typezilla.qzz.io/",
    side: "right",
    color: "from-cyan-400/40 to-blue-500/30",
  },
  {
    title: "Car-AI",
    type: "Interactive Web App",
    desc: "Built CarAI Marketplace, a generative AI-powered web platform to browse and manage car listings with image-based search, auto-filled car details for admins, test-drive booking, and a full admin dashboard.",
    tags: ["Next.js", "Firebase", "Razorpay", "Tailwind"],
    img: "/projects/car.png",
    live: "https://car-ai-omega.vercel.app/",
    side: "left",
    color: "from-amber-400/30 to-orange-500/20",
  },
  {
    title: "Caliber Sports Club",
    type: "UI/UX Design Concept",
    desc: "Built a Multi-Coaching Management Platform for a cricket academy with player enrollment, membership purchases, community forum, cricket gear store, and private staff dashboards for managing users, schedules, and content.",
    tags: ["Next.js", "Firebase", "React"],
    img: "/projects/cali.png",
    live: "https://www.calibersportsclub.in/",
    side: "right",
    color: "from-pink-500/30 to-purple-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeInUp(16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold">
            Latest <span className="text-blue-400">Works</span>
          </h2>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">
            Hover on a project to expand and reveal the live link.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-blue-500/30" />

          <div className="space-y-12">
            {projects.map((p, idx) => {
              const isLeft = p.side === "left";

              const Card = (
                <div className={`relative ${isLeft ? "lg:pr-10" : "lg:pl-10"}`}>
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    {...tap}
                    whileHover={{ scale: 1.03 }}
                    className="group block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition`}
                      />
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-[220px] object-cover"
                      />

                      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition">
                        <motion.button
                          {...tap}
                          className="rounded-2xl bg-white text-black px-4 py-2 font-semibold shadow-lg"
                        >
                          LIVE ↗
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-bold">{p.title}</h3>
                      </div>

                      <p className="text-white/60 text-sm mt-1">{p.type}</p>

                      <p className="text-white/70 mt-3 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs border border-white/10 bg-black/30 text-white/70"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        {...hoverLift}
                        className="mt-5 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl bg-blue-500 text-white px-5 py-2 font-semibold hover:opacity-90 transition"
                          >
                            Visit Live Website
                          </a>

                          <a
                            href="#contact"
                            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-semibold hover:bg-white/10 transition"
                          >
                            Hire Me
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              );

              return (
                <div
                  key={idx}
                  className="relative grid lg:grid-cols-2 gap-10 items-center"
                >
                  <div className="hidden lg:block">{isLeft ? Card : null}</div>

                  <div>{!isLeft ? Card : null}</div>
                </div>
              );
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={`${isLeft ? "lg:block" : "hidden lg:block"}`}>
                    {isLeft ? Card : null}
                  </div>
              
                  <div className={`${isLeft ? "lg:hidden" : "block"}`}>
                    {Card}
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
