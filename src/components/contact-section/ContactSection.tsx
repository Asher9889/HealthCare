import React from 'react';

const cities = [
  'Ahmedabad', 'Bangalore', 'Bhubaneswar', 'Chandigarh', 'Chennai',
  'Coimbatore', 'Delhi', 'Faridabad', 'Ghaziabad', 'Gurgaon', 'Hyderabad',
  'Indore', 'Jaipur', 'Kochi', 'Kolkata', 'Kozhikode', 'Lucknow', 'Madurai',
  'Mumbai', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Pune', 'Raipur', 'Ranchi',
  'Thiruvananthapuram', 'Vijayawada', 'Visakhapatnam'
];

const diseases = [
  'Piles', 'Hernia', 'Kidney Stones', 'Appendicitis', 'PCOS', 'Fistula', 'Gynecomastia',
  'Ovarian Cysts', 'Hydrocele', 'Laser Circumcision'
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Tell us about your problems and we'll figure out the best treatment option for you.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            PureCheckup services are accessible Pan India
          </h3>
          <p className="text-gray-600">
            PureCheckup has taken the latest medical technologies to ensure consistent quality of advanced surgical care in 30+ cities of India including{' '}
            {cities.map((city, idx) => (
              <span key={city} className="text-blue-600">
                {city}
                {idx !== cities.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-[#002D45] rounded-2xl p-8 text-white w-full">
          <h3 className="text-lg font-semibold text-center mb-6">Let's Schedule Your Surgery</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none  bg-white"
            />
            <select
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            >
              <option>Select City</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <select
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
            >
              <option>Select Disease</option>
              {diseases.map((disease) => (
                <option key={disease}>{disease}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold py-3 rounded-md"
            >
              Book Free Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
