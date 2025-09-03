// import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Baby,
  Sparkles,
  User,
  Handshake,
  Building2,
} from "lucide-react";
import { PageNotFound } from "./components";

// Lazy load your pages (replace these with actual components)
// const PilesPage = lazy(() => import("./pages/proctology/PilesPage"));
// const FistulaPage = lazy(() => import("./pages/proctology/FistulaPage"));
// const FissurePage = lazy(() => import("./pages/proctology/FissurePage"));
// const PilonidalPage = lazy(() => import("./pages/proctology/PilonidalPage"));
// const RectalPage = lazy(() => import("./pages/proctology/RectalPage"));

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
    icon: Stethoscope,
    children: [
      { label: "Piles Treatment", path: "/proctology/piles-treatment", element: PageNotFound  },
      { label: "Fistula Treatment", path: "/proctology/fistula-treatment", element: PageNotFound },
      { label: "Fissure Treatment", path: "/proctology/fissure-treatment", element: PageNotFound },
      { label: "Pilonidal Sinus Treatment", path: "/proctology/pilonidal-sinus-treatment", element: PageNotFound },
      { label: "Rectal Prolapse", path: "/proctology/rectal-prolapse", element: PageNotFound },
    ],
  },
  {
    name: "Laproscopy",
    icon: Microscope,
    children: [
      { label: "Hernia Surgery", path: "/laproscopy/hernia-surgery", element: PageNotFound },
      { label: "Gallstones Treatment", path: "/laproscopy/gallstones-treatment", element: PageNotFound },
      { label: "Appendicitis", path: "/laproscopy/appendicitis", element: PageNotFound },
      { label: "Inguinal Hernia Treatment", path: "/laproscopy/inguinal-hernia-treatment", element: PageNotFound },
      { label: "Umbilical Hernia Treatment", path: "/laproscopy/umbilical-hernia-treatment", element: PageNotFound }]
  },
  {
    name: "Urology",
    icon: HeartPulse,
    children: [
      { label: "Circumcision", path: "/urology/circumcision", element: PageNotFound },
      // ... more children here
    ],
  },
  {
    name: "Gynaecology",
    icon: Baby,
    path: "/gynaecology",
    element: PageNotFound
  },
  {
    name: "Aesthetics",
    icon: Sparkles,
    children: [
      { label: "Plastic Surgeries", path: "/aesthetics/plastic-surgeries", element: PageNotFound  },
      { label: "Cosmetic Surgery", path: "/aesthetics/cosmetic-surgery", element: PageNotFound  },
    ],
  },
  { name: "Patient", icon: User, path: "/patient", element: PageNotFound  },
  { name: "Services", icon: Handshake, path: "/services", element: PageNotFound  },
  { name: "Our Company", icon: Building2, path: "/company", element: PageNotFound  },
];

// ---------------- FLATTEN INTO ROUTES ----------------
const routes: any[] = navItems.flatMap((item) => {
  if (item.children) {
    return item.children.map((child) => ({
      path: child.path,
      element: child.element,
    }));
  }
  if (item.path) {
    return [{ path: item.path, element: item.element }];
  }
  return [];
});

export default routes;
