import { Heading } from "@/components";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Book a consult",
    description: "Teleconsult or in-person evaluation with our Jaipur specialists.",
    step: "1"
  },
  {
    title: "Pre-op tests",
    description: "Simple blood work & proctoscopy (if needed).",
     step: "2"
  },
  {
    title: "Procedure day",
    description: "Most minimally invasive procedures are outpatient.",
     step: "3"
  },
  {
    title: "Recovery",
    description: "Quick return to daily life; pain management & follow-up plan provided.",
     step: "4"
  },
];

export default function TreatmentProcess() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <Heading text1="How Treatment Works —" text2="What to Expect" className="mb-8" />

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border m-0 p-0  border-gray-100 shadow-sm hover:shadow-md transition-all rounded-none first:rounded-t-lg last:rounded-b-lg"
            >
              <CardContent className="flex items-start gap-3 p-5">
                <div className="flex-shrink-0 text-primary mt-1">
                    <p className="w-8 h-8 rounded-full bg-(--orange-button-color) text-white text-md font-semibold flex justify-center items-center">{step.step}</p>
                  {/* <CheckCircle2 className="w-6 h-6" /> */}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{step.title}</p>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
