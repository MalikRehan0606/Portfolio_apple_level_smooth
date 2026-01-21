import Section from "./Section";
import { motion } from "framer-motion";
import { fadeInUp, hoverLift, tap } from "./motion";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A quick intro about me and what I build.">
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp(18)} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <p className="text-white/70 leading-relaxed">
          I’m a passionate Full Stack Developer who builds modern, fast, and responsive web applications with clean UI and secure backend systems. I focus on performance, scalability, and creating smooth user experiences.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {[
            { t: "Frontend", d: "React • Tailwind • Motion" },
            { t: "Backend", d: "Firebase • Node • APIs" },
            { t: "UI/UX", d: "Glassmorphism • Animations • Responsive" },
          ].map((x) => (
            <motion.div key={x.t} variants={fadeInUp(20)} {...hoverLift} {...tap}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="font-semibold">{x.t}</p>
              <p className="text-white/60 text-sm mt-1">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
