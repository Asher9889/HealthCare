import { Heading } from "@/components";
import { motion } from "framer-motion";


const procedures = [
    {
      name: "Gynecomastia",
      description: "Development of breast tissues in males ...",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/plastic-surgery-1836531_1280.jpg",
    },
    {
      name: "Liposuction",
      description: "Removal of stubborn fat from belly, hips, thighs, etc. ...",
      image: "https://cdn.pixabay.com/photo/2021/06/29/08/48/liposuction-6375634_1280.jpg",
    },
    {
      name: "Breast Lift",
      description: "Restoring the youthful appearance of breasts ...",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/plastic-surgery-1836531_1280.jpg",
    },
    {
      name: "Lipoma",
      description: "A benign tumor composed of fatty tissues ...",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/46/lipoma-1868501_1280.jpg",
    },
    {
      name: "Sebaceous Cyst",
      description: "Atypical growth due to damaged/blocked sebaceous glands ...",
      image: "https://cdn.pixabay.com/photo/2019/04/04/16/56/skin-4100328_1280.jpg",
    },
    {
      name: "Rhinoplasty",
      description: "Alteration of the shape or appearance of the nose ...",
      image: "https://cdn.pixabay.com/photo/2017/02/18/13/29/surgery-2076068_1280.jpg",
    },
    {
      name: "Breast Reduction",
      description: "Surgery to reduce the size of the breasts ...",
      image: "https://cdn.pixabay.com/photo/2016/11/29/12/54/surgery-1868491_1280.jpg",
    },
    {
      name: "Breast Augmentation",
      description: "Increasing or enhancing the size of the breasts ...",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/plastic-surgery-1836531_1280.jpg",
    },
    {
      name: "Breast Lump",
      description: "Abnormal mass that develops in the breasts ...",
      image: "https://cdn.pixabay.com/photo/2017/08/06/22/01/breast-2592246_1280.jpg",
    },
  ];
  

export default function Treatment() {
  return (
    <div>
      {/* Section Heading */}
      <div className="text-center mb-8">
        <Heading text1="🩺 Conditions" text2="We Treat" />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {procedures.map((item, index) => (
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
                className="w-16 h-16 rounded-lg object-contain"
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
