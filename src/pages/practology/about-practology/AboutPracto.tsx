import { AppointForm } from "@/components";
import { useState } from "react";

const AboutPracto = () => {
    const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close
  
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b45] mb-3">About Practology</h2>
          <p className="text-gray-600 text-lg mb-6">
            Proctology focuses on disorders of the rectum, anus, and colon. Our senior surgeons specialize in modern, minimally invasive approaches.          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded"
            onClick={() => setAppointmentOpen(true)}
            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"

          >
            Book Free Appointment
          </button>
          {appointmentOpen && (
            <AppointForm />
          )}
        </div>

        {/* Right Details Section */}
        <div className="bg-[#f3f4f6] p-8 rounded-lg w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 01 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">01.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              What is Proctology?
            </h4>
            <p className="text-gray-700">
                It is a surgical subspecialty dealing with conditions like piles, fissures, fistulas, and pilonidal sinus, emphasizing accurate diagnosis and tailored treatment.            </p>
          </div>

          {/* Card 02 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">02.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Conditions Treated
            </h4>
            <p className="text-gray-700">
                Piles, anal fissure, anal fistula, pilonidal sinus, abscesses, constipation-related complications, and more.            
            </p>
          </div>

          {/* Card 03 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">03.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">Expertise of PureCheckup</h4>
            <p className="text-gray-700">
                100% laser-assisted treatments by experienced proctologists, NABH-accredited partner hospitals, and comprehensive aftercare.
            </p>
          </div>

          {/* Card 04 */}
          {/* <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">04.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Hassle-Free Surgery Experience
            </h4>
            <p className="text-gray-700">
              From free transport to hospital admission and discharge, a dedicated Care Coordinator supports you at every step.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">05.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Post-Surgery Recovery Support
            </h4>
            <p className="text-gray-700">
              Enjoy free follow-ups, personalized diet plans, and recovery guidance to help you get back to normal, faster and healthier.            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutPracto;
