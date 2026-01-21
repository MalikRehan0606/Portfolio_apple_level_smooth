import { motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(links.map((l) => l.id));

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3"
        >
          <a href="#home" className="font-bold tracking-wide">
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-2 text-sm text-white/80 relative">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative px-4 py-2 rounded-2xl transition ${
                  active === l.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {active === l.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-2xl bg-white/10 border border-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                ) : null}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}
