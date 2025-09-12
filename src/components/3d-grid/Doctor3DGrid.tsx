
import { CardBody, CardContainer, CardItem } from "../ui";
import { Button } from "@/components/ui/button";
import { tanmay } from "@/assets";
// import StickyScroll from "../ui/sticky-scroll-reveal";
// import { title } from "process";

const doctors = [
  {
    name: "Dr. Anil Sharma",
    designation: "Senior Proctologist",
    experience: "22+ yrs",
    image: tanmay,
  },
  {
    name: "Dr. Ritu Patel",
    designation: "Colorectal Surgeon",
    experience: "18+ yrs",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Mohit Singh",
    designation: "Laser Proctology Expert",
    experience: "16+ yrs",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Dr. Kavita Rao",
    designation: "Gastrointestinal Surgeon",
    experience: "20+ yrs",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dr. Rajeev Malhotra",
    designation: "Proctology Specialist",
    experience: "15+ yrs",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Dr. Neha Verma",
    designation: "Minimally Invasive Surgeon",
    experience: "12+ yrs",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
];



export default function Doctors3DGrid() {
  return (
    <section className="px-6">
      <div>
        {/* Left side */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-white relative group/card w-full h-auto rounded-xl p-6  shadow-sm hover:shadow-2xl transition-all duration-300">
                {/* Doctor Image */}
                <CardItem translateZ="80" rotateX={10} className="w-full">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>

                {/* Name + Role */}
                <CardItem
                  translateZ="50"
                  className="text-lg font-semibold text-gray-800 mt-4"
                >
                  {doc.name}
                </CardItem>
                <CardItem
                  translateZ="40"
                  as="p"
                  className="text-gray-600 text-sm"
                >
                  {doc.designation} • {doc.experience}
                </CardItem>

                {/* CTA Button */}
                <div className="flex justify-center mt-6">
                  <CardItem translateZ="60" translateY={10}>
                    <Button className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                      Book Appointment
                    </Button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
         
         {/* Right Side */}
      </div>

    </section>
  );
}
