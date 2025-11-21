import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function SettingStandards() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-sm mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        
        {/* LEFT CONTENT */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            Setting new standards
          </h2>

          <p className="text-[var(--text-secondary)] mt-2 max-w-md">
            We measure what matters—time to care, outcomes, and patient 
            satisfaction.
          </p>

          <div className="mt-6 p-5 rounded-lg bg-white shadow-sm max-w-md">
            <p className="text-4xl font-bold text-[var(--text-primary)] flex items-baseline gap-2">
              98% <span className="text-xl font-medium text-[var(--text-secondary)]">patient satisfaction</span>
            </p>

            <p className="text-sm text-[var(--text-light)] mt-2">
              Updated monthly • Verified by third-party surveys
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-64 md:h-full w-full">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410_1280.jpg"
            alt="Medical Tools"
            className="object-cover w-full h-full rounded-none"
          />

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-4 right-4 bg-[var(--orange-button-color)] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            12% faster access
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
