import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppointForm, CallNow } from "@/components";
import {
  CheckCircle2
} from "lucide-react";
import { useState } from "react";


export default function BookAppointMentPageView() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
       
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
            {appointmentOpen && <AppointForm />}
          </div>
        </motion.div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
