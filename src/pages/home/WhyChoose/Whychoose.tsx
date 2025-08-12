const WhyChoose = () => {
  const points = [
    "Serving 30+ cities including Tier-2 & Tier-3 towns",
    "Strong hospital network & partner clinics",
    "USFDA-approved procedures with advanced surgical technologies",
    "Insurance support, paperwork assistance & free transportation",
    "Dedicated Care Coordinators for end-to-end patient assistance",
  ];

  return (
    <section className="my-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
          <span className="text-[#3E85D9]">Why Choose </span>
          <span className="text-orange-500">PureCheckup</span>
        </h3>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm md:text-base">
          Experience unmatched care, convenience, and expertise for every step of your healthcare journey.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-5 border border-gray-100"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#3E85D9] to-orange-400 flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Text */}
            <p className="text-gray-700 font-medium">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
