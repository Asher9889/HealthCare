import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, ClipboardList, Layers2, HeartPulse } from "lucide-react";
import { Heading } from "@/components";

const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "Discuss symptoms and medical history with an expert.",
    icon: Stethoscope,
  },
  {
    number: "2",
    title: "Diagnosis & Planning",
    description: "Comprehensive clinical exam and personalized treatment plan.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Laser-Assisted Surgery",
    description: "Minimally invasive laser procedures with faster recovery.",
    icon: Layers2,
  },
  {
    number: "4",
    title: "Aftercare & Recovery",
    description: "Diet guidance, wound care, and regular follow-ups.",
    icon: HeartPulse,
  },
];

export default function TreatmentSteps() {
  return (
    <section className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800"
        >
          <Heading text1="How We Treat:" text2="4-Step Process"/>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-slate-600 mt-3 max-w-2xl mx-auto"
        >
          A trusted, patient-first approach from consultation to recovery.
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  {/* Number Badge */}
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-(--orange-button-color) text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner">
                    <step.icon className="h-6 w-6" />
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
