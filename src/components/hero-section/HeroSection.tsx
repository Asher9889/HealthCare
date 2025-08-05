import { FaPhoneAlt } from "react-icons/fa";

const HighlightCard = ({ icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-4 border-r last:border-none pr-6">
    <div className="text-3xl">{icon}</div>
    <p className="text-gray-700">{text}</p>
  </div>
);

const HeroSection = () => {
  return (
    <div className="bg-[#fefcfb] py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side - Text + Highlights + Call Button */}
        <div className="flex-1">
          {/* NEW HEADING */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 leading-snug">
            Pure Treatment Matlab{" "}
            <span className="text-orange-500">PureCheckup</span> – Trusted
            Health & Surgery Partner
          </h2>

          {/* NEW SUBHEADING */}
          <p className="mt-2 text-gray-600 font-medium text-md sm:text-lg">
            50+ Doctors | 50+ Diseases | 10+ Cities
          </p>

          {/* EXISTING TITLE */}
          {/* <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-blue-700 leading-snug">
            Simplifying Surgery Experience in{" "}
            <span className="text-orange-500">Surat</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Book Free Appointments With Our Expert Doctors Near You
          </p> */}

          {/* Highlights */}
          <div className="bg-white shadow-md mt-8 rounded-lg p-6 flex flex-col sm:flex-row flex-wrap gap-6 border">
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
          </div>

          {/* Call Us Button */}
          <div className="mt-8">
            <button className="bg-orange-500 text-white font-semibold rounded-md px-6 py-3 flex items-center gap-2 hover:bg-orange-600 transition">
              Call Us <FaPhoneAlt /> 9211930749
            </button>
            <p className="mt-2 text-sm text-gray-600 font-medium">
              Book Your Doctor's Appointment Today – Fast & Easy
            </p>
          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div className="w-full lg:w-[400px] bg-[#002b45] text-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">
            Book FREE Doctor Appointment
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full p-3 rounded text-black outline-none bg-white"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-3 rounded text-black outline-none  bg-white"
            />
            <select className="w-full p-3 rounded text-black outline-none  bg-white">
              <option>Select Disease</option>
              <option>Appendicitis</option>
              <option>Gallstones</option>
              <option>Hernia</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded"
            >
              Book Free Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
