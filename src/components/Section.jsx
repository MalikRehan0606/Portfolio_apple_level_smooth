import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewport } from "./motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerContainer(0.06, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-8"
        >
          {title ? (
            <motion.div variants={fadeInUp(18)} className="space-y-2">
              <h2 className="text-3xl font-bold">{title}</h2>
              {subtitle ? <p className="text-white/70">{subtitle}</p> : null}
            </motion.div>
          ) : null}

          <motion.div variants={fadeInUp(26)}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
