import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Baby,
  Sparkles,
  User,
  Building2,
} from "lucide-react";
import { HealthInsurance, PageNotFound } from "./components";
import { lazy } from "react";
import { DoctorSection, EnglishBlog, FissureTreatment, LaparoscopySurgery, LaserSurgery, NoCostEmi, PatientHelp, AboutUs, ContactUs, DoctorsOnboarding, LaserSurgeryInSpecialCity, LaparoscopicSurgeryInSpecialCity } from "./pages";

// Utility function for type-safe lazy loading
type LazyImport = {
  [key: string]: React.ComponentType<any>;
};

const lazyImport = <T extends keyof LazyImport>(
  exportName: T
): React.LazyExoticComponent<LazyImport[T]> => {
  return lazy(
    () =>
      import("./pages").then((module) => ({
        default: (module as unknown as LazyImport)[exportName],
      }))
  );
};

// Lazy load all components
const Asthetic = lazyImport("Asthetic");
const Practology = lazyImport("Practology");
const Laparoscopy = lazyImport("Laparoscopy");
const Urology = lazyImport("Urology");
const Gynecology = lazyImport("Gynecology");
const PilesTreatment = lazyImport("PilesTreatment");
const PilesInSpecialCity = lazyImport("PilesInSpecialCity");
const FistulaTreatment = lazyImport("FistulaTreatment");
const PilonidalSinusTreatment = lazyImport("PilonidalSinusTreatment");
const RectalProlapseTreatment = lazyImport("RectalProlapseTreatment");
const FistulaInSpecialCity = lazyImport("FistulaInSpecialCity");
const PilonidalSinusInSpecialCity = lazyImport("PilonidalSinusInSpecialCity");
const RectalProlapseInSpecialCity = lazyImport("RectalProlapseInSpecialCity");
const FissureInSpecialCity = lazyImport("FissureInSpecialCity");
const HerniaTreatment = lazyImport("HerniaTreatment");
const GallstonesTreatment = lazyImport("GallstonesTreatment");
const AppendicitisTreatment = lazyImport("AppendicitisTreatment");
const InguinalHerniaTreatment = lazyImport("InguinalHerniaTreatment");
const UmbilicalHerniaTreatment = lazyImport("UmbilicalHerniaTreatment");
const AppendicitisInSpecialCity = lazyImport("AppendicitisInSpecialCity");
const StaplerCircumcisionInSpecialCity = lazyImport("StaplerCircumcisionInSpecialCity");
const LaserCircumcisionInSpecialCity = lazyImport("LaserCircumcisionInSpecialCity");
const HydroceleInSpecialCity = lazyImport("HydroceleInSpecialCity");
const ESWLInSpecialCity = lazyImport("ESWLInSpecialCity");
const RIRSInSpecialCity = lazyImport("RIRSInSpecialCity");
const PCNLInSpecialCity = lazyImport("PCNLInSpecialCity");
const URSLInSpecialCity = lazyImport("URSLInSpecialCity");
const FrenuloplastyInSpecialCity = lazyImport("FrenuloplastyInSpecialCity");
const BalanitisInSpecialCity = lazyImport("BalanitisInSpecialCity");
const BalanoposthitisInSpecialCity = lazyImport("BalanoposthitisInSpecialCity");
const ParaphimosisInSpecialCity = lazyImport("ParaphimosisInSpecialCity");
const ForeskinInSpecialCity = lazyImport("ForeskinInSpecialCity");
const TightForeskinInSpecialCity = lazyImport("TightForeskinInSpecialCity");
const PhimosisInSpecialCity = lazyImport("PhimosisInSpecialCity");
const CornRemovalInSpecialCity = lazyImport("CornRemovalInSpecialCity");
const VasectomyInSpecialCity = lazyImport("VasectomyInSpecialCity");
const TesticularTorsionInSpecialCity = lazyImport("TesticularTorsionInSpecialCity");
const EpididymalCystInSpecialCity = lazyImport("EpididymalCystInSpecialCity");
const ToenailInSpecialCity = lazyImport("ToenailInSpecialCity");
const GallstonesInSpecialCity = lazyImport("GallstonesInSpecialCity");
const InguinalHerniaInSpecialCity = lazyImport("InguinalHerniaInSpecialCity");
const UmbilicalHerniaInSpecialCity = lazyImport("UmbilicalHerniaInSpecialCity");
const KidneyStonesInSpecialCity = lazyImport("KidneyStonesInSpecialCity");
const CircumcisionInSpecialCity = lazyImport("CircumcisionInSpecialCity");
const CosmeticSurgeryInSpecialCity = lazyImport("CosmeticSurgeryInSpecialCity");
const PlasticSurgeryInSpecialCity = lazyImport("PlasticSurgeryInSpecialCity");
const GynecologyInSpecialCity = lazyImport("GynecologyInSpecialCity");
const CircumcisionTreatment = lazyImport("CircumcisionTreatment");
const KidneyStonesTreatment = lazyImport("KidneyStonesTreatment");
const LaserCircumcision = lazyImport("LaserCircumcision");
const StaplerCircumcision = lazyImport("StaplerCircumcision");
const Hydrocele = lazyImport("Hydrocele");
const ESWL = lazyImport("ESWL");
const PCNL = lazyImport("PCNL");
const URSL = lazyImport("URSL");
const RIRS = lazyImport("RIRS");
const Frenuloplasty = lazyImport("Frenuloplasty");
const Balanitis = lazyImport("Balanitis");
const Balanoposthitis = lazyImport("Balanoposthitis");
const Paraphimosis = lazyImport("Paraphimosis");
const Foreskin = lazyImport("Foreskin");
const TightForeskin = lazyImport("TightForeskin");
const Phimosis = lazyImport("Phimosis");
const CornRemoval = lazyImport("CornRemoval");
const Vasectomy = lazyImport("Vasectomy");
const TesticularTorsion = lazyImport("TesticularTorsion");
const EpididymalCyst = lazyImport("EpididymalCyst");
const Toenail = lazyImport("Toenail");
const PlasticSurgery = lazyImport("PlasticSurgery");
const CosmeticSurgery = lazyImport("CosmeticSurgery");
const HerniaInSpecialCity = lazy(() =>
  import("./pages/laparoscopy/condition-wise-treatment/hernia/city-wise-hernia/HerniaInSpecialCity")
    .then(module => ({ default: module.default }))
);

