import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cities } from '@/constants/data';

const PresenceAndValues = () => {


    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Mission",
            description: "Deliver accessible, preventive healthcare that feels personal and proactive."
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Vision",
            description: "A world where checkups are effortless and outcomes predictably better."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Values",
            description: "Compassion, transparency, data-driven care, and continuous improvement."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto space-y-20">
            {/* Where we operate Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-teal-50/50 rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center overflow-hidden"
            >
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Where we operate</h2>
                        <p className="text-[var(--text-secondary)] text-lg">
                            Available across major Indian cities with telehealth nationwide.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {cities.map((city, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-[var(--text-secondary)] text-sm font-medium cursor-default transition-colors border border-teal-100"
                            >
                                <MapPin className="w-4 h-4 text-teal-600" />
                                {city}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-[var(--text-secondary)] pt-4 border-t border-teal-100/50">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                        <span className="font-medium">Same-day availability in select cities</span>
                    </div>
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                    {/* Placeholder for map image - using a generic map-like pattern or image */}
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3"
                        alt="Map of operations"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50/20 to-transparent pointer-events-none"></div>
                </motion.div>
            </motion.div>

            {/* Mission, Vision, Values Section */}
            <div className="space-y-12">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
                >
                    Mission, Vision, Values
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {values.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-none shadow-sm bg-teal-50/30 hover:bg-teal-50/60 transition-colors duration-300">
                                <CardContent className="p-8 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[var(--text-primary)]">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                                    </div>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PresenceAndValues;
