import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Award, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from './Hero';
import PresenceAndValues from './presence-values/PresenceAndValues';
import Consultation from './consultation/Consultation';
import { FAQ, SEO } from '@/components';
import { AppointForm } from '@/components';
import { useState } from 'react';
import SettingStandards from './setting-standards/SettingStandard';
import ExcellenceSection from './excellence-section/ExcellenceSection';
const AboutUs = () => {
    const [open, setOpen] = useState(false)
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

    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Preventive Care",
            description: "Early detection pathways and proactive testing."
        },
        {
            icon: <Users className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Patient Centric",
            description: "We arrange end-to-end options where needed."
        },
        {
            icon: <Clock className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Privacy by Design",
            description: "HIPAA compliant data handling and consent."
        },
        {
            icon: <Award className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Top Doctors",
            description: "Curated network of best NABH specialists."
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Insight driven",
            description: "Fact-based, clear instructions, proactive reminders."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-[var(--primary-bg-color)]" />,
            title: "Transparent Pricing",
            description: "No surprise—we cost before you book."
        }
    ];

    const faqs = [
        {
            id: "one",
            question: "What is PureCheckup?",
            answer:
                "PureCheckup is a next-generation HealthTech platform that connects patients with NABH-accredited hospitals and experienced surgeons for safe, advanced, and insurance-covered surgeries. We provide end-to-end assistance — from doctor selection and hospital admission to EMI and post-surgery care.\n📞 For more details, call us at 9211930749."
        },
        {
            id: "two",
            question: "How is PureCheckup different from other healthcare platforms?",
            answer:
                "Unlike traditional healthcare websites, PureCheckup offers a complete surgical journey under one roof — powered by AI-based doctor recommendations, no-cost EMI, cashless insurance, and personal care coordinators to assist you at every step.\n📞 Need help choosing the right doctor? Call us at 9211930749."
        },
        {
            id: "three",
            question: "Does PureCheckup provide EMI or insurance support?",
            answer:
                "Yes, we provide no-cost EMI and complete insurance assistance for all types of surgeries. Our expert team ensures a hassle-free claim process with zero paperwork stress.\n📞 To check your eligibility, call us now at 9211930749."
        },
        {
            id: "four",
            question: "Are the hospitals and doctors associated with PureCheckup verified?",
            answer:
                "Absolutely. We only partner with NABH-accredited hospitals and experienced surgeons who maintain the highest standards of medical excellence and patient safety.\n📞 To connect with a verified doctor, call 9211930749."
        },
        {
            id: "five",
            question: "In which cities does PureCheckup currently operate?",
            answer:
                "We are currently available in Ahmedabad, Indore, Jaipur, Bhopal, Vadodara, Gurgaon, Delhi, Noida, Kanpur, Lucknow, Meerut, and Mumbai, with plans to expand to more cities across India soon.\n📞 Book your surgery consultation in your city — call 9211930749."
        },
        {
            id: "six",
            question: "What types of surgeries can I book through PureCheckup?",
            answer:
                "We offer a wide range of surgeries, including Proctology, Urology, Gynecology, Laparoscopy, and Cosmetic Surgeries, using laser and minimally invasive technologies for quick recovery and better results.\n📞 To know more about available surgeries, call 9211930749."
        },
        {
            id: "seven",
            question: "How can I book a surgery or consultation?",
            answer:
                "You can easily book a free consultation by visiting our website www.purecheckup.com or calling our support team. Our dedicated coordinators will guide you through diagnosis, documentation, and discharge.\n📞 Book your free consultation now: 9211930749."
        },
        {
            id: "eight",
            question: "Does PureCheckup charge patients for using its platform?",
            answer:
                "No, PureCheckup is completely free for patients. You pay only for your surgery at the hospital, and we ensure transparent pricing with no hidden charges.\n📞 To get a free quote, call 9211930749."
        },
        {
            id: "nine",
            question: "Is PureCheckup safe and reliable?",
            answer:
                "Yes, PureCheckup follows strict data privacy policies and collaborates only with trusted healthcare institutions that meet NABH quality standards.\n📞 For trusted healthcare support, call 9211930749."
        },
        {
            id: "ten",
            question: "What is the long-term vision of PureCheckup?",
            answer:
                "Our vision is to become India’s most trusted surgical care platform, ensuring accessible, transparent, and affordable healthcare for everyone from metro cities to Tier-3 towns.\n📞 For partnership or patient support, reach us at 9211930749."
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--primary-bg-background-color)] overflow-hidden">
            {/* Hero Section */}
            <SEO page='aboutUs'/>
            <Hero />
            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--primary-bg-color)] py-12 text-white"
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Happy Patients", value: "10k+" },
                        { label: "Expert Doctors", value: "500+" },
                        { label: "Cities", value: "12+" },
                        { label: "Surgeries", value: "50+" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="space-y-2"
                        >
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Mission Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[var(--primary-bg-color)] font-semibold tracking-wider uppercase"
                    >
                        Trusted Healthcare
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2"
                    >
                        Excellence. Innovation. Care.
                    </motion.h2>
                    <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
                        PureCheckup connects you with expert doctors for timely checkups and tailored care. Transparent, accessible, and human-first healthcare.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/20">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">About PureCheckup</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                We use technology enabled care platform simplifying preventive health and specialty consultations. From symptom check to post-visit follow up, we streamline every step so you can focus on feeling better.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[var(--primary-bg-light-blue)] rounded-lg text-[var(--primary-bg-color)]">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-primary)]">Certified Doctors</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">Board-certified, intensely background checked.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[var(--primary-bg-light-blue)] rounded-lg text-[var(--primary-bg-color)]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-primary)]">Same-Day Care</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">Book in minutes. Get care when you actually need it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3"
                            alt="Healthcare Technology"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-20 px-4 bg-white/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">What sets us apart</h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm hover:bg-white/90">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="p-3 w-fit rounded-xl bg-[var(--primary-bg-light-blue)]/50">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{feature.title}</h3>
                                        <p className="text-[var(--text-secondary)]">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <SettingStandards />
            </section>

            <ExcellenceSection />

            <PresenceAndValues />

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-[var(--dark-blue-color)] to-[var(--primary-bg-color)] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">Ready to talk?</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                            Your journey to better health starts here. Easy to access, easy to understand, and easy to trust.
                        </p>
                        <Button onClick={() => setOpen(true)} className="bg-white text-[var(--primary-bg-color)] hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
                            Consultation details
                        </Button>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            <section className='px-4'>
                <FAQ faqs={faqs} />
            </section>

            <Consultation />
            <AppointForm open={open} setOpen={setOpen} />
        </div>
    );
};

export default AboutUs;
