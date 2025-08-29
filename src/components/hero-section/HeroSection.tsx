import { FaPhoneAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const cities = ["Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara", "Gurgaon", "Delhi", "Noida", "Kanpur", "Lucknow", "Mumbai"]
const diseases = [
  "Pilonidal Sinus",
  "Piles",
  "Rectal Prolapse",
  "Fissure",
  "Fistula",
  "Fecal Incontinence",
  "Constipation",
  "Hemorrhoids",
  "Umbilical Hernia",
  "Hydrocele",
  "Inguinal Hernia",
  "Incisional Hernia",
  "Appendicitis",
  "Gallstone",
  "Hernia",
  "Achalasia Cardia",
  "Acid Reflux Surgery",
  "Large Intestine",
  "Indirect Hernia",
  "Small Intestine",
  "Colonoscopy",
  "Gastric Bypass Surgery",
  "Pain During Intercourse",
  "Vaginoplasty",
  "Labiaplasty",
  "Vaginal Discharge",
  "Laser Vaginal Tightening",
  "Vaginal Dryness",
  "Ovarian Cyst",
  "Hysterectomy",
  "Hymenoplasty",
  "Clitoral Hoodoplasty",
  "Abortion",
  "Hysteroscopy",
  "Pap Smear",
  "Vaginal Rejuvenation",
  "Ectopic Pregnancy",
  "Laser Vaginal Rejuvenation",
  "Vaginal Recurrent Infection",
  "Pelvic Pain",
  "Female Urinary Problems",
  "Lichen Sclerosus",
  "Menstrual Disorders",
  "Preconception Care",
  "Uterine Fibroid",
  "Pcos Pcod",
  "Pregnancy Care",
  "Medical Termination Of Pregnancy",
  "Laser Vaginal Bleaching",
  "Anal Bleaching",
  "Vaginal Wart",
  "Molar Pregnancy",
  "Bartholin Cyst",
  "Miscarriage",
  "Endometriosis",
  "Adenomyosis",
  "Myomectomy",
  "Dilation And Evacuation (D&E)",
  "Polypectomy",
  "Turbinate Reduction",
  "Uvulopalatopharyngoplasty",
  "Adenoidectomy",
  "Myringotomy",
  "Microlaryngeal",
  "Mastoidectomy",
  "Tongue Base Reduction",
  "Tonsils Removal",
  "Deviated Nasal Septum",
  "Eardrum Surgery",
  "Sinus Surgery",
  "Thyroidectomy",
  "Tonsillectomy",
  "Ear Surgery",
  "Sinusitis",
  "Tympanoplasty",
  "Fess Surgery",
  "Stapedectomy",
  "Septoplasty",
  "Tonsillitis",
  "Adenoids",
  "Hearing Problem",
  "Thyroid Infection",
  "Chronic Sinusitis",
  "Recurrent Sinusitis",
  "Subacute Sinusitis",
  "Mastoiditis",
  "Parotidectomy",
  "Nose Surgery",
  "Vocal Cord Polyps",
  "Adenotonsillectomy",
  "Otitis Media",
  "Nasal Polyps",
  "Turbinoplasty",
  "Ear Infection",
  "Ear Hole",
  "Throat Infection",
  "Middle Ear Perforation",
  "Urinary Tract Infection",
  "Urinary Incontinence",
  "Erectile Dysfunction",
  "Urethral Stricture",
  "Stress Urinary Incontinence",
  "Circumcision",
  "Kidney Stones",
  "Male Urinary Tract Infection",
  "Prostate Enlargement",
  "Phimosis",
  "Paraphimosis",
  "Foreskin Infection",
  "Balanoposthitis",
  "Balanitis",
  "Frenuloplasty",
  "Cystoscopy",
  "Cystolithotripsy",
  "DJ Stent",
  "cystolithotomy",
  "Urethral Stricture",
  "pyeloplasty",
  "nephrostomy",
  "Corn Removal",
  "Vasectomy",
  "Toenail treatment",
  "Testicular Torsion",
  "Epididymal Cyst",
  "Varicose Veins",
  "Varicocele",
  "Diabetic Foot Ulcer",
  "AV Fistula For Dialysis",
  "Deep Vein Thrombosis",
  "Spider Veins",
  "Gynecomastia",
  "Liposuction",
  "Lipoma",
  "Sebaceous Cyst",
  "Breast Lift",
  "Rhinoplasty",
  "Breast Reduction",
  "Breast Augmentation",
  "Breast Lump",
  "Hair Loss",
  "Breast Surgery",
  "Axillary Breast",
  "Abdominoplasty",
  "Double Chin",
  "Buccal Fat",
  "Earlobe Repair",
  "Blepharoplasty",
  "Hair Fall PRP",
  "Carpal Tunnel Syndrome",
  "Knee Replacement",
  "Spine Surgery",
  "Hip Replacement",
  "Arthroscopy",
  "ACL Tear",
  "Rotator Cuff Repair",
  "Bankart Surgery",
  "Bankart Repair",
  "Meniscus Repair Surgery",
  "Shoulder Replacement Surgery",
  "Discectomy",
  "Laminectomy",
  "Acdf Surgery",
  "Spinal Fusion",
  "Ligament Injury",
  "Knee Arthroscopy",
  "Shoulder Arthroscopy",
  "Lasik",
  "Cataract",
  "Squint Surgery",
  "Glaucoma Surgery",
  "Retinal Detachment Surgery",
  "Diabetic Retinopathy Treatment",
  "Intravitreal Injections",
  "Vitrectomy",
  "Monofocal Lens",
  "Multifocal Lens",
  "Toric Lens",
  "PRK Lasik",
  "Smile Lasik Surgery",
  "Femto Lasik Surgery",
  "ICL Surgery",
  "Macular Edema",
  "Retinal Surgery",
  "Contoura Vision",
  "Phaco Surgery",
  "Pterygium",
  "Teeth Alignment (Fix)",
  "Dental Others",
  "Crossbite Teeth",
  "Overbite Teeth",
  "Openbite Teeth",
  "Bariatric Surgery",
  "SPATZ Intragastric Balloon",
  "Intragastric Balloon",
  "Weight Loss Surgery",
  "Scar Removal",
  "Beard Transplant",
  "Face Threadlift",
  "Botox",
  "Derma Fillers",
  "Vampire Facial with Dermaroller",
  "Hair Transplant",
  "Hair Reduction",
  "Fat Loss",
  "Allergan for Double Chin",
  "Allergan for Arms",
  "Allergan for Underarm Fat",
  "Allergan for Tummy",
  "Allergan for Inner Thigh",
  "Allergan for Outer Thigh",
  "Anti Aging",
  "Uneven Skin Tone",
  "Acne & Scar",
  "Pigmentation",
  "Tattoo removal",
  "Hair Treatment",
  "Vitiligo for Face",
  "Roascea (Gold Toning laser)",
  "Dark Circle & Puffy Eyes",
  "Foundation full Face",
  "Acne Scar",
  "Male Infertility",
  "Female Infertility",
  "Ivf",
  "Iui",
  "Embryo Transfer",
  "ICSI Treatment"
];

const HeroSection = () => {
  return (
    <div className="py-12 px-6 h-full w-full">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side - Text + Highlights + Call Button */}
        <div className="flex-1">
          {/* NEW HEADING */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 leading-snug">
            Pure Treatment Matlab{" "}
            <span className="text-orange-500">PureCheckup</span> – Trusted
            Health & Surgery Partner
          </h2>

          {/* NEW SUBHEADING */}
          {/* <p className="mt-2 text-gray-600 font-medium text-md sm:text-lg">
            50+ Doctors | 50+ Diseases | 10+ Cities
          </p> */}
          {/* Stats */}
          <div className="flex flex-row gap-10 mt-6">
            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">40+</h2>
              <p className="text-gray-600 text-sm">DOCTORS</p>

            </div>
            <div className=" w-[1px] bg-zinc-200" />

            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">50+</h2>
              <p className="text-gray-600 text-sm">DISEASES</p>
            </div>
            <div className=" w-[1px] bg-zinc-200" />
            <div>
              <h2 className="text-[#004aad] font-bold text-4xl">30+</h2>
              <p className="text-gray-600 text-sm">CITIES</p>
            </div>
          </div>

          {/* EXISTING TITLE */}
          {/* <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-blue-700 leading-snug">
            Simplifying Surgery Experience in{" "}
            <span className="text-orange-500">Surat</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Book Free Appointments With Our Expert Doctors Near You
          </p> */}

          {/* Call Us Button */}
          <div className="mt-8">
            <a href="tel:9211930749">
              <button className="bg-orange-500 text-white font-semibold rounded-md px-6 py-2 flex items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                Call Us <FaPhoneAlt /> 9211930749
              </button>
            </a>

            <p className="mt-2 text-sm text-gray-600 font-medium">
              Book Your Doctor's Appointment Today – Fast & Easy
            </p>
          </div>

          {/* Highlights */}
          {/* <div className="bg-white shadow-md mt-8 rounded-lg p-6 flex flex-col sm:flex-row flex-wrap gap-6 border">
            <HighlightCard
              icon={<span>💬</span>}
              text="Consult for 50+ Health Conditions With Trusted Doctors Across India"
            />
            <HighlightCard
              icon={<span>👨‍⚕️</span>}
              text="Choose Between Online or In-Person Appointments With Qualified Specialists"
            />
            <HighlightCard
              icon={<span>🤝</span>}
              text="Receive Personalized Medical Support From Diagnosis to Recovery"
            />
          </div> */}

          {/* Features */}
          <div className="mt-8 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span>📋</span>
              <p>Consult for 50+ Health Conditions With Trusted Doctors Across India</p>
            </div>
            <div className="flex items-center gap-3">
              <span>👨‍⚕️</span>
              <p>Choose Between Online or In-Person Appointments With Qualified Specialists</p>
            </div>
            <div className="flex items-center gap-3">
              <span>📦</span>
              <p>Receive Personalized Medical Support From Diagnosis to Recovery</p>
            </div>
          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div className="flex-1 flex justify-center items-center  md:mt-0 pt-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-full ">
            <h2 className="font-bold text-xl mb-4 text-center">Book Free Consultation</h2>
            <input
              type="text"
              placeholder="Patient Name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Select >
              <SelectTrigger className="w-full py-5 mb-3">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city, index) => (
                  <SelectItem key={index * 10} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select >
              <SelectTrigger className="w-full py-5 mb-4">
                <SelectValue placeholder="Select Disease" />
              </SelectTrigger>
              <SelectContent>
                {diseases.map((city, index) => (
                  <SelectItem key={index * 10} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <button className="bg-[#2874F0] text-white font-semibold w-full py-2 my-4 rounded-md hover:opacity-90">
              Book Now
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
