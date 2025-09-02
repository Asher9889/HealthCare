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
      { label: "Stapler Circumcision" },
      { label: "Laser Circumcision" },
      { label: "Kidney Stones Treatment" },
      { label: "Hydrocele" },
      { label: "EWSL" },
      { label: "RIRS" },
      { label: "PCNL" },
      { label: "URSL" },
      { label: "Frenuloplasty Surgery" },
      { label: "Balanitis" },
      { label: "Balanoposthitis" },
      { label: "Paraphimosis" },
      { label: "Foreskin Infection" },
      { label: "Tight Foreskin" },
      { label: "Phimosis" },
      { label: "Corn Removal" },
      { label: "Vasectomy" },
      { label: "Testicular Torsion" },
      { label: "Epididymal Cyst" },
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
              {/* Trigger button */}
              <button className="flex items-center gap-2 px-4 py-3 rounded-md transition hover:text-blue-600 relative z-30">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {item.children && <FaCaretDown className="text-xs" />}
              </button>

              {/* Dropdown menu */}
              {item.children && (
                <div
                  className={`absolute left-0 top-full hidden group-hover:grid bg-white shadow-lg rounded-md mt-1 z-20 
      ${item.name === "Urology" ? "grid-cols-3 gap-1 w-[600px] p-4" : "grid-cols-1 w-56 p-2"}`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href="#"
                      className="text-nowrap block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Invisible hover bridge (prevents flicker) */}
              {item.children && (
                <div className="absolute left-0 top-full w-full h-4 bg-transparent group-hover:block" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default SpecialtyNav;
