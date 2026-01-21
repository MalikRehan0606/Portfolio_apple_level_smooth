import Section from "./Section";
import { motion } from "framer-motion";
import { fadeInUp, hoverLift, tap } from "./motion";

const projects = [
  { title: "Typing Test App", desc: "Typing test with leaderboard, stats, and replays.", tech: "React • Firebase • Tailwind", live: "#", code: "#" },
  { title: "Online Grocery Store", desc: "E-commerce grocery store UI with cart & wishlist.", tech: "HTML • CSS • JS", live: "#", code: "#" },
  { title: "Attendance System", desc: "Automated attendance for web and desktop apps.", tech: "Python • Web App", live: "#", code: "#" }
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some work that shows my skills.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeInUp(22)} {...hoverLift}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-white/70 mt-3">{p.desc}</p>
            <p className="text-white/50 text-sm mt-4">{p.tech}</p>

            <div className="mt-6 flex gap-3">
              <motion.a {...tap} whileHover={{ scale: 1.02 }} href={p.live}
                className="rounded-2xl bg-white text-black px-4 py-2 font-semibold hover:opacity-90 transition">
                Live
              </motion.a>
              <motion.a {...tap} whileHover={{ scale: 1.02 }} href={p.code}
                className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition">
                Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
