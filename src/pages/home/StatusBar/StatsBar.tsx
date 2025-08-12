const StatsBar = () => {
  const stats = [
    { number: "10k+", label: "Happy Patients" },
    // { number: "250K+", label: "Surgeries" },
    // { number: "200+", label: "Hospitals" },
    { number: "50+", label: "Doctors" },
    { number: "50+", label: "Cities" },
    { number: "50+", label: "Clinics" },
  ];

  return (
   <div className="container mx-auto my-20 ">
      <div className="bg-[#3E85D9] text-white overflow-hidden rounded-2xl flex flex-col md:flex-row items-center justify-between text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 px-6 py-4 flex flex-col items-center justify-center relative"
          >
            <h2 className="font-bold text-2xl">{stat.number}</h2>
            <p className="text-sm">{stat.label}</p>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-[#1d63b4]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
