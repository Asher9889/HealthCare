
import { motion, type Variants } from "framer-motion";
import {
  Percent,
  Zap,
  Building2,
  FileText,
  HeartPulse,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Percent,
    title: "0% Interest EMI",
    desc: "Pay only the surgery cost, no extra fees.",
  },
  {
    icon: Zap,
    title: "Quick Approval",
    desc: "Get approval in just 5–10 minutes.",
  },
  {
    icon: Building2,
    title: "Top Hospitals & Surgeons",
    desc: "Trusted network across India.",
  },
  {
    icon: FileText,
    title: "Minimal Documentation",
    desc: "Only Aadhaar & PAN required.",
  },
  {
    icon: HeartPulse,
    title: "Available for All Surgeries",
    desc: "From minor to major procedures.",
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    desc: "Dedicated care coordinator.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function WhyChoose() {
  return (
    <section className="w-full relative bg-gradient-to-br from-[#f5fbff] to-[#f9fcff] py-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[var(--primary-bg-color)] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--orange-button-color)] opacity-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-blue-color)]">
            Why Choose PureCheckup No Cost EMI
          </h2>
          <p className="text-[var(--text-secondary)] mt-2 text-base">
            Transparent, fast approvals with dedicated care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ icon: Icon, title, desc }, _) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: 3,
                rotateY: -3,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon wrapper with glow */}
              <div className="relative w-fit">
                <motion.div
                  className="absolute inset-0 bg-[var(--primary-bg-color)] opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition-all duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 rounded-xl bg-[var(--primary-bg-light-blue)] group-hover:bg-[var(--primary-bg-color)] transition-colors duration-300 relative z-10"
                >
                  <Icon className="h-6 w-6 text-[var(--primary-bg-color)] group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>

              <h3 className="mt-4 text-[var(--dark-blue-color)] font-semibold text-lg">
                {title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mt-1">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
