import { FaPhoneAlt } from "react-icons/fa"

const CallNow = () => {
    return (
        <button className="w-full md:w-fit">
            
                <a href="tel:9211930749" className="bg-orange-500 h-10   text-white font-semibold rounded-md  flex flex-row justify-center px-6 py-3 items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                    Call Us <FaPhoneAlt /> 9211930749
                </a>
                {/* <p className="mt-2 text-sm text-gray-600 font-medium">
                    Book Your Doctor's Appointment Today – Fast & Easy
                </p> */}
           
        </button>
    )
}

export default CallNow;