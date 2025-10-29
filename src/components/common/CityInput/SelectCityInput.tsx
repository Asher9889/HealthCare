import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cities } from "@/constants/data"

interface SelectCityInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SelectCityInput = ({ value, onChange, className = '' }: SelectCityInputProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`text-start w-full ${className}`}>
        <SelectValue placeholder="Select City" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city, index) => (
          <SelectItem key={index} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectCityInput;
