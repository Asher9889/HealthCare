// src/components/contact/ContactHeading.jsx
import { motion } from "framer-motion";

export default function ContactHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="inline-block bg-[var(--primary-bg-light-blue)] text-[var(--primary-bg-color)] px-4 py-1 rounded-full mb-3">
        Let’s Connect with Care
      </div>

      <h2 className="text-4xl font-bold text-[var(--text-primary)]">
        Contact Us
      </h2>

      <p className="mt-4 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
        Your health journey deserves personalized attention. Whether you have
        questions, need a second opinion, or want to book a free surgery
        consultation — our expert team is just a message away.
      </p>

      <p className="text-[var(--text-secondary)] mt-2 max-w-3xl">
        At PureCheckup, we're available 24×7 to assist you with guidance,
        hospital coordination, and treatment support.
      </p>
    </motion.div>
  );
}
