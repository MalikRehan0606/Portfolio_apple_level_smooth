import Section from "./Section";
import { motion } from "framer-motion";
import { fadeInUp, hoverLift, tap } from "./motion";

const skills = ["HTML","CSS","JavaScript","React","Tailwind CSS","Firebase","Node.js","NoSQL","Python","Java"];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I use often.">
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <motion.span key={s} variants={fadeInUp(14)} {...hoverLift} {...tap}
            className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white/80 hover:bg-white/10 transition">
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
