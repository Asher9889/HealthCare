import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AppointForm from '@/components/book-appointment-form/AppointForm';

const Hero = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
                        Your Trusted Partner for <span className="text-[var(--orange-button-color)]">Safe and Affordable</span> Surgeries in India
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Experience seamless care from finest NABH-accredited hospitals. Expert surgeons, zero-cost EMI options for all major surgeries.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => setOpen(true)} className="bg-[var(--primary-bg-color)] hover:bg-[var(--sidebar-active-bg)] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Book Free Consultation
                        </Button>
                        {/* <Button variant="outline" className="border-[var(--primary-bg-color)] text-[var(--primary-bg-color)] hover:bg-[var(--primary-bg-light-blue)] text-lg px-8 py-6 rounded-full">
                            Explore Treatments
                        </Button> */}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.009] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091&ixlib=rb-4.0.3"
                            alt="Medical Team"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary-bg-color)]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--orange-button-color)]/10 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
            <AppointForm open={open} setOpen={setOpen} />
        </section>
    );
};

export default Hero;
