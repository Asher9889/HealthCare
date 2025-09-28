import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { JSX } from "react";

interface TreatmentOption {
    id: number;
    icon: JSX.Element;
    title: string;
    points: string[];
    highlight: boolean;
}

export default function ConditionTreatmentOptions({ treatmentOptions }: { treatmentOptions: TreatmentOption[] }) {
  return (
    <div className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {treatmentOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              className={`rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0 overflow-hidden relative ${
                option.highlight ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  {option.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {option.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {option.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className={`w-full rounded-full text-sm font-medium py-2 ${
                      option.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Consult Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
