import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AppointForm from "../book-appointment-form/AppointForm"
import { useState } from "react"

type Specialist = {
  id: number
  name: string
  title?: string
  experience: string
  happyPatients?: string
  description?: string
  imageUrl?: any
  appointmentLink?: string
  callLink?: string
}

export default function SpecialistCard({ specialist }: { specialist: Specialist }) {
    const [formOpen, setFormOpen] = useState(false);

  return (
    <Card className="rounded-2xl shadow-sm my-4">
      <CardContent className="flex gap-4 p-4 items-center">
        {/* Image */}
        <img
          src={specialist.imageUrl}
          alt={specialist.name}
          className="w-20 h-30 rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-800">
            {specialist.name} – {specialist.title}
          </h3>
          <p className="text-sm text-gray-600">
            {specialist.experience} · {specialist.happyPatients} Surgeries
          </p>
          <p className="text-sm text-gray-500">{specialist.description}</p>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
              onClick={() => setFormOpen(true)}
            >
              Book Appointment
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-lg"
              asChild
            >
              <a href={"tel:9211930749"}>Call Clinic</a>
            </Button>
          </div>
        </div>
      </CardContent>
     { formOpen && <AppointForm open={formOpen} setOpen={setFormOpen} />}
     
    </Card>
  )
}
