import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ✅ Reusable Section Header
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    {subtitle && <p className="">{subtitle}</p>}
  </div>
);

// ✅ Reusable List Card
const InfoCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="p-4 w-full lg:w-lg">
    <CardContent>
      <h3 className="text-md font-semibold text-gray-800 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// ✅ Reusable Chip Component
const CityChip = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 shadow-sm hover:bg-gray-100 cursor-pointer">
    {label}
  </span>
);

// ✅ Main Reusable Component
interface TreatmentSectionProps {
  treatmentName: string;
  costSubtitle: string;
  paymentOptions: string;
  costFactors: string[];
  cities: string[];
  mapImage: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function ConditionCityWiseTreatment({
  treatmentName,
  costSubtitle,
  paymentOptions,
  costFactors,
  cities,
  mapImage,
  primaryButtonText,
  secondaryButtonText,
}: TreatmentSectionProps) {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 text-(--text-primary)">
      {/* Cost Section */}
      <div className="flex flex-col md:flex-row justify-between my-5 items-start md:items-center gap-6">
        <div>
          <SectionHeader
            title={`${treatmentName} Treatment Cost at PureCheckUp`}
            subtitle={costSubtitle}
          />
          <Button className="mb-2 bg-(--orange-button-color) hover:bg-orange-600 ">{primaryButtonText}</Button>
          <p className="text-sm">{paymentOptions}</p>
        </div>
        <div className="">

         <InfoCard title="What affects cost?" items={costFactors} />
        </div>
      </div>

      {/* Find Treatment Section */}
      <div className="p-6 rounded-lg space-y-4 ">
        <SectionHeader
          title={`Find ${treatmentName} Treatment Near You with PureCheckUp`}
          subtitle="Clinics across major cities with cashless facilities."
        />
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <CityChip key={city} label={city} />
          ))}
        </div>

        <Card className="flex flex-row items-center p-4 gap-4">
          <img
            src={mapImage}
            alt="map"
            className="w-32 h-24 rounded-md object-cover"
          />
          <div>
            <p className="text-gray-600 text-sm mb-2">
              Clinics across major cities with cashless facilities.
            </p>
            <Button variant="outline">{secondaryButtonText}</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
