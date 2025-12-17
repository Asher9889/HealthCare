import { socialLinks } from "@/constants/data";
import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [navigate]);

  const footerLinks = [
    {
      title: "Our Company",
      links: [
        { label: "About Us" },
        { label: "Contact Us" },
        { label: "Privacy Policy" },
        { label: "English Blogs" },
        { label: "Hindi Blog" },
      ],
    },
    {
      title: "For Patients",
      links: [
        { label: "FAQs" },
        { label: "Patient Help" },
        { label: "No Cost EMI" },
        { label: "Health Insurance" },
        { label: "Doctors Section" },
      ],
    },
    {
      title: "Surgery",
      links: [
        {
          label: "Laser Surgery",
          path: "/surgery/laser-surgery", 
        },
        { label: "Laparoscopy Surgery", 
          path: "/surgery/laparoscopic-surgery", 
        },
        { label: "Plastic Surgery", 
          path: "/aesthetics/plastic-surgeries", 
        }, 
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook" , link: socialLinks.facebook },
    { Icon: FaInstagram, label: "Instagram" , link: socialLinks.instagram },
    { Icon: FaLinkedinIn, label: "LinkedIn" , link: "" },
    { Icon: FaTwitter, label: "Twitter" , link: socialLinks.twitter },
    { Icon: FaYoutube, label: "YouTube" , link: "" },
  ];

  function openLink(link:string){
    if(!link) return;
    window.open(link, "_blank");
  }

  return (
    <footer className="bg-[#002131] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Map each footer column */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.links.map((link:{label:string, path?:string}) => (
                    <li
                      key={link.label}
                      onClick={()=>navigate(link.path || "")}
                      className={`${
                        link.path ? "cursor-pointer hover:underline" : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Icons Column */}
            <div>
              <h4 className="font-semibold text-white mb-4">Social Media</h4>
              <div className="flex gap-3 text-white text-xl">
                {socialIcons.map(({ Icon, label, link }) => (
                  <Icon onClick={()=> openLink(link)} key={label} className="hover:text-gray-300 cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 px-6 md:px-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright PureCheckup 2025. All Right Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          {["Terms & Conditions", "Privacy Policy"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
