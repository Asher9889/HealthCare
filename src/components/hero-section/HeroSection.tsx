import { FaPhoneAlt } from "react-icons/fa";
import AppointFormWithNoReason from "../book-appointment-form/AppointFormWithReason";



const HeroSection = () => {
  return (
    <div className="py-12 px-6 h-full w-full">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* Mobile View - Appointment Form */}
        <div className="md:hidden w-full">
          <AppointFormWithNoReason />

        </div>

        {/* Left Side - Text + Highlights + Call Button */}
        <div className="flex-1">
          {/* NEW HEADING */}
          <h2 className="text-3xl sm:text-4xl font-bold text-(--primary-bg-color) leading-snug">
            Pure Treatment Matlab{" "}
            <span className="text-orange-500">PureCheckup</span> – Trusted
            Health & Surgery Partner
          </h2>

          {/* NEW SUBHEADING */}
          {/* <p className="mt-2 text-gray-600 font-medium text-md sm:text-lg">
            50+ Doctors | 50+ Diseases | 10+ Cities
          </p> */}
          {/* Stats */}
          <div className="flex flex-row gap-10 mt-6">
            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">40+</h2>
              <p className="text-gray-600 text-sm">DOCTORS</p>

            </div>
            <div className=" w-[1px] bg-zinc-200" />

            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">50+</h2>
              <p className="text-gray-600 text-sm">DISEASES</p>
            </div>
            <div className=" w-[1px] bg-zinc-200" />
            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">30+</h2>
              <p className="text-gray-600 text-sm">CITIES</p>
            </div>
          </div>

          {/* EXISTING TITLE */}
          {/* <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-blue-700 leading-snug">
            Simplifying Surgery Experience in{" "}
            <span className="text-orange-500">Surat</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Book Free Appointments With Our Expert Doctors Near You
          </p> */}

          {/* Call Us Button */}
          <div className="mt-8">
            <a href="tel:9211930749">
              <button className="bg-orange-500 text-white font-semibold rounded-md px-6 py-2 flex items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                Call Us <FaPhoneAlt /> 9211930749
              </button>
            </a>

            <p className="mt-2 text-sm text-gray-600 font-medium">
              Book Your Doctor's Appointment Today – Fast & Easy
            </p>
          </div>

          {/* Highlights */}
          {/* <div className="bg-white shadow-md mt-8 rounded-lg p-6 flex flex-col sm:flex-row flex-wrap gap-6 border">
            <HighlightCard
              icon={<span>💬</span>}
              text="Consult for 50+ Health Conditions With Trusted Doctors Across India"
            />
            <HighlightCard
              icon={<span>👨‍⚕️</span>}
              text="Choose Between Online or In-Person Appointments With Qualified Specialists"
            />
            <HighlightCard
              icon={<span>🤝</span>}
              text="Receive Personalized Medical Support From Diagnosis to Recovery"
            />
          </div> */}

          {/* Features */}
          <div className="mt-8 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span>📋</span>
              <p>Consult for 50+ Health Conditions With Trusted Doctors Across India</p>
            </div>
            <div className="flex items-center gap-3">
              <span>👨‍⚕️</span>
              <p>Choose Between Online or In-Person Appointments With Qualified Specialists</p>
            </div>
            <div className="flex items-center gap-3">
              <span>📦</span>
              <p>Receive Personalized Medical Support From Diagnosis to Recovery</p>
            </div>
          </div>
        </div>

        {/* Right Side - Appointment Form */}

          <div className="hidden md:inline">
          <AppointFormWithNoReason />

        </div>
        


      </div>
    </div>
  );
};

export default HeroSection;
