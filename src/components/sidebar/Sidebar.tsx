
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
  X,
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
    <>
      {/* Drawer Button */}
      <button type="button" className="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-navigation-example" data-overlay="#overlay-navigation-example" ><Menu /> </button>

      {/* Drawer Sidebar */}
      <aside id="overlay-navigation-example" className="overlay overlay-open:translate-x-0 drawer drawer-start hidden max-w-72 bg-[#002b45]" tabindex="-1" >
        <div className="drawer-header">
          <h3 className="drawer-title">Menu</h3>
          <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-navigation-example" >
            <span className="icon-[tabler--x] size-2 text-white">{<X />}</span>
          </button>
        </div>
        <div className="drawer-body justify-start pb-6">
          <ul className='menu space-y-0.5 p-0'>
             {navItems.map(({ name, icon: Icon }) => (
              <li key={name}>
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
