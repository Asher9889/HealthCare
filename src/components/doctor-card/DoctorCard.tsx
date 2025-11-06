import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import AppointForm from "../book-appointment-form/AppointForm";

interface DoctorCardProps {
  name: string;
  specialties: string[];
  experience: string;
  phone?: string;
  happyPatients?: string;
  imageUrl: string;
}

export default function DoctorCard({
  name,
  specialties,
  experience,
  phone,
  happyPatients,
  imageUrl,
}: DoctorCardProps) {

    const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close
    
  return (
    <>
    <Card className="max-w-sm w-full overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg bg-white">
      <CardHeader className="flex flex-col items-center p-4">
        <img
          src={imageUrl}
          alt={name}
          className="h-44 w-44 rounded-full object-cover border border-gray-200 mb-3"
        />
        <h2 className="text-2xl font-semibold text-gray-900 text-center">{name}</h2>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {specialties.map((s) => (
            <Badge key={s} variant="secondary" className="text-white text-sm">
              {s}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center text-sm text-gray-600 space-y-1 pb-5">
        <p>Experience: {experience}</p>
        {phone && <p>Phone: {phone}</p>}
        {happyPatients && <p>Happy Patients: {happyPatients}</p>}

        <Button
          className="mt-3 w-full sm:w-auto rounded-xl"
          onClick={()=> setAppointmentOpen(true)}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
    {appointmentOpen && (
        <AppointForm open={appointmentOpen} setOpen={setAppointmentOpen} />
    )}
    </>
  );
}
