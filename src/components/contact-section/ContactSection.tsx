import { constantData } from '@/constants';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface IFormData {
  name: string;
  mobile: string;
  city: string;
  disease: string;
}

const cities = constantData.cities;
const diseases = constantData.diseases;

// ✅ Reusable validator function
const isValidMobile = (value: string): boolean => /^[6-9]\d{9}$/.test(value);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    mobile: '',
    city: '',
    disease: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ mobile?: string }>({});
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // ✅ Real-time validation for mobile
    if (name === 'mobile') {
      if (value.length === 10 && !isValidMobile(value)) {
        setErrors({ mobile: 'Please enter a valid mobile number.' });
      } else {
        setErrors({ mobile: '' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, mobile, city, disease } = formData;

    if (!name || !mobile || !city || !disease) {
      toast.error('Please fill all the fields.');
      return;
    }

    if (!isValidMobile(mobile)) {
      setErrors({ mobile: 'Please enter a valid mobile number.' });
      toast.error('Invalid mobile number. Please enter a valid 10-digit number.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact/advisor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.statusCode !== 200) {
        return toast.error(data.message || 'Something went wrong. Please try again later.');
      }
      toast.success(data.message || 'Your appointment has been booked successfully!');
      setFormData({ name: '', mobile: '', city: '', disease: '' });
      setErrors({});
    } catch (error: any) {

      toast.error( error.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCityClick = (city: string) => {
    if(!city) return;
    navigate(`/${city.toLowerCase()}`);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-gray-600">
              Tell us what you are facing. Our medical experts will help you choose the safest and most effective treatment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Purecheck services are accessible Pan India
            </h3>
            <p className="text-gray-600">
              PureCheckup brings advanced surgical care powered by the latest medical technologies to 10+ cities across India, including{' '}
              {cities.map((city, idx) => (
                <span onClick={() => handleCityClick(city)} key={city} className="text-blue-600 hover:underline hover:text-blue-700 cursor-pointer transition-all duration-300">
                  {city}
                  {idx !== cities.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Disclaimer:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Results and recovery experiences may vary for each patient. By submitting this form or calling us, you consent to receive important updates and promotional communications from PureCheckup.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-[#002D45] rounded-2xl p-8 text-white w-full">
          <h3 className="text-lg font-semibold text-center mb-6">
            Let's Schedule Your Surgery
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Patient Name"
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            />

            <input
              type="tel"
              name="mobile"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className={`w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white ${
                errors.mobile ? 'border border-red-500' : ''
              }`}
            />
            {errors.mobile && (
              <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
            )}

            <select
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            >
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city}>{city}</option>
              ))}
            </select>

            <select
              name="disease"
              required
              value={formData.disease}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            >
              <option value="">Select Disease</option>
              {diseases.map(disease => (
                <option key={disease}>{disease}</option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold py-3 rounded-md disabled:opacity-70"
            >
              {loading ? 'Booking...' : 'Book Free Appointment'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
