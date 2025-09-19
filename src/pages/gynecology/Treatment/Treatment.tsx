import { motion } from "framer-motion";
import { Heading } from "@/components";

const conditions = [
  {
    name: "Hysteroscopy",
    description: "Diagnostic procedure that allows the gynecologist to look inside the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
  },
  {
    name: "Vaginal Cyst",
    description: "Closed pockets of air, fluid, or pus on or under the vaginal lining...",
    image: "https://cdn-icons-png.flaticon.com/512/3197/3197561.png",
  },
  {
    name: "Hymenoplasty",
    description: "Surgical reconstruction or repair of a torn/broken hymen...",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
  {
    name: "PCOD/PCOS",
    description: "A hormonal disorder in which ovaries produce immature eggs...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
  {
    name: "Pregnancy Care",
    description: "Prenatal and postpartum healthcare for pregnant women...",
    image: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
  },
  {
    name: "Abortion",
    description: "The procedure to terminate a pregnancy through surgery...",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },
  {
    name: "Ovarian Cyst",
    description: "A solid or fluid-filled cyst within or on the surface of an ovary...",
    image: "https://cdn-icons-png.flaticon.com/512/3448/3448577.png",
  },
  {
    name: "Laser Vaginal Tightening",
    description: "Treatment to tighten the vagina using advanced laser procedure...",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
  },
  {
    name: "Hysterectomy",
    description: "Surgical removal of the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
  },
  {
    name: "Vaginoplasty",
    description: "A surgical procedure to repair or tighten the vagina...",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Labiaplasty",
    description: "Surgery to reduce the size of inner and outer labia...",
    image: "https://cdn-icons-png.flaticon.com/512/3448/3448577.png",
  },
  {
    name: "Uterine Fibroids",
    description: "Non-cancerous growths that develop in or around the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/3197/3197561.png",
  },
  {
    name: "MTP",
    description: "The procedure to terminate a pregnancy using medicines...",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
  },
  {
    name: "Endometriosis",
    description: "Tissue that normally lines the uterus grows outside the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
  },
  {
    name: "Adenomyosis",
    description: "A condition where endometrial tissue grows in the uterine wall...",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
  {
    name: "Ectopic Pregnancy",
    description: "Pregnancy where a fertilized egg implants outside of the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
  {
    name: "Miscarriage",
    description: "The spontaneous loss of a pregnancy before the 20th week...",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },
  {
    name: "Molar Pregnancy",
    description: "A non-cancerous tumour that develops in the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/3448/3448577.png",
  },
  {
    name: "Vaginal Wart",
    description: "Soft growths on the walls of the vagina or inside the vagina...",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
  },
  {
    name: "Bartholin Cyst",
    description: "Fluid-filled vaginal cyst that forms near the vaginal opening...",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Myomectomy",
    description: "An operation to remove fibroids while preserving the uterus...",
    image: "https://cdn-icons-png.flaticon.com/512/3197/3197561.png",
  },
];

export default function Treatment() {
  return (
    <div className="">
      <div className="text-center mb-12">
        <Heading text1="🩺 Conditions" text2="We Treat" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {conditions.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
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
