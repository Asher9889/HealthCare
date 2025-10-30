
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Gem,
  Grid2x2,
  Stethoscope,
  Grid,
  ArrowRight,
} from "lucide-react";

const surgeries = [
  { icon: Activity, title: "Piles / Fissure / Fistula" },
  { icon: Shield, title: "Hernia" },
  { icon: Grid2x2, title: "Gallbladder Stone" },
  { icon: Gem, title: "Kidney Stone" },
  { icon: Stethoscope, title: "Urology Surgeries" },
  { icon: Grid, title: "Gynaecology Surgeries" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function SurgeriesCovered() {
  return (
    <section className="relative bg-gradient-to-b from-[#f4faff] to-[#f9fbff] py-20 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[var(--primary-bg-color)] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--orange-button-color)] opacity-10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-blue-color)]">
            Surgeries Covered Under EMI
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 text-base">
            Choose your treatment. Pay later in easy installments.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {surgeries.map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -3,
                boxShadow:
                  "0 15px 25px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="group bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow animation behind icon */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--primary-bg-color)] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-all duration-700" />

              <div className="relative flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--primary-bg-light-blue)] group-hover:bg-[var(--primary-bg-color)] transition-colors duration-300">
                  <Icon className="h-6 w-6 text-[var(--primary-bg-color)] group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-[var(--dark-blue-color)] font-semibold text-lg">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow:
                "0 20px 30px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-[var(--primary-bg-color)] to-[var(--orange-button-color)] text-white rounded-2xl font-semibold shadow-md cursor-pointer hover:shadow-xl transition-all"
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2"
            >
              <Stethoscope className="h-6 w-6" />
              <span>View All Treatments</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
