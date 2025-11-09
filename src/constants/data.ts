import { amit, ashish, rahul, tanmay } from "@/assets/index";

const cities = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"];

const citiesLiteral = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"] as const;

const diseases = ["Proctology", "Urology", "Laproscopy", "Gynaecology", "Aesthetics"];

const specialists = [
   {
    id: 1,
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "18+ yrs",
    phone: "9211930749",
    happyPatients: "1,00,000+",
    imageUrl: tanmay,
  },
  {
    id: 2,
    name: "Dr. Amit Kumar Gupta",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "17+ yrs",
    phone: "",
    happyPatients: "10,000+",
    imageUrl: amit,
  },
  {
    id: 3,
    name: "Dr. Rahul Sharma",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
  },
  {
    id: 4,
    name: "Dr. Aashish Vohra",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]

const proctologyDoctorCardData = [
  {
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
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
  },
  {
    name: "Dr. Rahul Sharma",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
  },
  {
    name: "Dr. Aashish Vohra",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]

const laproscopyDoctorCardData = [
   {
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
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
  },
  {
    name: "Dr. Rahul Sharma",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
  },
  {
    name: "Dr. Aashish Vohra",
    specialties: ["Laparoscopic", "Proctology", "Urologists", "Laser and Laparoscopic Surgery Expert"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]

const urologyDoctorCardData = [
   {
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
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
  },
  {
    name: "Dr. Rahul Sharma",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
  },
  {
    name: "Dr. Aashish Vohra",
    specialties: ["Laparoscopic", "Proctology", "Urologists", "Laser and Laparoscopic Surgery Expert"],
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
  }
]



export {urologyDoctorCardData, cities, specialists, diseases, citiesLiteral, proctologyDoctorCardData, laproscopyDoctorCardData }