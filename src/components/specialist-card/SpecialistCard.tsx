import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Specialist = {
  id: number
  name: string
  title: string
  experience: string
  surgeries: string
  description: string
  image: string
  appointmentLink?: string
  callLink?: string
}

export default function SpecialistCard({ specialist }: { specialist: Specialist }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="flex gap-4 p-4 items-center">
        {/* Image */}
        <img
          src={specialist.image}
          alt={specialist.name}
          className="w-20 h-30 rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-800">
            {specialist.name} – {specialist.title}
          </h3>
          <p className="text-sm text-gray-600">
            {specialist.experience} · {specialist.surgeries}
          </p>
          <p className="text-sm text-gray-500">{specialist.description}</p>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              asChild
            >
              <a href={specialist.appointmentLink || "#"}>Book Appointment</a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-lg"
              asChild
            >
              <a href={specialist.callLink || "#"}>Call Clinic</a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
