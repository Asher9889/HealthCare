// src/pages/ContactPage.jsx

import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <div className="w-full bg-[var(--primary-bg-light-blue)] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="space-y-6">
          <ContactHeading />
          <ContactInfo />
          <SocialLinks />
        </div>

        <ContactForm />

      </div>
    </div>
  );
}
