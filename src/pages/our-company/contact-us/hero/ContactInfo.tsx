// src/components/contact/ContactInfo.jsx
import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
        Get In Touch
      </h3>

      <div className="flex flex-col space-y-3">

        <div className="flex items-center gap-3 bg-[var(--primary-bg-light-blue)] p-3 rounded-lg cursor-pointer hover:scale-[1.01] transition">
          <Phone className="text-[var(--primary-bg-color)]" />
          <span className="font-medium text-[var(--text-primary)]">
            9211930749
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[var(--primary-bg-light-blue)] p-3 rounded-lg cursor-pointer hover:scale-[1.01] transition">
          <Mail className="text-[var(--primary-bg-color)]" />
          <span className="font-medium text-[var(--text-primary)]">
            health@purecheckup.com
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[var(--primary-bg-light-blue)] p-3 rounded-lg">
          <Clock className="text-[var(--primary-bg-color)]" />
          <span className="text-[var(--text-secondary)]">
            24×7 — Because care never sleeps.
          </span>
        </div>

      </div>
    </motion.div>
  );
}
