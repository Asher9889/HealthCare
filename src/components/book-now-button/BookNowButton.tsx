import { useState } from "react";
import AppointForm from "../book-appointment-form/AppointForm";

const BookNowButton = ({text, className}:{text:string, className?:string}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <button className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded cursor-pointer ${className}`} aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal">
      {text}
    </button>

    {open && <AppointForm setOpen={setOpen} />} 
    </>

  );
};

export default BookNowButton;
