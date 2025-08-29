// src/components/Navbar.jsx
import { FaSearch } from "react-icons/fa";
import { Sidebar } from "../index"; // ✅ Import Sidebar

const Navbar = () => {
  return (
    <nav className="bg-[#002b45] text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo (Desktop only) */}
        <div className="hidden md:inline flex items-center">
          <h1 className="text-xl font-bold">PureCheckup</h1>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Sidebar />  {/* ✅ Sidebar integrated only for mobile */}
        </div>

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
          <button className="border border-white rounded px-4 py-2 font-semibold hover:bg-white hover:text-[#002b45] transition text-sm md:text-base">
            Book Free Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
