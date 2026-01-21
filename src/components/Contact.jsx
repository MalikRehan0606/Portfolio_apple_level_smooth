import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import { fadeInUp, hoverLift, tap } from "./motion";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
    } catch (err) {
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Send a message and I’ll reply soon.">
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp(18)} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <p className="text-white/70 leading-relaxed">Update your email, github, linkedin in this section.</p>
          <div className="mt-6 space-y-3 text-white/70">
            <p>Email: <span className="text-white">your@email.com</span></p>
            <p>GitHub: <span className="text-white">github.com/username</span></p>
            <p>LinkedIn: <span className="text-white">linkedin.com/in/username</span></p>
          </div>
        </motion.div>

        <motion.form ref={formRef} onSubmit={sendEmail} variants={fadeInUp(22)}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="grid gap-4">
            <input name="title" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30" placeholder="Subject" />
            <input name="name" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30" placeholder="Your Name" />
            <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30" placeholder="Your Email" />
            <textarea name="message" rows="5" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30" placeholder="Your Message" />

            <motion.button type="submit" disabled={loading} {...hoverLift} {...tap}
              className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition disabled:opacity-60">
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status ? <p className="text-sm text-white/70">{status}</p> : null}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
