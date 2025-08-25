
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhyChoose = () => {
  const points = [
    "Serving 30+ cities including Tier-2 & Tier-3 towns",
    "Strong hospital network & partner clinics",
    "USFDA-approved procedures with advanced surgical technologies",
    "Insurance support, paperwork assistance & free transportation",
    "Dedicated Care Coordinators for end-to-end patient assistance",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Glow Accent Background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            PureCheckup
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-14 text-lg"
        >
          Experience unmatched care, convenience, and expertise for every step
          of your healthcare journey.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 flex items-center justify-center shadow-lg">
                <Check className="text-white w-6 h-6" strokeWidth={3} />
              </div>

              {/* Text */}
              <p className="text-gray-100 text-left font-medium text-lg">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
