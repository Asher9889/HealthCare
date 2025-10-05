import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Stethoscope, Activity, HeartPulse, Syringe, Pill } from "lucide-react";
import { BookNowButton, Heading } from "@/components";

export default function PilesInfo() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-green-50 py-20 px-6 rounded-3xl shadow-xl overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
            <Heading text1="What is" text2="Piles (Hemorrhoids)" />
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          Piles, medically known as hemorrhoids, are swollen and inflamed veins located in the lower rectum or around the anus. They can develop internally, inside the rectum, or externally, under the skin around the anal opening. This condition is very common and can affect people of all ages due to factors like constipation, prolonged sitting, pregnancy, obesity, and poor dietary habits. Piles often cause discomfort, itching, pain, swelling, or bleeding during bowel movements. Although usually not life-threatening, untreated piles can lead to complications. Early diagnosis and treatment, including lifestyle changes and advanced options like laser piles treatment, are important.
          </p>
        </motion.div>

        {/* Tabs Layout with Icons */}
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="flex flex-row gap-4">
            <div className="">

              <TabsTrigger value="types" className="focus:bg-(--orange-button-color) focus:text-white px-4"><Stethoscope className="w-4 h-4"/> Types</TabsTrigger>
              <TabsTrigger value="causes" className="focus:bg-(--orange-button-color) focus:text-white px-4"><Activity className="w-4 h-4"/> Causes</TabsTrigger>
              <TabsTrigger value="symptoms" className="focus:bg-(--orange-button-color) focus:text-white px-4"><HeartPulse className="w-4 h-4"/> Symptoms</TabsTrigger>
              <TabsTrigger value="treatment" className="focus:bg-(--orange-button-color) focus:text-white px-4 my-2"><Syringe className="w-4 h-4"/> Treatment</TabsTrigger>
              <TabsTrigger value="benefits" className="focus:bg-green-500 focus:text-white px-4"><Pill className="w-4 h-4"/> Benefits</TabsTrigger>
            </div>
          </TabsList>

          {/* Content */}
          <TabsContent value="types" className="mt-8">
            <Card className="">
              <CardContent className="p-8 space-y-4 text-gray-700 leading-relaxed">
                <p><strong>Internal Piles:</strong> Located inside the rectum; typically painless but may cause bleeding.</p>
                <p><strong>External Piles:</strong> Found under the skin around the anus; can be painful and may cause itching or swelling.</p>
                <p><strong>Prolapsed Piles:</strong> Internal hemorrhoids that have fallen through the anal opening; may be visible and can be pushed back manually.</p>
                <p><strong>Thrombosed Piles:</strong> External hemorrhoids with blood clots; often very painful and may appear as a hard lump.</p>
                <p>The severity of piles is graded from <strong>Grade I (mild)</strong> to <strong>Grade IV (severe)</strong>.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="causes" className="mt-8">
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 space-y-4 text-gray-700 leading-relaxed">
                <p><strong>Chronic Constipation or Diarrhea:</strong> Straining during bowel movements increases pressure on rectal veins.</p>
                <p><strong>Obesity:</strong> Excess weight can put additional pressure on the pelvic veins.</p>
                <p><strong>Pregnancy:</strong> Hormonal changes and increased blood volume can lead to swollen veins.</p>
                <p><strong>Sedentary Lifestyle:</strong> Prolonged sitting can impede blood flow.</p>
                <p><strong>Aging:</strong> Tissue supporting veins in the rectum and anus can weaken with age.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symptoms" className="mt-8">
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 space-y-4 text-gray-700 leading-relaxed">
                <p><strong>Rectal Bleeding:</strong> Bright red blood on toilet paper or in the toilet bowl.</p>
                <p><strong>Itching or Irritation:</strong> Around the anus.</p>
                <p><strong>Pain or Discomfort:</strong> Especially during or after bowel movements.</p>
                <p><strong>Swelling:</strong> A lump near the anus, which may be sensitive or painful.</p>
                <p><strong>Mucus Discharge:</strong> From the rectum.</p>
                <p>If you experience these symptoms, consult a healthcare professional.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treatment" className="mt-8">
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 space-y-4 text-gray-700 leading-relaxed">
                <p><strong>Lifestyle Modifications:</strong> Increase fiber, stay hydrated, and avoid straining.</p>
                <p><strong>Topical Treatments:</strong> Creams or ointments to reduce inflammation.</p>
                <p><strong>Minimally Invasive Procedures:</strong> Such as rubber band ligation or sclerotherapy.</p>
                <p><strong>Surgical Options:</strong> Including hemorrhoidectomy and laser treatment.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-8">
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 space-y-4 text-gray-700 leading-relaxed">
                <p><strong>Minimally Invasive:</strong> No large incisions required.</p>
                <p><strong>Reduced Pain:</strong> Precision of the laser minimizes tissue damage.</p>
                <p><strong>Quick Recovery:</strong> Most patients resume normal activities in days.</p>
                <p><strong>Outpatient Procedure:</strong> Often performed under local anesthesia.</p>
                <p><strong>High Success Rate:</strong> Effective for multiple grades with low recurrence.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-10 text-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Meet Our Specialist</h3>
              <p className="text-lg leading-relaxed">
                <strong>Dr. Tanmay Jain</strong> specializes in laser piles treatment, providing advanced care options for effective and lasting relief.
              </p>
              <p className="mt-4 text-gray-700">
                For personalized consultation, visit {" "}
                <a href="https://PureCheckup.com" className="text-blue-700 underline font-medium">
                  PureCheckup.com
                </a>{" "}
                or schedule an appointment with Dr. Tanmay Jain.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center pt-10">

          <BookNowButton text="Book Free Appointment"/>
        </div>
      </div>
    </section>
  );
}