import { useRef, useState} from "react";
import { motion } from "framer-motion";
import { Calculator, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {  QuickEmiCheck } from "@/components";
import EMICalculator from "@/components/emi-calculator/EmiCalculator";

export default function EmiSection() {
  const applyFormRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(false);

  const scrollToApplyForm = () => {
    applyFormRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setHighlight(true);
    setTimeout(() => setHighlight(false), 2000);
  };
  const quickEmiFormConfig = {
    focusEmiForm: highlight,
    setFocusEmiForm: setHighlight
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">Calculate & Apply for EMI</h2>
        <p className="text-gray-600">
          Estimate your monthly payments and apply for instant EMI approval.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* EMI Calculator */}
        <motion.div
          className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">EMI Calculator</h3>
            </div>
            <Separator className="mb-6" />
          </div>
          <EMICalculator setHighlight={setHighlight} onApply={scrollToApplyForm} />
        </motion.div>

        {/* Apply for EMI */}
        <motion.div
          ref={applyFormRef}
          className="bg-blue-50 rounded-2xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Apply for EMI</h3>
          </div>
          <Separator className="mb-4" />
          <QuickEmiCheck config={quickEmiFormConfig}/>
        </motion.div>
      </div>
    </section>
  );
}
