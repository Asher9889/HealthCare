
import BookNowButton from "../book-now-button/BookNowButton";

type CtaBannerProps = {
  title: string;
  subtitle?: string;
  buttonText: string;
  phone: string;
  onButtonClick?: () => void;
};

export default function CtaBanner({
  title,
  subtitle,
  buttonText,
  phone,
  onButtonClick,
}: CtaBannerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto bg-(--dark-blue-color) rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6">
      {/* Left Content */}
      <div>
        <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
        {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-3">
        <BookNowButton text="Book Your Appointment"/>
        <a
          href={`tel:${phone}`}
          className="h-12 flex justify-center items-center text-white font-semibold px-4 py-2 rounded-md text-sm bg-(--primary-bg-color)"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
