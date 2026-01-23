import { Github, Instagram, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { staggerContainer, fadeInUp, pop, hoverLift, tap } from "./motion";

export default function Hero() {
    const roles = [
      "Software Developer",
      "Web Developer",
      "UI/UX Designer",
      "Full Stack Developer",
    ];
  
    const [roleIndex, setRoleIndex] = useState(0);
    const [scrambled, setScrambled] = useState(roles[0]);
  
    const rafRef = useRef(null);
    const intervalRef = useRef(null);
    const scrambledRef = useRef(roles[0]);
  
    useEffect(() => {
      scrambledRef.current = scrambled;
    }, [scrambled]);
  
    useEffect(() => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  
      const scrambleTo = (newText) => {
        const oldText = scrambledRef.current;
        const maxLen = Math.max(oldText.length, newText.length);
        let frame = 0;
        const totalFrames = 52;
  
        const update = () => {
          frame++;
          const progress = frame / totalFrames;
  
          let out = "";
          for (let i = 0; i < maxLen; i++) {
            const to = newText[i] || " ";
  
            if (progress > i / maxLen) out += to;
            else out += chars[Math.floor(Math.random() * chars.length)];
          }
  
          setScrambled(out);
  
          if (frame < totalFrames) {
            rafRef.current = requestAnimationFrame(update);
          } else {
            setScrambled(newText);
            scrambledRef.current = newText;
          }
        };
  
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(update);
      };
  
      intervalRef.current = setInterval(() => {
        setRoleIndex((prev) => {
          const next = (prev + 1) % roles.length;
          scrambleTo(roles[next]);
          return next;
        });
      }, 2500);
  
      return () => {
        cancelAnimationFrame(rafRef.current);
        clearInterval(intervalRef.current);
      };
    }, []);
  

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
              variants={fadeInUp(20)}
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
                <br />
                MALIK REHAN
              </span>
              <br />
              a
              <br />
              <span className="inline-block min-h-[1.2em] min-w-[18ch] whitespace-nowrap">
  {scrambled}
</span>



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

            <motion.div
              variants={fadeInUp(18)}
              className="flex items-center gap-4 pt-2"
            >
              {[
                { Icon: Github, link: "https://github.com/MalikRehan0606" },
                {
                  Icon: Instagram,
                  link: "https://www.instagram.com/m_a_l_i_k_c_0_d_e_s/",
                },
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

          <motion.div
            variants={pop(0.92, 0.85)}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbit-ring"></div>
                </div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                  <div className="relative w-[340px] h-[340px]">
                    {[
                      { src: "/tech/React.svg", x: "50%", y: "-6%" },
                      { src: "/tech/Java.svg", x: "22%", y: "-5%" },
                      { src: "/tech/TypeScript.svg", x: "74%", y: "3%" },                      
                      { src: "/tech/JavaScript.svg", x: "90%", y: "30%" },
                      { src: "/tech/Python.svg", x: "92%", y: "55%" },
                      { src: "/tech/Node.svg", x: "78%", y: "75%" },
                      { src: "/tech/Firebase.svg", x: "50%", y: "90%" },
                      { src: "/tech/HTML5.svg", x: "15%", y: "85%" },
                      { src: "/tech/CSS3.svg", x: "-5%", y: "55%" },
                      { src: "/tech/Tailwind CSS.svg", x: "0%", y: "15%" },
                    ].map((t, i) => (
                      <motion.div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: t.x, top: t.y }}
                        animate={{ rotate: -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 18,
                          ease: "linear",
                        }}
                      >
                        <div className="tech-bubble">
                          <img
                            src={t.src}
                            className="w-9 h-9 object-contain"
                            alt="tech"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    initial={{ scale: 1.1, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    src="/malik4.png"
                    className="w-[290px] h-[290px] rounded-full object-cover border border-white/10"
                    alt="Malik"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { n: "1+", t: "Years Exp" },
                { n: "10+", t: "Projects" },
                { n: "5+", t: "Skills" },
              ].map((x) => (
                <motion.div
                  key={x.t}
                  {...hoverLift}
                  {...tap}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4"
                >
                  <p className="text-2xl font-bold">{x.n}</p>
                  <p className="text-sm text-white/60">{x.t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
