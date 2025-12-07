import { cities } from "@/constants/data";
import { MapPin, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CityFallback = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Illustration/Icon */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-xl">
                        <MapPin className="w-16 h-16 text-blue-600" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                        We're Not There Yet!
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto">
                        We currently don't offer services in this city. However, we are rapidly expanding!
                        Check out our services in these major cities:
                    </p>
                </div>

                {/* Cities Grid */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                        Available Cities
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cities.map((city) => (
                            <Link
                                key={city}
                                to={`/${city.toLowerCase()}`}
                                className="group flex items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                            >
                                <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                                    {city}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                    >
                        <Home className="w-4 h-4" />
                        Back to Homepage
                    </Link>
                    <Link
                        to="/contact-us"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Contact Support
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CityFallback;
