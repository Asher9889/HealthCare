// src/components/FeatureCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="w-full max-w-xs border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}
