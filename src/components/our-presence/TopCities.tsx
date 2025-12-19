import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "../index"
import { constantData } from "@/constants";
import { useLocation, useNavigate } from "react-router-dom";
const cities = constantData.cities;

export default function TopCities({ disease }: { disease: string }) {
    const navigate = useNavigate();
    const location = useLocation();

    const moveToCity = (city:string)=> {
        console.log("location", `${location.pathname}/${city}`);
        navigate(`${location.pathname}/${city?.toLowerCase()}`)
    }
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <Heading text1="Top Cities Where We Provide" text2={`${disease} Treatment`} />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
                {cities.map((city, index) => (
                    <Card
                        onClick={()=> moveToCity(city)}
                        key={index}
                        className="flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl"
                    >
                        <CardContent className="flex flex-col items-center gap-3 p-0">
                            <MapPin className="w-8 h-8 text-blue-600" />
                            <h3 className="text-lg font-semibold">{city}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
