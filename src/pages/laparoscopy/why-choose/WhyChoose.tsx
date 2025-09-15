import { Heading } from "@/components";
import { motion } from "framer-motion";

const conditions = [
  {
    name: "Hernia",
    description: "Protrusion of internal organs into abdominal muscle wall ...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
  },
  {
    name: "Gallstones",
    description: "Hardened deposits of bile in the gallbladder ...",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
  },
  {
    name: "Appendicitis",
    description: "Inflammation, swelling, or infection in the appendix ...",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name: "Inguinal Hernia",
    description: "Protrusion of tissues through the inguinal canal ...",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
  {
    name: "Umbilical Hernia",
    description: "Intestine bulging through an opening near the navel ...",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
  },
  {
    name: "Appendectomy",
    description: "Surgery to remove infected appendix ...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
];

export default function ConditionsGrid() {
  return (
    <div>
      <div className="text-center mb-8">
        <Heading text1="🩺 Conditions" text2="We Treat"/>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {conditions.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="ml-3 text-blue-500 text-xl">→</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
