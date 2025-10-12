import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Stethoscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Section {
  title: string;
  description?: string;
  list?: string[];
}

const sections: Section[] = [
  {
    title: "What is Anal Fistula?",
    description:
      "An anal fistula is a small tunnel that develops between the end of the rectum and the skin around the anus, usually after an anal abscess. It causes repeated infections, pain, and pus discharge. If left untreated, a fistula can worsen and affect daily comfort. At PureCheckup, our specialists diagnose and treat fistula in ano using advanced laser technology that ensures safe, quick, and lasting relief.",
  },
  {
    title: "What are the Types of Anal Fistula?",
    description:
      "Medical experts classify anal fistulas based on their connection with the anal sphincter muscles. The main types include:",
    list: [
      "Intersphincteric Fistula – runs between the internal and external sphincter.",
      "Transsphincteric Fistula – passes through both sphincters.",
      "Suprasphincteric Fistula – extends above the sphincter muscles.",
      "Extrasphincteric Fistula – runs from the rectum to the skin outside the anal region.",
      "Each type requires a personalized approach for laser fistula treatment, ensuring minimal damage to surrounding tissues.",
    ],
  },
  {
    title: "Causes of Anal Fistula",
    list: [
      "Untreated anal abscess or infection",
      "Chronic inflammatory bowel disease (IBD)",
      "Trauma or injury to the anal region",
      "Tuberculosis or post-surgical complications",
      "Poor hygiene or prolonged constipation",
    ],
  },
  {
    title: "Symptoms of Anal Fistula",
    list: [
      "Pain, swelling, and redness near the anus",
      "Recurrent pus or blood discharge",
      "Persistent itching or irritation",
      "Foul-smelling discharge",
      "Fever and fatigue (in severe cases)",
    ],
  },
  {
    title: "Treatment Options for Anal Fistula",
    description:
      "Modern fistula treatments focus on complete healing with minimal recurrence. At PureCheckup, treatment plans are customized after thorough clinical evaluation. Common options include:",
    list: [
      "Medication and antibiotics (for minor infections)",
      "Fistulotomy – traditional open surgery",
      "Seton placement – used for complex fistulas",
      "Laser Fistula Surgery (FiLaC or DLPL technique) – a cutting-edge, minimally invasive procedure.",
      "Laser Fistula Surgery ensures precision removal of the fistula tract without cutting sphincter muscles, leading to faster recovery, less pain, and almost no recurrence.",
    ],
  },
  {
    title: "Benefits of Laser Fistula Treatment",
    list: [
      "Painless and bloodless procedure",
      "No stitches or large cuts",
      "Daycare procedure with same-day discharge",
      "Quick healing and reduced infection risk",
      "Minimal recurrence rates",
      "Safe for patients of all age groups",
    ],
  },
  {
    title: "Expert Laser Fistula Surgeon – PureCheckup Healthcare",
    description:
      "PureCheckup Healthcare provides specialist surgeons who lead the anal fistula treatment program with advanced expertise. They have extensive experience in performing laser fistula surgeries, ensuring high success rates and minimal recurrence. Patients trust PureCheckup Healthcare for its personalized treatment approach, ethical care, and long-term results.",
  },
];

export default function ConditionInfo() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Anal Fistula Treatment & Information
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Comprehensive guide by <span className="font-semibold text-blue-600">PureCheckup Healthcare</span>
          </p>
        </div>

        {sections.map((section, index) => (
          <Card
            key={index}
            className="mb-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 flex items-center gap-3">
                {index % 2 === 0 ? <Stethoscope className="text-blue-500" /> : <BookOpen className="text-blue-500" />}
                {section.title}
              </h2>
              {section.description && (
                <p className="text-gray-700 leading-relaxed mb-4">{section.description}</p>
              )}
              {section.list && (
                <ul className="space-y-3 text-gray-700 font-medium">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}

        <Separator className="my-10" />

        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Book Your Consultation Today
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule your appointment with our laser fistula specialists at PureCheckup.
          </p>
          <Button className="px-8 py-6 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            Book Appointment
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
