import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AppointForm } from "@/components";
import { constantData } from "@/constants";

interface TreatmentCardProps {
  title: string;
  description: string;
  downtime: string;
}

export function TreatmentCard({ title, description, downtime }: TreatmentCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="w-full max-w-sm  rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 font-medium">Downtime: {downtime}</p>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        <Button size="default" className=" bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          onClick={() => setOpen(!open)}
          aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
        >
          Book
        </Button>
        <Button
          size="default"
          variant="outline"
          className="border-green-200 text-green-700 bg-green-50 hover:bg-green-100 rounded-md"
        >
          <a href={`tel:${constantData.supportNumber}`}>Call</a>
        </Button>
      </CardFooter>
      {open && <AppointForm open={open} setOpen={setOpen} />}
    </Card>
  );
}
