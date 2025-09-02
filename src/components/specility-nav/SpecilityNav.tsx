import { FaCaretDown } from "react-icons/fa";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Baby,
  Sparkles,
  User,
  Handshake,
  Building2,
} from "lucide-react";

const navItems = [
  {
    name: "Proctology",
    icon: Stethoscope,
    children: [
      { label: "Proctology" },
      { label: "Piles Treatment" },
      { label: "Fistula Treatment" },
      { label: "Fissure Treatment" },
      { label: "Pilonidal Sinus Treatment" },
      { label: "Rectal Prolapse" },
    ],
  },
  {
    name: "Laproscopy",
    icon: Microscope,
    children: [
      { label: "Laproscopy" },
      { label: "Hernia Surgery" },
      { label: "Gallstones Treatment" },
      { label: "Appendicitis" },
      { label: "Inguinal Hernia Treatment" },
      { label: "Umbilical Hernia Treatment" },
    ],
  },
  {
    name: "Urology",
    icon: HeartPulse,
    children: [
      { label: "Urology" },
      { label: "Circumcision" },
      { label: "Kidney Stones Treatment" },
      { label: "Hydrocele" },
      { label: "Frenuloplasty Surgery" },
      { label: "Balanitis" },
      { label: "Phimosis" },
      { label: "Vasectomy" },
      { label: "Toenail Removal" },
    ],
  },
  { name: "Gynaecology", icon: Baby },
  {
    name: "Aesthetics",
    icon: Sparkles,
    children: [
      { label: "Plastic Surgeries" },
      { label: "Cosmetic Surgery" },
    ],
  },
  { name: "Patient", icon: User },
  { name: "Services", icon: Handshake },
  { name: "Our Company", icon: Building2 },
];

const SpecialtyNav = () => {
  return (
    <header className="hidden md:block bg-white shadow-sm border-t border-gray-200">
      <nav className="max-w-[85rem] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 py-3 text-sm text-gray-800 font-medium">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="flex items-center gap-2 px-3 py-1 rounded-md transition hover:text-blue-600">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {item.children && <FaCaretDown className="text-xs" />}
              </button>

              {/* Dropdown menu */}
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-1 w-48 z-20">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default SpecialtyNav;
