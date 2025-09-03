// src/components/Navbar.jsx
import { FaSearch } from "react-icons/fa";
import { AppointForm, Sidebar } from "../index"
import whatsaap from "../../assets/whatsapp.svg";
const Navbar = () => {
  return (
    <nav className="bg-(--dark-blue-color) text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo */}
        <h1 className="hidden lg:inline text-xl font-bold">PureCheckup</h1>
        <aside className="lg:hidden">
          <Sidebar />
        </aside>

        {/* Search Bar */}
        <div className="flex bg-white rounded-md overflow-hidden shadow-inner w-full md:w-[40%] order-3 md:order-2">
          <input
            type="text"
            placeholder="Search disease, doctors, treatment..."
            className="px-3 py-2 w-full text-black outline-none text-sm"
          />
          <button className="px-3 text-orange-500">
            <FaSearch />
          </button>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <button
            onClick={() => window.open("https://wa.me/919211930749", "_blank")}
          >
            <img
              className="w-8 md:w-10 mr-4"
              src={whatsaap}
              alt="whatsapp icon"
            />
          </button>
          <button type="button" className="border border-white rounded px-4 py-2 font-semibold hover:scale-[0.99]  transition text-sm md:text-base disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal">
            Book Free Appointment
          </button>
          <AppointForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
