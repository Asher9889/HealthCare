
const WhyPristynCare = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b45] mb-3">Why Pure Checkup?</h2>
          <p className="text-gray-600 text-lg mb-6">
            Delivering Seamless Surgical Experience in India
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">
            Book Free Appointment
          </button>
        </div>

        {/* Right Details Section */}
        <div className="bg-[#f3f4f6] p-8 rounded-lg w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 01 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">01.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Consultation For 50+ Diseases Across India
            </h4>
            <p className="text-gray-700">
              Pristyn Care provides consultation for 50+ diseases and treatments such as Piles, Hernia,
              Kidney Stones, Cataract, Gynecomastia, Abortion, IVF, etc. across 30+ major cities in India.
            </p>
          </div>

          {/* Card 02 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">02.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Medical Expertise With Technology
            </h4>
            <p className="text-gray-700">
              Our surgeons spend a lot of time with you to diagnose your condition. You are assisted in all
              pre-surgery medical diagnostics. We offer advanced laser and laparoscopic surgical treatment.
              Our procedures are USFDA approved.
            </p>
          </div>

          {/* Card 03 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">03.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Assisted Surgery Experience
            </h4>
            <p className="text-gray-700">
              A dedicated Care Coordinator assists you throughout the surgery journey from insurance
              paperwork, to free commute from home to hospital & back and admission-discharge process
              at the hospital.
            </p>
          </div>

          {/* Card 04 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">04.</h3>
            <h4 className="text-lg font-bold text-[#111827] mb-2">
              Post Surgery Care
            </h4>
            <p className="text-gray-700">
              We offer free follow-up consultations and instructions including dietary tips as well as exercises
              to every patient to ensure they have a smooth recovery to their daily routines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPristynCare;
