import { Heading } from "@/components";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Experienced Surgeons",
    desc: "15+ years of expertise in advanced laparoscopic surgery",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Minimally invasive equipment for safer procedures",
  },
  {
    title: "Less Pain, Faster Recovery",
    desc: "Smaller incisions mean reduced hospital stay",
  },
  {
    title: "Affordable Costs",
    desc: "Transparent pricing with complete care packages",
  },
  {
    title: "Personalized Care",
    desc: "Dedicated support at every stage of your treatment",
  },
  {
    title: "NABH-Accredited Hospitals",
    desc: "Safe & hygienic surgical facilities",
  },
  {
    title: "Full Insurance Support",
    desc: "Hassle-free documentation",
  },
];

const extraPoints = [
  {
    title: "EMI Options Available",
    desc: "Affordable treatment without compromise",
  },
  {
    title: "Free Online & Offline Consultation",
    desc: "Zero waiting",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
            <Heading text1="Why Choose PureCheckup for" text2="Laparoscopy Care?" />
        </motion.h2>

        {/* Main List */}
        <ul className="space-y-4">
          {points.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              
              <CheckCircle2 className="text-[#3E85D9] w-6 h-6 mr-3" />
              <p className="text-gray-700">
                <span className="font-semibold">{item.title}</span> – {item.desc}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Extra Points */}
        <ul className="space-y-4">
          {extraPoints.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <CheckCircle2 className="text-[#3E85D9] w-6 h-6 mr-3" />
              <p className="text-(--dark-blue-color)">
                <span className="font-semibold">{item.title}</span> – {item.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
