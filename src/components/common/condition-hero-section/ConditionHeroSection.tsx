import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

interface TreatmentSectionProps {
  title: string;
  description: string;
  primaryBtn: { label: string; onClick?: () => void };
  secondaryBtn: { label: string; onClick?: () => void };
  features: string[];
  cities: string[];
  consultations: string[];
}

const ConditionHeroSection = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  features,
  cities,
  consultations,
}: TreatmentSectionProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center space-y-5"
      >
        <h1 className="text-3xl font-bold text-(--text-primary) leading-snug">
          {title}
        </h1>
        <p className="text-gray-600">{description}</p>

        <div className="flex gap-3">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            onClick={primaryBtn.onClick}
          >
            {primaryBtn.label}
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-green-500 text-green-600"
            onClick={secondaryBtn.onClick}
          >
            {secondaryBtn.label}
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-3 pt-2">
          {features.map((f, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-gray-100"
            >
              {f}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Book Free Consultation
            </h2>

            {/* Name + Mobile */}
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Enter your full name" />
              <Input placeholder="+91" />
            </div>

            {/* City + Consultation */}
            <div className="grid grid-cols-2 gap-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Clinic / Online" />
                </SelectTrigger>
                <SelectContent>
                  {consultations.map((c) => (
                    <SelectItem key={c} value={c.toLowerCase()}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Upload */}
            <label className="flex items-center gap-2 px-3 py-2 border rounded-md cursor-pointer text-gray-500 hover:bg-gray-50">
              <Upload size={16} />
              <span>Tap to upload image</span>
              <input type="file" className="hidden" />
            </label>
            <p className="text-xs text-gray-400">
              Supported: JPG, PNG. Max 10MB.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="rounded-xl">
                More Info
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                Submit & Get Callback
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ConditionHeroSection;
