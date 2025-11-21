import { motion } from "framer-motion";

export default function ExcellenceSection() {
  return (
    <section className="w-full bg-[var(--primary-bg-light-blue)] py-20 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl px-6"
      >
        {/* Top Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="px-4 py-1 rounded-full bg-white/60 text-[var(--text-secondary)] text-sm font-medium inline-block mb-4"
        >
          Patient-first since day one
        </motion.span>

        {/* Bold Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3"
        >
          Excellence. Innovation. Care.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto"
        >
          Our promise is simple—care that’s easy to access, easy to understand,
          and easy to trust.
        </motion.p>
      </motion.div>
    </section>
  );
}
