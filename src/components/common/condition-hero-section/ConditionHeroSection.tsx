import { motion } from "framer-motion";
import ConditionTreatmentForm from "@/components/condition-treatment-from/ConditionTreatmentForm";
import BookNowButton from "@/components/book-now-button/BookNowButton";
import CallNow from "@/components/call-now/CallNow";

interface TreatmentSectionProps {
  title: string;
  description: string;
  primaryBtn: { label: string; onClick?: () => void };
  secondaryBtn: { label: string; onClick?: () => void };
  features: string[];
  cities: string[];
  selectedCity?: string;
  consultations?: string[];
}


const ConditionHeroSection = ({
  title,
  description,
  primaryBtn,
  features,
  cities,
  selectedCity,
  consultations =["Clinic", "Online"],
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
          <BookNowButton text={primaryBtn.label} className="h-10 flex flex-row justify-center items-center"/>
          <CallNow />
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
      <ConditionTreatmentForm selectedCity={selectedCity || ""} cities={cities} consultations={consultations} />
      
    </section>
  );
};

export default ConditionHeroSection;
