import { useState } from "react";
import AppointForm from "../book-appointment-form/AppointForm";

const BookNowButton = ({text, className}:{text:string, className?:string}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <button className={`bg-orange-500 text-md hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded cursor-pointer ${className}`}
    onClick={() => setOpen(true)}>
      {text}
    </button>

    {open && <AppointForm open={open} setOpen={setOpen} />} 
    </>

  );
};

export default BookNowButton;
