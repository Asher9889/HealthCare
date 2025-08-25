import { FaCaretDown } from "react-icons/fa";

const specialties = [
  "Proctology",
  "Urology",
  "Laproscopy",
  "Gynaecology",
  "Aesthetics",
  "Patient",
  "Services",
  "Our Company",
];

const SpecialtyNav = () => {
  return (
    <div className="bg-white shadow-sm border-t border-gray-200">
      <div className="container mx-auto px-6 py-3 flex flex-wrap justify-center gap-6 text-sm text-gray-800 font-medium">
        {specialties.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-md transition 
                        hover:text-blue-600"
          >
            <span>{item}</span>
            <FaCaretDown className="text-xs" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyNav;
