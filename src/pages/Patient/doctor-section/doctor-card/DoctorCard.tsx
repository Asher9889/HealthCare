
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { specialists } from "@/constants/data";
import { Star } from "lucide-react";
import { callGif } from "@/assets";
import { AppointForm } from "@/components";
import { useState } from "react";

export default function DoctorInfo() {
  return (
    <div className="flex flex-col gap-8">
      {specialists.map((doc) => (
        <DoctorCard key={doc.name} {...doc} />
      ))}
    </div>
  );
}

interface Specialist {
  name: string;
  specialties: string[];
  experience: string;
  phone?: string;
  city: string;
  happyPatients: string;
  imageUrl: string;
  description?: string;
}

function DoctorCard({
  name,
  specialties,
  experience,
  happyPatients,
  imageUrl,
  description,
  phone,
  city
}: Specialist) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        flex flex-col md:flex-row 
        w-full gap-5 
        rounded-2xl bg-white p-5 shadow-md
      "
    >
      {/* LEFT — Doctor Image */}
      <div className="flex md:block justify-center">
        <div className="h-28 w-28 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* MIDDLE — Info */}
      <div className="flex flex-col flex-1">
        {/* Name + rating */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <span className="flex items-center text-orange-500 font-semibold text-sm">
            <Star className="mr-1 h-4 w-4 text-orange-500" />
            {happyPatients} Happy Patients
          </span>
        </div>

        {/* Specialties */}
        <div className="mt-2 flex flex-wrap gap-2">
          {specialties.map((spec) => (
            <Badge key={spec} className="bg-blue-500 text-white text-xs">
              {spec}
            </Badge>
          ))}
        </div>

        <p className="mt-2 font-medium text-blue-600">{experience} Experience</p>

        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}

        <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
          <span>📍</span>
          <span>{city}</span>
        </div>
      </div>

      {/* RIGHT — Buttons */}
      <div
        className="
          flex flex-col gap-3 
          justify-center 
          items-center 
          w-full md:w-auto 
        "
      >
        {/* Book button */}
        <Button
          onClick={() => setOpen(true)}
          className="
            w-full md:w-64 
            h-12 text-md 
            bg-orange-500 text-white hover:bg-orange-600
          "
        >
          Book Appointment
        </Button>

        {/* Call button */}
        <Button
          onClick={() => window.open(`tel:${phone || "9211930749"}`)}
          className="
            w-full md:w-64 
            h-12 text-md 
            bg-blue-500 text-white hover:bg-blue-700
          "
        >
          Call Us
          <img src={callGif} alt="call" className="w-6 h-6 ml-2" />
          {phone || "9211930749"}
        </Button>
      </div>

      <AppointForm open={open} setOpen={setOpen} />
    </div>
  );
}

