import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  image: any;
  title: string;
  bgImage: string; // background image path
}

export default function BenefitCard({ image, title, bgImage }: BenefitCardProps) {
  return (
    <Card
      className="w-full max-w-xs rounded-xl shadow-sm border-0 overflow-hidden relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content */}
      <CardContent className="relative flex items-center gap-3 p-4 text-sm font-medium text-gray-800">
        <img className="w-20" src={image} alt="" />
        <span className="text-xl font-sans text-(--orange-button-color)">{title}</span>
      </CardContent>
    </Card>
  )
}
