import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import DoctorApplicationForm from "../application-form/DoctorApplicationForm"; // your form

export default function DoctorApplyCTA() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CTA BANNER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full py-6 px-4"
            >
                <div className="max-w-5xl mx-auto bg-blue-50 rounded-3xl shadow-sm border border-blue-100 px-8 py-6 flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                        Ready to grow your practice with PureCheckup?
                    </h3>

                    <button
                        onClick={() => setOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-xl shadow-md"
                    >
                        Apply Now
                    </button>
                </div>
            </motion.div>

            {/* MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                    >
                        {/* MODAL CONTENT */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-xl relative"
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>

                            {/* FORM */}
                            <DoctorApplicationForm />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
