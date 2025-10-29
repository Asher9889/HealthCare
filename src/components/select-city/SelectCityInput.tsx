// SelectCityInput.tsx
import { cities } from "@/constants/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui"

export interface SelectCityInputProps {
  value?: string
  onChange?: (city: string) => void
}

const SelectCityInput = ({ value, onChange }: SelectCityInputProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full py-5">
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

export default SelectCityInput
