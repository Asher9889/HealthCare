import { Heading } from "../index";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ---- TYPES ----
interface FeatureItem {
  quote: string;
  name: string;
  icon: React.ElementType; // lucide-react icons
}

interface FeatureSectionProps {
  heading1: string;
  heading2: string;
  items: FeatureItem[];
}

// ---- REUSABLE COMPONENT ----
export default function FeatureSection({
  heading1,
  heading2,
  items,
}: FeatureSectionProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <Heading text1={heading1} text2={heading2} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 rounded-2xl"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {item.quote}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-(--text-primary)">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
