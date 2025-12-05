import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AppointFormWithNoReason from "../book-appointment-form/AppointFormWithReason";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = ({ cityName = "" }: { cityName?: string }) => {
  return (
    <section className="py-6 px-6 w-full ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-start">
        
        {/* MOBILE FORM */}
        <div className="md:hidden w-full">
          <AppointFormWithNoReason />
        </div>

        {/* LEFT CONTENT */}
        <motion.div 
          className="flex-1"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Intro Label */}
          {cityName && (
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold text-blue-700 tracking-tight"
            >
              Advanced Surgery Care in <span className="text-orange-500">{cityName}</span>
            </motion.h2>
          )}

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            className="mt-2 text-3xl sm:text-5xl font-extrabold text-(--dark-blue-color)  leading-[1.2]"
          >
            Pure Treatment Matlab{" "}
            <span className="text-orange-500">PureCheckup </span>
            Trusted Health & Surgery Partner{" "}
            {cityName && <span className="">in {cityName}</span>}
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-600 text-lg max-w-xl"
          >
            Top Specialists | Trusted Procedures | Seamless Care Experience
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="flex gap-10 mt-4"
          >
            <Stat number="40+" label="DOCTORS" />
            <Divider />
            <Stat number="50+" label="DISEASES" />
            <Divider />
            <Stat number="30+" label="CITIES" />
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div variants={fadeUp} className="mt-6">
            <a href="tel:9211930749">
              <button className="bg-orange-500 text-white font-semibold rounded-lg px-7 py-3 flex items-center gap-2 hover:bg-orange-600 transition">
                <FaPhoneAlt /> Call Us • 9211930749
              </button>
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Book Your Appointment in 60 Seconds
            </p>
          </motion.div>

          {/* FEATURE LIST */}
          <motion.div
            variants={fadeUp}
            className="mt-4 space-y-4 text-gray-700"
          >
            <Feature icon="📋" text="Consult for 50+ Health Conditions With Trusted Doctors Across India" />
            <Feature icon="👨‍⚕️" text="Choose Between Online or In-Person Appointments With Qualified Specialists" />
            <Feature icon="🤝" text="Receive Personalized Medical Support From Diagnosis to Recovery" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AppointFormWithNoReason />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

/* ------------ SMALL SUBCOMPONENTS ------------ */

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div>
    <h2 className="text-blue-700 font-bold text-4xl">{number}</h2>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const Divider = () => (
  <div className="w-[1px] h-10 bg-zinc-200" />
);

const Feature = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3 text-md">
    <span className="text-xl">{icon}</span>
    <p>{text}</p>
  </div>
);
