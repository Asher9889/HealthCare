import { amit, ashish, rahul, tanmay } from "@/assets/index";

const cities = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"];

const citiesLiteral = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"] as const;

const diseases = ["Proctology", "Urology", "Laproscopy", "Gynaecology", "Aesthetics"];

const specialists = [
  {
    id: 1,
    name: "Dr. Tanmay Jain",
    title: "Senior Proctologist at PureCheckUp",
    experience: "18+ Years of Experience",
    surgeries: "10,000+ Successful Surgeries",
    description:
      "Expert in laser treatments for Piles, Fissure, and Fistula. Known for a patient-first approach and compassionate care. Available at PureCheckUp for advanced proctology care.",
    image: tanmay,

    callLink: "tel:+919211930749",
  }
]

const proctologyDoctorCardData = [
  {
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology"],
    experience: "18+ yrs",
    phone: "9211930749",
    happyPatients: "1,00,000+",
    imageUrl: tanmay,
  },
  {
    name: "Dr. Amit Kumar Gupta",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "17+ yrs",
    phone: "",
    happyPatients: "10,000+",
    imageUrl: amit,
  }
]

const laproscopyDoctorCardData = [
  {
    name: "Dr. Rahul Sharma",
    specialties: ["Laparoscopic"],
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
  },
  {
    name: "Dr. Aashish Vohra",
    specialties: ["Laparoscopic", "Urologists", "Laser and Laparoscopic Surgery Expert"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]

const urologyDoctorCardData = [
  {
    name: "Dr. Amit Kumar Gupta",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "17+ yrs",
    phone: "",
    happyPatients: "10,000+",
    imageUrl: amit,
  },
  {
    name: "Dr. Aashish Vohra",
    specialties: ["Laparoscopic", "Urologists", "Laser and Laparoscopic Surgery Expert"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]



export {urologyDoctorCardData, cities, specialists, diseases, citiesLiteral, proctologyDoctorCardData, laproscopyDoctorCardData }