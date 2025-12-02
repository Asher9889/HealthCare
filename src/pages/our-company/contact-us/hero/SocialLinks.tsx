// src/components/contact/SocialLinks.jsx
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
        Follow Us
      </h3>

      <div className="flex flex-wrap gap-3">
        {socials.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 bg-[var(--primary-bg-light-blue)] px-4 py-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--primary-bg-color)] hover:text-white transition-all hover:scale-105"
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
