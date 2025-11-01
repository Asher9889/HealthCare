import { motion } from "framer-motion";
import {  PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CallNow, WhatsaapButton } from "@/components";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50/60 rounded-2xl p-8 shadow-sm border border-blue-100"
      >
        {/* Header */}
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-blue-color)]">
            We’re Here to Help You, Anytime
          </h2>
          <p className="text-gray-600">
            Get answers about surgeries, insurance claims, hospital coordination, and EMI options. 
            Our patient care team is available <span className="font-semibold text-gray-700">24×7</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-start gap-4 mb-4">
            <CallNow />
            <WhatsaapButton children="WhatsApp" className="rounded-md" />
          <Button
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl font-medium flex items-center gap-2 px-5"
          >
            <PhoneCall className="w-4 h-4" />
            Request Callback
          </Button>
        </div>

        <Separator className="my-4 max-w-sm" />

        {/* Footer note */}
        <div className="flex justify-start items-center gap-2 text-sm text-gray-500">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span>Secure. Fast. Patient-first support.</span>
        </div>
      </motion.div>
    </section>
  );
}
