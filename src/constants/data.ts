import { amit, ashish, rahul, tanmay } from "@/assets/index";

const cities = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"];

const citiesLiteral = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Meerut", "Mumbai"] as const;

const diseases = ["Proctology", "Urology", "Laproscopy", "Gynaecology", "Aesthetics"];

const doctorSpecialization = ["Aesthetic/Plastic Surgeon", "Dental Surgeon", "ENT Surgeon", "General Surgeon", "Gynae/IVF Expert", "Laproscopic Surgeon", "Ophthalmologist", "Orthopedic Surgeon", "Urologist Surgeon", "Vascular Surgeon", "Others"];

const doctorDegree = ["MBBS", "BDS", "MS", "MD", "MCH", "DM", "Post graduate Diploma", "DNB", "MDS", "Others"];

const specialists = [
  {
    id: 1,
    name: "Dr. Tanmay Jain",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    city: "Jaipur",
    experience: "18+ yrs",
    phone: "9211930749",
    happyPatients: "1,00,000+",
    imageUrl: tanmay,
    description: "Experienced surgeon specializing in minimally invasive treatments with a strong track record in patient recovery."
  },
  {
    id: 2,
    name: "Dr. Amit Kumar Gupta",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    city: "Lucknow",
    experience: "17+ yrs",
    phone: "",
    happyPatients: "10,000+",
    imageUrl: amit,
    description: "Known for precision and patient-centric care, focusing on advanced laparoscopic and urological procedures."
  },
  {
    id: 3,
    name: "Dr. Rahul Sharma",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    city: "Meerut",
    experience: "35+ yrs",
    phone: "",
    happyPatients: "20,000+",
    imageUrl: rahul,
    description: "Highly senior surgeon with decades of experience across complex gastrointestinal and urological surgeries."
  },
  {
    id: 4,
    name: "Dr. Aashish Vohra",
    specialties: ["Proctology", "Laproscopy", "Urologist", "General Surgeon"],
    city: "Indore",
    experience: "18+ yrs",
    phone: "",
    happyPatients: "15,000+",
    imageUrl: ashish,
    description: "Specializes in minimally invasive care, ensuring faster recovery with modern surgical techniques."
  }
];


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



export { doctorDegree, doctorSpecialization, urologyDoctorCardData, cities, specialists, diseases, citiesLiteral, proctologyDoctorCardData, laproscopyDoctorCardData }