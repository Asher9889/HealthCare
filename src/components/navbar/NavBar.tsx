// src/components/Navbar.jsx
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
// import { FiMapPin } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-[#002b45] text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-3xl text-yellow-400">◧</div>
        <h1 className="text-xl font-bold">Pure Checkup</h1>
      </div>

      {/* Search Bar with Location */}
      <div className="flex bg-white rounded-md overflow-hidden shadow-inner w-[40%]">
        {/* <div className="flex items-center gap-1 px-3 text-black border-r border-gray-300">
          <FaMapMarkerAlt className="text-orange-500" />
          <span>Surat</span>
        </div> */}
        <input
          type="text"
          placeholder="Search disease, doctors, treatment..."
          className="px-2 py-2 w-full text-black outline-none"
        />
        <button className="px-3 text-orange-500">
          <FaSearch />
        </button>
      </div>

      {/* Right Links */}
      <div className="flex items-center gap-6">
        {/* <div className="flex items-center gap-1 cursor-pointer">
          <span>For Patients</span>
          <FaCaretDown className="text-sm" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Our Company</span>
          <FaCaretDown className="text-sm" />
        </div> */}
        <button className="border border-white rounded px-4 py-2 font-semibold hover:bg-white hover:text-[#002b45] transition">
          Book Free Appointment
        </button>
        {/* <div className="flex items-center gap-1">
          <FiMapPin className="text-lg" />
          <span>Surat</span>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
