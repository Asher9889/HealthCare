import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Activity, GitBranch, Shield, Link2, Heart } from "lucide-react";

const treatments = [
  {
    title: "Piles",
    description: "Laser hemorrhoidoplasty for quick relief.",
    icon: Flame,
  },
  {
    title: "Anal Fissure",
    description: "Sphincter-sparing techniques to heal tears.",
    icon: Activity,
  },
  {
    title: "Anal Fistula",
    description: "Laser FiLaC and VAAFT options.",
    icon: GitBranch,
  },
  {
    title: "Pilonidal Sinus",
    description: "Laser ablation with minimal downtime.",
    icon: Shield,
  },
  {
    title: "AV Fistula",
    description: "Expert evaluation and management.",
    icon: Link2,
  },
  {
    title: "Other Conditions",
    description: "Comprehensive colorectal care.",
    icon: Heart,
  },
];

export default function Treatment() {
  return (
    <section className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center"
        >
          Conditions We Treat
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-center mt-2 mb-10"
        >
          Laser-assisted, minimally invasive procedures by senior proctologists.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-300 p-3 rounded-xl">
                      <treatment.icon className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-800 hover:underline cursor-pointer">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {treatment.description}
                      </p>
                    </div>
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
