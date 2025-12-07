import { useParams } from "react-router-dom";
import { citiesLiteral } from "@/constants/data";
import CityFallback from "../city-fallback/CityFallback";

interface CityGuardProps {
    children: React.ReactNode;
}

const CityGuard = ({ children }: CityGuardProps) => {
    const { city } = useParams<{ city: string }>();

    // Normalize city from URL (e.g., "delhi" -> "Delhi")
    // We check case-insensitively against the supported list
    const isValidCity = city && citiesLiteral.some(
        (c) => c.toLowerCase() === city.toLowerCase()
    );

    if (!isValidCity) {
        return <CityFallback />;
    }

    return <>{children}</>;
};

export default CityGuard;
