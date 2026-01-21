import { motion } from "framer-motion";
import { fadeInUp, viewport } from "./motion";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeInUp(12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 flex items-center justify-between flex-wrap gap-3"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">Apple-level smooth ✨</p>
        </motion.div>
      </div>
    </footer>
  );
}
