import Section from "./Section";
import { motion } from "framer-motion";
import { fadeInUp, hoverLift, tap } from "./motion";

const projects = [
  { title: "TypeZilla", desc: "Typing test with leaderboard, stats, and replays.", tech: "React • Firebase • Tailwind", live: "https://typezilla.qzz.io/",  },
  { title: "Car-AI", desc: "Built CarAI Marketplace, a generative AI-powered web platform to browse and manage car listings with image-based search, auto-filled car details for admins, test-drive booking, and a full admin dashboard.", tech: "Next.js, Firebase, Razorpay, Tailwind.", live: "https://car-ai-omega.vercel.app/" },
  { title: "Caliber Sports Club", desc: "Built a Multi-Coaching Management Platform for a cricket academy with player enrollment, membership purchases, community forum, cricket gear store, and private staff dashboards for managing users, schedules, and content.", tech: "Next.js • Firebase, React.", live: "https://www.calibersportsclub.in/",}
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
              
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