// const HerniaPage = lazy(() => import("./pages/laproscopy/HerniaPage"));
// const GallstonesPage = lazy(() => import("./pages/laproscopy/GallstonesPage"));
// const AppendicitisPage = lazy(() => import("./pages/laproscopy/AppendicitisPage"));
// const InguinalPage = lazy(() => import("./pages/laproscopy/InguinalPage"));
// const UmbilicalPage = lazy(() => import("./pages/laproscopy/UmbilicalPage"));

// const CircumcisionPage = lazy(() => import("./pages/urology/CircumcisionPage"));
// const GynaecologyPage = lazy(() => import("./pages/GynaecologyPage"));
// const AestheticsPage = lazy(() => import("./pages/AestheticsPage"));
// const PatientPage = lazy(() => import("./pages/PatientPage"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage"));
// const CompanyPage = lazy(() => import("./pages/CompanyPage"));

// ---------------- NAV DATA WITH ROUTES ----------------

export const navItems = [
  {
    name: "Proctology",
    skip: false,
    path: "/c/proctology",
    element: Practology,
    icon: Stethoscope,
    children: [
      { label: "Piles Treatment", path: "/treatment/piles", element: PilesTreatment },
      { label: "Fistula Treatment", path: "/treatment/fistula", element: FistulaTreatment },
      { label: "Fissure Treatment", path: "/treatment/fissure", element: FissureTreatment },
      { label: "Pilonidal Sinus Treatment", path: "/treatment/pilonidal-sinus", element: PilonidalSinusTreatment },
      { label: "Rectal Prolapse", path: "/treatment/rectal-prolapse", element: RectalProlapseTreatment },
    ],
  },
  // https://purecheckup.com/c/laparoscopy/
  {
    name: "Laproscopy",
    skip: false,
    path: "/c/laproscopy",
    element: Laparoscopy,
    icon: Microscope,
    children: [
      { label: "Hernia Surgery", path: "/treatment/hernia", element: HerniaTreatment },
      { label: "Gallstones Treatment", path: "/treatment/gallstone", element: GallstonesTreatment },
      { label: "Appendicitis", path: "/treatment/appendicitis", element: AppendicitisTreatment },
      { label: "Inguinal Hernia Treatment", path: "/treatment/inguinal-hernia", element: InguinalHerniaTreatment },
      { label: "Umbilical Hernia Treatment", path: "/treatment/umbilical-hernia", element: UmbilicalHerniaTreatment }]
  },
  {
    name: "Urology",
    skip: false,
    path: "/c/urology",
    element: Urology,
    icon: HeartPulse,
    children: [
      { label: "Circumcision", path: "/treatment/circumcision", element: CircumcisionTreatment },
      { label: "Stapler Circumcision", path: "/treatment/stapler-circumcision", element: StaplerCircumcision },
      { label: "Laser Circumcision", path: "/treatment/laser-circumcision", element: LaserCircumcision },
      { label: "Kidney Stones Treatment", path: "/treatment/kidney-stones-treatment", element: KidneyStonesTreatment },
      { label: "Hydrocele", path: "/treatment/hydrocele", element: Hydrocele },
      { label: "EWSL", path: "/treatment/eswl", element: ESWL },
      { label: "RIRS", path: "/treatment/rirs", element: RIRS },
      { label: "PCNL", path: "/treatment/pcnl", element: PCNL },
      { label: "URSL", path: "/treatment/ursl", element: URSL },
      { label: "Frenuloplasty Surgery", path: "/treatment/frenuloplasty-surgery", element: Frenuloplasty },
      { label: "Balanitis", path: "/treatment/balanitis", element: Balanitis },
      { label: "Balanoposthitis", path: "/treatment/balanoposthitis", element: Balanoposthitis },
      { label: "Paraphimosis", path: "/treatment/paraphimosis", element: Paraphimosis },
      { label: "Foreskin Infection", path: "/treatment/foreskin-infection", element: Foreskin },
      { label: "Tight Foreskin", path: "/treatment/tight-foreskin", element: TightForeskin },
      { label: "Phimosis", path: "/treatment/phimosis", element: Phimosis },
      { label: "Corn Removal", path: "/treatment/corn-removal", element: CornRemoval },
      { label: "Vasectomy", path: "/treatment/vasectomy", element: Vasectomy },
      { label: "Testicular Torsion", path: "/treatment/testicular-torsion", element: TesticularTorsion },
      { label: "Epididymal Cyst", path: "/treatment/epididymal-cyst", element: EpididymalCyst },
      { label: "Toenail Removal", path: "/treatment/toenail-removal", element: Toenail }
    ],
  },
  {
    name: "Gynaecology",
    skip: false,
    path: "/c/gynaecology",
    icon: Baby,
    element: Gynecology
  },
  {
    name: "Aesthetics",
    skip: false,
    path: "/c/aesthetics/",
    icon: Sparkles,
    element: Asthetic,
    children: [
      { label: "Plastic Surgeries", path: "/aesthetics/plastic-surgeries", element: PlasticSurgery },
      { label: "Cosmetic Surgery", path: "/aesthetics/cosmetic-surgery", element: CosmeticSurgery },
    ],
  },
  // Patient Service
  {
    name: "Patient",
    skip: false,
    icon: User,
    // element: PageNotFound, // Replace with Patient component
    children: [
      // { label: "Hindi Blog", path: "/blogs/hindi-blog", element: PageNotFound },
      { label: "English Blogs", path: "/blogs/english-blog", element: EnglishBlog },
      // { label: "FAQ", path: "/faq", element: PageNotFound },
      { label: "Patient Help", path: "/patient-help", element: PatientHelp },
      { label: "No Cost EMI", path: "/no-cost-emi", element: NoCostEmi },
      { label: "Health Insurance", path: "/health-insurance", element: HealthInsurance },
      { label: "Our Doctors", path: "/our-doctors", element: DoctorSection },
    ],
  },

  // Our Company
  {
    name: "Our Company",
    skip: false,
    icon: Building2,
    // element: PageNotFound, // Replace with Company component
    children: [
      { label: "Doctors On-boarding", path: "/doctor-onboarding", element: DoctorsOnboarding }, // surgery/laser-surgery
      { label: "About Us", path: "/about-us", element: AboutUs },
      { label: "Contact Us", path: "/contact-us", element: ContactUs },
      { label: "Privacy Policy", path: "/privacy-policy", element: PageNotFound },
    ],
  },

  {
    name: "Footer",
    skip: true,
    icon: Building2,
    // element: PageNotFound, // Replace with Company component
    children: [
      { label: "Surgery", path: "/c/surgery", element: PageNotFound }, // surgery/laser-surgery
      { label: "Laser Surgery", path: "/surgery/laser-surgery", element: LaserSurgery },
      { label: "Laproscopy Surgery ", path: "/surgery/laparoscopic-surgery", element: LaparoscopySurgery },
    ],
  },
];

