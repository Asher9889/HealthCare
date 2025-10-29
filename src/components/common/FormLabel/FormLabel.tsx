// components/ui/FormLabel.tsx
import { Label } from "@/components/ui/label";

type FormLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
};

export default function FormLabel({ htmlFor, children, required }: FormLabelProps) {
  return (
    <Label htmlFor={htmlFor} className="flex items-center gap-1">
      {children}
      {required && <span className="text-red-500">*</span>}
    </Label>
  );
}
