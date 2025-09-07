import { Calendar } from "lucide-react"
import { Button, Card, CardContent  } from "../ui"
import { WhatsaapButton } from "..";
import { SelectCityInput } from "../../components";

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  button1Text: string
  button2Text: string
  city: string
  phone: string
  imageUrl: string
}

export default function DynamicHeroSection({ heroContent }: {heroContent: HeroProps}) {
  return (
    <div className="bg-[#D6E4EF] py-6 px-4 flex justify-center">
      <Card className="w-full max-w-7xl rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden px-4">
        {/* Left Side Content */}
        <CardContent className="p-8 flex flex-col justify-center flex-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{heroContent.title}</h2>
          {/* {heroContent.subtitle && (
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{heroContent.subtitle}</h3>
          )} */}
          {heroContent.description && (
            <p className="text-gray-600">{heroContent.description}</p>
          )}

          <div className="flex flex-nowrap gap-6 mt-4 flex-center justify-start rounded-md">
            <Button className="h-full bg-blue-600 hover:bg-blue-700 text-white ">
              <Calendar className="w-4 h-4 mr-2" /> {heroContent.button1Text}
            </Button>
            <WhatsaapButton className="bg-green-500 hover:bg-green-600 rounded-md text-white">
                {heroContent.button2Text} 
            </WhatsaapButton>
          </div>

          <div className="w-80 flex items-center gap-3 mt-4">
            <SelectCityInput  />
            <span className="text-gray-900 font-semibold">@{heroContent.phone}</span>
          </div>
        </CardContent>

        {/* Right Side Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={heroContent.imageUrl}
            alt="Doctor Consultation"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </Card>
    </div>
  )
}
