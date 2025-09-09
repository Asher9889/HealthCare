import { InfiniteMovingCards } from "../ui";
import {
  ScanLine,
  Stethoscope,
  Building2,
  Wallet,
  FileCheck2,
  HeartPulse,
} from "lucide-react";


const items = [
  {
    quote: "100% Laser-Assisted Treatments",
    name: "Modern, precise, and less painful procedures.",
    title: "laser",
    icon: ScanLine,
  },
  {
    quote: "Experienced Proctologists",
    name: "Average 20+ years in colorectal surgery.",
    // title: "doctor",
    icon: Stethoscope,
  },
  {
    quote: "NABH-Accredited Hospitals",
    name: "Trusted facilities and operating rooms.",
    // title: "hospital",
    icon: Building2,
  },
  {
    quote: "EMI Options Available",
    name: "Flexible payment plans to ease your journey.",
    // title: "emi",
    icon: Wallet,
  },
  {
    quote: "Insurance Support",
    name: "End-to-end documentation and approvals.",
    // title: "insurance",
    icon: FileCheck2,
  },
  {
    quote: "Post-Surgery Recovery",
    name: "Personalized aftercare and follow-ups.",
    // title: "recovery",
    icon: HeartPulse,
  },
];


export default function WhyPureCheckup(){
    return (
        <InfiniteMovingCards items={items} />
    )
}