
import { Lock, ShieldCheck, Clock } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cities } from '@/constants/data';
import { ConditionTreatmentForm } from '@/components';


const Consultation = () => {

    return (
        <>
            <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Text & Cities */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                                Ready to talk?
                            </h2>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                Book a free appointment with our care team. Choose a city to see local availability.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {cities.map((city, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors cursor-default"
                                >
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <Card className="border-none shadow-lg bg-white px-4">
                        {/* <CardContent className="p-6 md:p-8 space-y-6"> */}
                            {/* <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                Consultation details
                            </h3> */}

                            {/* <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input
                                            placeholder="Full Name"
                                            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-[var(--primary-bg-color)]"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input
                                            placeholder="Mobile Number"
                                            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-[var(--primary-bg-color)]"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <SelectCityInput className='pl-10 bg-gray-50 border-gray-200 focus-visible:ring-[var(--primary-bg-color)]' />
                                    </div>
                                    <div className="relative">
                                        <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input
                                            placeholder="Condition / Disease"
                                            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-[var(--primary-bg-color)]"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full bg-[var(--orange-button-color)] hover:bg-[var(--orange-button-color)]/90 text-white font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all">
                                    <Send className="w-4 h-4 mr-2" />
                                    Book Free Appointment
                                </Button>
                            </form> */}
                            <ConditionTreatmentForm  cities={cities} />

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md">
                                    <Lock className="w-3 h-3" />
                                    Data encrypted
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md">
                                    <ShieldCheck className="w-3 h-3" />
                                    Verified doctors
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md">
                                    <Clock className="w-3 h-3" />
                                    Response in under 10 min
                                </div>
                            </div>

                            <p className="text-xs text-center text-gray-400">
                                By booking, you agree to our Terms & Privacy Policy.
                            </p>
                        {/* </CardContent> */}
                    </Card>
                </div>
            </section>
        </>
    );
};

export default Consultation;