const routes = navItems.flatMap((item) => {
  // Process children, filtering out any with skip: true
  const childRoutes = item.children?.map(child => ({
    path: child.path,
    element: child.element,
  })) || [];

  // Only include parent if it has its own path and is not skipped
  if (item.path) {
    return [{ path: item.path, element: item.element }, ...childRoutes];
  }

  return childRoutes;
});



const cityWiseRoutes = [
  { path: "/treatment/piles/:city", element: PilesInSpecialCity },
  { path: "/treatment/fistula/:city", element: FistulaInSpecialCity },
  { path: "/treatment/pilonidal-sinus/:city", element: PilonidalSinusInSpecialCity },
  { path: "/treatment/rectal-prolapse/:city", element: RectalProlapseInSpecialCity },
  { path: "/treatment/fissure/:city", element: FissureInSpecialCity },

  { path: "/treatment/hernia/:city", element: HerniaInSpecialCity },
  { path: "/treatment/gallstone/:city", element: GallstonesInSpecialCity },
  { path: "/treatment/appendicitis/:city", element: AppendicitisInSpecialCity },
  { path: "/treatment/inguinal-hernia/:city", element: InguinalHerniaInSpecialCity },
  { path: "/treatment/umbilical-hernia/:city", element: UmbilicalHerniaInSpecialCity },


  { path: "/c/gynaecology/:city", element: GynecologyInSpecialCity },

  { path: "/aesthetics/cosmetic-surgery/:city", element: CosmeticSurgeryInSpecialCity },
  { path: "/aesthetics/plastic-surgeries/:city", element: PlasticSurgeryInSpecialCity },

  { path: "/treatment/kidney-stones-treatment/:city", element: KidneyStonesInSpecialCity },
  { path: "/treatment/circumcision/:city", element: CircumcisionInSpecialCity },
  { path: "/treatment/stapler-circumcision/:city", element: StaplerCircumcisionInSpecialCity },
  { path: "/treatment/laser-circumcision/:city", element: LaserCircumcisionInSpecialCity },
  { path: "/treatment/hydrocele/:city", element: HydroceleInSpecialCity },
  { path: "/treatment/eswl/:city", element: ESWLInSpecialCity },
  { path: "/treatment/rirs/:city", element: RIRSInSpecialCity },
  { path: "/treatment/pcnl/:city", element: PCNLInSpecialCity },
  { path: "/treatment/ursl/:city", element: URSLInSpecialCity },
  { path: "/treatment/frenuloplasty-surgery/:city", element: FrenuloplastyInSpecialCity },
  { path: "/treatment/balanitis/:city", element: BalanitisInSpecialCity },
  { path: "/treatment/balanoposthitis/:city", element: BalanoposthitisInSpecialCity },
  { path: "/treatment/paraphimosis/:city", element: ParaphimosisInSpecialCity },
  { path: "/treatment/foreskin-infection/:city", element: ForeskinInSpecialCity },
  { path: "/treatment/tight-foreskin/:city", element: TightForeskinInSpecialCity },
  { path: "/treatment/phimosis/:city", element: PhimosisInSpecialCity },
  { path: "/treatment/corn-removal/:city", element: CornRemovalInSpecialCity },
  { path: "/treatment/vasectomy/:city", element: VasectomyInSpecialCity },
  { path: "/treatment/testicular-torsion/:city", element: TesticularTorsionInSpecialCity },
  { path: "/treatment/epididymal-cyst/:city", element: EpididymalCystInSpecialCity },
  { path: "/treatment/toenail-removal/:city", element: ToenailInSpecialCity },



  { path: "/surgery/laser-surgery/:city", element: LaserSurgeryInSpecialCity },
  { path: "/surgery/laparoscopic-surgery/:city", element: LaparoscopicSurgeryInSpecialCity },

];





export default routes;
export { cityWiseRoutes }