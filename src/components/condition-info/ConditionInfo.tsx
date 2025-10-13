import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BookNowButton, Heading } from "@/components";

interface TabItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface ConditionInfoProps {
  title1: string;
  title2: string;
  description: string;
  tabsData: TabItem[];
  expertHeading?: string;
  doctorName?: string;
  doctorDescription: React.ReactNode | string
  doctorLink: string;
  ctaText?: string;
}

export default function ConditionInfo({
  title1,
  title2,
  description,
  tabsData,
  expertHeading,
  doctorName,
  doctorDescription,
  doctorLink,
  ctaText = "Book Free Appointment",
}: ConditionInfoProps) {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-green-50 py-20 px-6 rounded-3xl shadow-xl overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Heading text1={title1} text2={title2} />
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue={tabsData[0]?.value || ""} className="w-full">
          <TabsList className="flex flex-row  overflow-x-auto overflow-y-hidden w-full max-w-7xl no-scrollbar">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-shrink-0 focus:bg-orange-500 focus:text-white px-4 py-2 rounded-md transition-colors hover:bg-gray-100"
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  <span className="whitespace-nowrap">{tab.label}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-8">
              <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-md">
                <CardContent className="p-8 text-gray-700 leading-relaxed space-y-4">
                  {tab.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Doctor Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-10 text-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
               {expertHeading || "Meet Our Specialist"}
              </h3>
              <p className="text-lg leading-relaxed">
                <strong>{doctorName}</strong> {doctorDescription}
              </p>
              <p className="mt-4 text-gray-700">
                For personalized consultation, visit{" "}
                <a
                  href={doctorLink}
                  className="text-blue-700 underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doctorLink.replace("https://", "")}
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center pt-10">
          <BookNowButton text={ctaText} />
        </div>
      </div>
    </section>
  );
}
