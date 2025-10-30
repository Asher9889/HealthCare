import { motion } from "framer-motion";
import { Calculator, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { QuickEmiCheck } from "@/components";

const EMICalculator = ({ onApply }: { onApply: () => void }) => {
  const [cost, setCost] = useState<number>(50000);
  const [tenure, setTenure] = useState<number>(6);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const calculateEMI = () => {
    if (!cost || cost <= 0) return setEmi(0);

    let monthlyEmi = 0;
    let totalAmt = 0;
    let totalInt = 0;

    if (interestRate === 0) {
      monthlyEmi = cost / tenure;
      totalAmt = cost;
      totalInt = 0;
    } else {
      const r = interestRate / 12 / 100;
      monthlyEmi = (cost * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
      totalAmt = monthlyEmi * tenure;
      totalInt = totalAmt - cost;
    }

    setEmi(Math.round(monthlyEmi));
    setTotalPayment(Math.round(totalAmt));
    setTotalInterest(Math.round(totalInt));
  };

  useEffect(() => {
    calculateEMI();
  }, [cost, tenure, interestRate]);

  const tenures = [3, 6, 9, 12];

  return (
    <div className="space-y-6 flex flex-col justify-between h-full">
      {/* Cost Input */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Surgery Cost</label>
        <Input
          type="number"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="rounded-lg border-gray-300"
          placeholder="Enter amount (e.g. 50000)"
        />
      </div>

      {/* Interest Rate */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Interest Rate (per annum)</label>
        <Input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="rounded-lg border-gray-300"
          placeholder="0 for No Cost EMI"
        />
      </div>

      {/* Tenure Buttons */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Tenure (months)</label>
        <div className="flex flex-wrap gap-3">
          {tenures.map((t) => (
            <Button
              key={t}
              variant={tenure === t ? "default" : "outline"}
              onClick={() => setTenure(t)}
              className={`rounded-full px-6 ${
                tenure === t ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {t} months
            </Button>
          ))}
        </div>
      </div>

      {/* Result */}
      <motion.div
        key={emi}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-blue-100 p-4 rounded-xl space-y-2"
      >
        <h4 className="font-semibold text-gray-800 flex justify-between">
          Monthly EMI <span className="text-blue-700">₹{emi.toLocaleString("en-IN")}</span>
        </h4>
        <div className="text-sm text-gray-600 flex justify-between">
          <span>Total Interest</span>
          <span>₹{totalInterest.toLocaleString("en-IN")}</span>
        </div>
        <div className="text-sm text-gray-600 flex justify-between">
          <span>Total Payment</span>
          <span>₹{totalPayment.toLocaleString("en-IN")}</span>
        </div>
      </motion.div>

      {/* CTA */}
      <Button
        onClick={onApply}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-base"
      >
        Apply for EMI →
      </Button>
    </div>
  );
};

export default function EmiSection() {
  const applyFormRef = useRef<HTMLDivElement>(null);
  const scrollToApplyForm = () => {
    applyFormRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <EMICalculator onApply={scrollToApplyForm} />
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
          <QuickEmiCheck />
        </motion.div>
      </div>
    </section>
  );
}
