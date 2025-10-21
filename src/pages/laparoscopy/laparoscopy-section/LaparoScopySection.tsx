import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppointForm, CallNow, Heading } from "@/components";
import {
  CheckCircle2,
  Activity,
  ShieldCheck,
  HeartPulse,
  Clock,
  Droplet,
} from "lucide-react";
import { useState } from "react";

// Benefits with icons
const benefits = [
  {
    text: "Smaller incisions, minimal scarring",
    icon: Activity,
  },
  {
    text: "Reduced risk of infection",
    icon: ShieldCheck,
  },
  {
    text: "Quicker recovery time",
    icon: Clock,
  },
  {
    text: "Less blood loss during surgery",
    icon: Droplet,
  },
  {
    text: "Early return to normal activities",
    icon: HeartPulse,
  },
];

export default function LaparoscopySection() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <Heading text1="Benefits of" text2="Laparoscopy" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-800 font-medium">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center gap-5 p-10 rounded-2xl shadow-xl 
                     bg-gradient-to-r from-[#002b45] to-[#003a60] text-white"
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Book Your Appointment</h2>
            <p className="text-gray-200 max-w-xl mx-auto">
              Don’t wait — take the first step towards a healthier, pain-free life.
            </p>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
            <Button
              size="lg"
              className="rounded-lg px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-600 
                         shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-slide-down-animation-modal"
              data-hs-overlay="#hs-slide-down-animation-modal"
              onClick={() => setAppointmentOpen(true)}
            >
              <CheckCircle2 className="w-5 h-5" />
              Book Free Appointment
            </Button>
            <CallNow />
            {appointmentOpen && <AppointForm open={appointmentOpen} setOpen={setAppointmentOpen} />}
          </div>
        </motion.div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
