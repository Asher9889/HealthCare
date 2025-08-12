const AboutPureCheckup = () => {
  const stats = [
    { number: "50+", label: "Clinics Across India" },
    { number: "10+", label: "Partner Hospitals" },
    { number: "15+", label: "Super Specialist Surgeons" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-gray-800 py-20 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#3E85D9]">About </span>
            <span className="text-orange-500">PureCheckup</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-[#3E85D9]">PureCheckup</span>, 
            we go beyond healthcare — we’re a next-gen healthtech startup 
            committed to making advanced surgical care affordable, accessible, 
            and seamless for every Indian.
          </p>
        </div>

        {/* Mission & Reach */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 mb-12 border border-gray-100">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Currently serving{" "}
            <strong>Jaipur, Ahmedabad, Indore, Vadodara, and Bhopal</strong>, 
            we’re expanding rapidly to bring world-class, minimally invasive 
            surgeries to patients nationwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From piles, hernia, gallstones, PCOS to aesthetic and plastic 
            procedures — we connect patients with{" "}
            <strong>top-rated hospitals</strong> and{" "}
            <strong>experienced surgeons</strong> using the latest 
            laser and laparoscopic technologies.
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-[#3E85D9] mb-2">
                {item.number}
              </div>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPureCheckup;
