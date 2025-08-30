import {
  Menu,
  Stethoscope,
  HeartPulse,
  Microscope,
  Baby,
  Sparkles,
  User,
  Handshake,
  Building2,
} from "lucide-react";

const navItems = [
  { name: "Proctology", icon: Stethoscope },
  { name: "Urology", icon: HeartPulse },
  { name: "Laproscopy", icon: Microscope },
  { name: "Gynaecology", icon: Baby },
  { name: "Aesthetics", icon: Sparkles },
  { name: "Patient", icon: User },
  { name: "Services", icon: Handshake },
  { name: "Our Company", icon: Building2 },
];

const Sidebar = () => {
  return (
    < >
      <button type="button" className="m-1 ms-0  inline-flex items-center gap-x-2 text-sm font-medium rounded-lg   focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-left" data-hs-overlay="#hs-offcanvas-left">
        <Menu size={24} />
      </button>

      <div id="hs-offcanvas-left" className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-80 border-s border-gray-200 bg-(--dark-blue-color) border-l-0" role="dialog"  aria-labelledby="hs-offcanvas-left-label">
        <div className="flex justify-between items-center py-3 px-4 border-b border-(--sidebar-border-color) dark:border-neutral-700">
          <h3 id="hs-offcanvas-left-label" className="font-bold text-white">
            Menu
          </h3>
          <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-offcanvas-left">
            <span className="sr-only">Close</span>
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-4">
          <ul className='menu space-y-0.5 p-0'>
            {navItems.map(({ name, icon: Icon }) => (
              <li key={name} >
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition my-2"
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
