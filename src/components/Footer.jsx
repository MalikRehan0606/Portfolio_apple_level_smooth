import { motion } from "framer-motion";
import { fadeInUp, viewport } from "./motion";

export default function Footer() {
  return (
<footer className="w-full py-6 px-4 text-center text-sm text-white/60">
<p className="leading-relaxed">
  © 2026 Malik Rehan.
  <br className="sm:hidden" />
  Crafted with ❤️ using React & Tailwind.
</p>

</footer>

  );
}
