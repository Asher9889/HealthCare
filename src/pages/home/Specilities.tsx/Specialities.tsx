import { FiArrowRight } from 'react-icons/fi';

interface Speciality {
  title: string;
  desc: string;
  image: string;
}

const specialities: Speciality[] = [
  {
    title: 'Proctology',
    desc: 'Specialised & advanced treatment for Anorectal Diseases ...',
    image: '/assets/proctology.jpg',
  },
  {
    title: 'Laparoscopy',
    desc: 'Keyhole surgery for abdominal and pelvic disorders ...',
    image: '/assets/laparoscopy.jpg',
  },
  {
    title: 'Urology',
    desc: 'Surgical treatment for urogenital issues in men and women ...',
    image: '/assets/urology.jpg',
  },
  {
    title: 'Vascular',
    desc: 'Surgical subspecialty that focuses on the vascular system– arteries, veins and...',
    image: '/assets/vascular.jpg',
  },
  {
    title: 'Ophthalmology',
    desc: 'Deals with the diagnosis and treatment of conditions related to the eyes ...',
    image: '/assets/eye.jpg',
  },
];


const SpecialityCard = ({ title, desc, image }:Speciality) => (
  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 w-full">
    <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-[#002b45]">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
    <FiArrowRight className="text-blue-600 text-xl self-center" />
  </div>
);

const Specialities = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#002b45] mb-10">Our Specialities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialities.map((spec, idx) => (
            <SpecialityCard key={idx} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
