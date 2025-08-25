import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Hospital, Users } from "lucide-react";

const AboutPureCheckup = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { number: "50+", label: "Clinics Across India", icon: Building2 },
    { number: "10+", label: "Partner Hospitals", icon: Hospital },
    { number: "15+", label: "Super Specialist Surgeons", icon: Users },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            <span className="text-[#3E85D9]">About </span>
            <span className="text-orange-500">PureCheckup: </span>
            <span className="text-[#3E85D9]">Revolutionizing Surgical Care in India</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#3E85D9]">PureCheckup</span>, 
            we are more than just a healthcare provider; we are a next-gen healthtech startup 
            on a mission to make advanced surgical care affordable, accessible, and seamless 
            for every Indian.
          </p>
        </div>

        {/* Mission / Read More */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-lg rounded-3xl p-8 mb-16 relative">
          <p className="text-gray-700 leading-relaxed mb-4">
            Currently serving{" "}
            <strong>Jaipur, Ahmedabad, Indore, Vadodara, and Bhopal</strong>
            {!isExpanded && (
              <>
                ...{" "}
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-[#3E85D9] font-semibold hover:underline"
                >
                  Read more
                </button>
              </>
            )}
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="expand"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We’re expanding rapidly to bring world-class, minimally invasive
                    surgeries to patients nationwide.
                  </p>
                  <p>
                    From piles, hernia, gallstones, PCOS to aesthetic and plastic
                    procedures — we connect patients with{" "}
                    <strong>top-rated hospitals</strong> and{" "}
                    <strong>experienced surgeons</strong> using the latest laser and
                    laparoscopic technologies.
                  </p>
                  <p>
                    Our Care Coordinators manage everything from your first consultation 
                    to insurance approvals and post-surgery recovery so you can focus on 
                    healing, not hassles.
                  </p>
                  <p>
                    Driven by cutting-edge medical technology, expert surgeons, and a 
                    deeply patient-first approach, PureCheckup simplifies the entire 
                    surgical journey from diagnosis to discharge.
                  </p>
                  <p>
                    <strong>
                      We are not just transforming healthcare. <br />
                      We are building the future of surgery one patient at a time.
                    </strong>
                  </p>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-[#3E85D9] font-semibold hover:underline mt-2"
                  >
                    Read less
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Network Stats */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
            <span className="text-[#3E85D9]">Our </span>
            <span className="text-orange-500">Presence & Network</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center"
              >
                <item.icon className="w-10 h-10 text-[#3E85D9] mb-4" />
                <div className="text-4xl font-bold text-[#3E85D9] mb-2">
                  {item.number}
                </div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl mx-auto text-gray-700 leading-relaxed font-semibold">
            We’ve expanded into Tier 1, Tier 2, and Tier 3 cities including Jaipur, 
            Indore, Bhopal, Ahmedabad, and Vadodara, offering affordable surgical 
            care to all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPureCheckup;
