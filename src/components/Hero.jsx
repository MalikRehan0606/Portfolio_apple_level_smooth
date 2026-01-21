import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, pop, hoverLift, tap } from "./motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={staggerContainer(0.1, 0.09)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp(14)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Available for work
            </motion.div>

            <motion.h1
              variants={fadeInUp(18)}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                Your Name
              </span>
              <br />
              Full Stack Developer
            </motion.h1>

            <motion.p
              variants={fadeInUp(18)}
              className="text-white/70 text-lg leading-relaxed max-w-xl"
            >
              I build modern websites, dashboards, and apps with smooth UI,
              strong backend, and clean code.
            </motion.p>

            <motion.div variants={fadeInUp(18)} className="flex flex-wrap gap-4">
              <motion.a
                {...tap}
                whileHover={{ scale: 1.02 }}
                href="#projects"
                className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
              >
                View Projects
              </motion.a>

              <motion.a
                {...tap}
                whileHover={{ scale: 1.02 }}
                href="/MalikRehan_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp(18)} className="flex items-center gap-4 pt-2">
              {[
                { Icon: Github, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Mail, link: "#contact" },
              ].map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  {...tap}
                  whileHover={{ y: -4 }}
                  href={link}
                  className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={pop(0.92, 0.85)} initial="hidden" animate="show" className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 to-pink-500/30 blur-2xl" />
            <motion.div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-black">
                <motion.img
                  initial={{ scale: 1.14, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-[360px] object-cover"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                  alt="Laptop"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { n: "1+", t: "Years Exp" },
                  { n: "10+", t: "Projects" },
                  { n: "5+", t: "Skills" },
                ].map((x) => (
                  <motion.div
                    key={x.t}
                    {...hoverLift}
                    {...tap}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-2xl font-bold">{x.n}</p>
                    <p className="text-sm text-white/60">{x.t}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
