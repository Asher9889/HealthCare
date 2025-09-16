import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppointForm, CallNow, Heading } from "@/components";
import {
  MapPin,
  Stethoscope,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const cities = [
  "Jaipur",
  "Ahmedabad",
  "Bhopal",
  "Vadodara",
  "Indore",
  "Gurgaon",
  "Noida",
  "Kanpur",
  "Lucknow",
];

const conditions = [
  "Uterine fibroids",
  "Ovarian cysts",
  "Endometriosis",
  "Ectopic pregnancy",
  "Gallstones & appendicitis",
  "Hernia repair",
  "Infertility diagnosis & treatment",
];

const benefits = [
  "Smaller incisions, minimal scarring",
  "Reduced risk of infection",
  "Quicker recovery time",
  "Less blood loss during surgery",
  "Early return to normal activities",
];

export default function LaparoscopySection() {
      const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close
    
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Top Cities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Heading text1="Top Cities Where We Provide" text2="Proctology Treatment" />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <p className="text-gray-700 font-medium">{city}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Laparoscopy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Heading text1="About" text2="Laparoscopy" />
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            PureCheckup brings you advanced laparoscopy surgery services
            performed by highly experienced surgeons using the latest minimally
            invasive technology. Laparoscopy allows doctors to diagnose and treat
            various abdominal and pelvic conditions with smaller cuts, less pain,
            and faster recovery.
          </p>
        </motion.div>

        {/* What is Laparoscopy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
        >
          <Heading text1="What is" text2="Laparoscopy?" />
          <p className="text-gray-700 leading-relaxed mt-3 text-lg">
            At <span className="font-semibold text-blue-600">PureCheckup.com</span>,
            we offer advanced laparoscopy treatment in India for safe and effective
            care. It is a minimally invasive surgery using a laparoscope (camera +
            light) done through small cuts. It is commonly used for hernia surgery,
            gallstones, appendicitis, and other abdominal treatments.
            <br />
            <br />
            Compared to open surgery, laparoscopy ensures faster recovery, less
            pain, minimal scars, and shorter hospital stay. Choose PureCheckup.com
            for expert surgeons and trusted laparoscopic care in India.
          </p>
        </motion.div>

        {/* Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Heading text1="Conditions" text2="Treated with Laparoscopy" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">{condition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Heading text1="Benefits of" text2="Laparoscopy" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        {/* CTA */}
      <motion.div
        className="flex flex-col items-center gap-3 p-6 bg-(--dark-blue-color) text-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold">Book Your Appointment</h2>
        <p>Don’t wait — take the first step towards a pain-free life.</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <Button size="lg" className="border border-white rounded px-4 py-2 font-semibold hover:scale-[0.99]  transition text-sm md:text-base  bg-(--dark-blue-color) disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
            onClick={() => setAppointmentOpen(true)}
          >

            <Calendar className="w-5 h-5 mr-2" /> Book Free Appointment
          </Button>
          <CallNow />
          {appointmentOpen && (
            <AppointForm />
          )}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
