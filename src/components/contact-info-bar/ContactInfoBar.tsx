import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

export default function ContactInfoBar() {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Helpline",
      value: "+91-9211930749",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      label: "WhatsApp",
      value: "+91-9211930749",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "health@purecheckup.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      label: "Availability",
      value: "24×7 Across India",
    },
  ];

  return (
    <section className="w-full bg-blue-600 py-10 md:px-16 my-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3 text-white"
          >
            <div className="flex items-center justify-center bg-blue-700/50 rounded-full p-3">
              {item.icon}
            </div>
            <div className="leading-tight">
              <p className="text-sm opacity-80">{item.label}</p>
              <p className="font-semibold text-base">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
