import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import AppointForm from "../book-appointment-form/AppointForm";
import { constantData } from "@/constants";

export type Treatment = {
    id: number;
    title: string;
    description: string;
    downtime: string;
    highlight?: boolean;
    phone?: string;
    // optional route if you want to navigate
    bookUrl?: string;
    icon?: React.ReactNode;
};

export default function TreatmentOptionsCityWise({ treatments }: any ) {
    const [isOpen, setIsOpen] = useState(false);

    function onCall() {
        const number = constantData.supportNumber;
        // opens dialer on mobile, or app on desktop
        window.location.href = `tel:${number}`;
    }

    return (
        <section className="w-full max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-gray-600 mt-1">
                        Explore popular treatments — click <span className="font-semibold">Book</span> to request an appointment or{" "}
                        <span className="font-semibold">Call</span> for immediate help.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {treatments.map((t:any) => (
                    <motion.article
                        key={t.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28, delay: t.id * 0.02 }}
                        className={`border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition ${t.highlight ? "ring-2 ring-blue-100" : ""
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border">
                                {t.icon}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-semibold text-lg text-gray-900">{t.title}</h3>
                                </div>

                                <p className="text-gray-700 mt-2 text-sm">{t.description}</p>

                                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <div className="text-sm text-gray-500">
                                        <span className="font-medium text-gray-700">Downtime:</span>{" "}
                                        {t.downtime}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsOpen(true)}
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm shadow"
                                            aria-label={`Book ${t.title}`}
                                        >
                                            <Calendar className="w-4 h-4" />
                                            Book
                                        </button>

                                        <button
                                            onClick={() => onCall()}
                                            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm hover:shadow"
                                            aria-label={`Call for ${t.title}`}
                                        >
                                            <Phone className="w-4 h-4 text-gray-700" />
                                            Call
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <AppointForm open={isOpen} setOpen={setIsOpen} />
                )}
            </AnimatePresence>
        </section>
    );
}