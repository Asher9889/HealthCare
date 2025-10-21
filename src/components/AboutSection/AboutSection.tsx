import { useState } from "react";
import { AppointForm } from "@/components";

interface CardItem {
  id: string;
  title: string;
  description: string;
}  

interface AboutSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  cards: CardItem[];
}

const AboutSection = ({
  heading,
  description,
  buttonText,
  cards,
}: AboutSectionProps) => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b45] mb-3">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg mb-6">{description}</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded"
            onClick={() => setAppointmentOpen(true)}
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-slide-down-animation-modal"
            data-hs-overlay="#hs-slide-down-animation-modal"
          >
            {buttonText}
          </button>
          {appointmentOpen && <AppointForm open={appointmentOpen} setOpen={setAppointmentOpen} />}
        </div>

        {/* Right Details Section */}
        <div className="bg-[#f3f4f6] p-8 rounded-lg w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={card.id}>
              <h3 className="text-4xl font-bold text-orange-500 mb-2">
                {String(index + 1).padStart(2, "0")}.
              </h3>
              <h4 className="text-lg font-bold text-[#111827] mb-2">
                {card.title}
              </h4>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
