import { Heading } from "@/components";
import { motion } from "framer-motion";


const treatments = [
  {
    name: "Kidney Stones",
    description: "Formation of stones in the kidneys that cause immense pain ...",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Phimosis",
    description: "Inability to foreskin pull back the foreskin from the tip of the penis ...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
  {
    name: "Laser Circumcision",
    description: "Laser procedure to remove the foreskin of the penis ...",
    image: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
  },
  {
    name: "Stapler Circumcision",
    description: "Foreskin removal for a teenager using a stapler ...",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },
  {
    name: "Prostate Enlargement",
    description: "Swelling of a prostate that causes several urinary issues ...",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
  },
  {
    name: "ESWL",
    description: "Treating kidney stones via controlled sound waves ...",
    image: "https://cdn-icons-png.flaticon.com/512/3197/3197561.png",
  },
  {
    name: "RIRS",
    description: "Non-invasive procedure to treat large kidney stones ...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
  },
  {
    name: "PCNL",
    description: "Minimally invasive surgery to remove large kidney stones ...",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
  },
  {
    name: "URSL",
    description: "Surgical procedure to treat stones using ureteroscopy ...",
    image: "https://cdn-icons-png.flaticon.com/512/3448/3448577.png",
  },
  {
    name: "Hydrocelectomy",
    description: "Surgical procedure to remove hydrocele ...",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
];

export default function TreatmentsGrid() {
  return (
    <div className="">
      <div className="text-center mb-12">
        <Heading text1="🔬 Treatments" text2="We Offer" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {treatments.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain p-2"
              />
            </div>

            {/* Text */}
            <div className="ml-4 flex-1">
              <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="ml-3 text-blue-500 text-xl font-bold">→</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
