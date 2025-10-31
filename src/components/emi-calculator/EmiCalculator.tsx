import { useMemo, useState } from "react";
import { Button, Input } from "../ui";
import { motion } from "framer-motion";

type EMICalculatorProps = {
  onApply: () => void;
  defaultCost?: number | string;
  defaultInterestRate?: number | string;
  defaultTenure?: number | string;
  setHighlight?: (highlight: boolean) => void;
};

const TENURE_OPTIONS = [3, 6, 9, 12];

export default function EMICalculator({
  onApply,
  defaultCost = 50000,
  defaultInterestRate = 8.5,
  defaultTenure = 6
}: EMICalculatorProps) {
  const [form, setForm] = useState({
    cost: Number(defaultCost),
    interestRate: Number(defaultInterestRate),
    tenure: Number(defaultTenure),
  });

  // 🧮 Derived values using useMemo for performance
  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const { cost, interestRate, tenure } = form;
    if (!cost || (cost) <= 0 || !tenure) {
      return { emi: 0, totalInterest: 0, totalPayment: 0 };
    }

    if (interestRate === 0) {
      const emi = cost / tenure;
      return {
        emi: Math.round(emi),
        totalInterest: 0,
        totalPayment: cost,
      };
    }

    const r = interestRate / 12 / 100;
    const emi = (cost * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - cost;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }, [form]);

  const handleChange = (key: keyof typeof form, value: string) => {
  setForm((prev) => ({
    ...prev,
    [key]: value === "" ? "" : Number(value),
  }));
};

  

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      {/* Surgery Cost */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Surgery Cost</label>
        <Input
          type="number"
          value={form.cost}
          onChange={(e) => handleChange("cost", e.target.value)}
          placeholder="Enter amount (e.g. 50000)"
          className="rounded-lg border-gray-300"
        />
      </div>

      {/* Interest Rate */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Interest Rate (per annum)</label>
        <Input
          type="number"
          value={form.interestRate}
          onChange={(e) => handleChange("interestRate", e.target.value)}
          placeholder="0 for No Cost EMI"
          className="rounded-lg border-gray-300"
        />
      </div>

      {/* Tenure */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Tenure (months)</label>
        <div className="flex flex-wrap gap-3">
          {TENURE_OPTIONS.map((t) => (
            <Button
              key={t}
              variant={form.tenure === t ? "default" : "outline"}
              onClick={() => setForm((prev) => ({ ...prev, tenure: t }))}
              className={`rounded-full px-6 ${
                form.tenure === t ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {t} months
            </Button>
          ))}
        </div>
      </div>

      {/* EMI Result */}
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
}
