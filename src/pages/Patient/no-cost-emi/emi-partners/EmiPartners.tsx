import { motion } from "framer-motion";
import { Heading } from "@/components";

const partners = [
  { name: "HDFC Bank", logo: "https://images.seeklogo.com/logo-png/30/1/hdfc-life-logo-png_seeklogo-304905.png" },
  { name: "Bajaj Finserv", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/2560px-Bajaj_Finserv_Logo.svg.png" },
  { name: "ZestMoney", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Zest_logo.png" },
  { name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Axis_Max_Life_Insurance_logo.svg/640px-Axis_Max_Life_Insurance_logo.svg.png" },
  { name: "Credit Fair", logo: "https://partner.creditfair.in/images/eb3c9fb726e378f39d813b1723ebde51.png" },
  { name: "Tata Capital", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tata_Capital_Logo-01.jpg/640px-Tata_Capital_Logo-01.jpg" },
  { name: "Cashe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cashe-logo.png?20180725124615" },
  { name: "IDFC FIRST", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/IDFC_First_Bank_logo.jpg/640px-IDFC_First_Bank_logo.jpg" },
  { name: "Kotak", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kotak_Life_Logo.png/640px-Kotak_Life_Logo.png" },
  { name: "ICICI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/640px-ICICI_Bank_Logo.svg.png" },
  { name: "Yes Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yes_Bank_SVG_Logo.svg/640px-Yes_Bank_SVG_Logo.svg.png" },
  { name: "RBL Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/RBL_Bank_SVG_Logo.svg/640px-RBL_Bank_SVG_Logo.svg.png" },
];

export default function EmiPartners() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f5fbff] to-[#f9fcff] py-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-[var(--primary-bg-color)] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--orange-button-color)] opacity-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
            <Heading text1="Our" text2="EMI Partners" />
          <p className="text-[var(--text-secondary)] mt-2 text-base">
            We have tie-ups with leading EMI providers and trusted banks.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center justify-center hover:-translate-y-1"
            >
              <div className="group relative w-16 h-16 mb-3">
                <img
                    src={partner.logo}
                    alt={partner.name}
                    className="aspect-square object-contain transition-transform duration-300 ease-in-out group-hover:scale-150"
                />
                </div>

              <p className="text-sm font-medium text-[var(--dark-blue-color)] text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
