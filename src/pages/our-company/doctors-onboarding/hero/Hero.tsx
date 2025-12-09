import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import DoctorApplicationForm from "../application-form/DoctorApplicationForm";

export default function Hero() {
    // const [highlight, setHighlight] = useState(false);
    const applyFormRef = useRef<HTMLDivElement>(null);
    // const quickEmiFormConfig = {
    //     heading: "Quick Connect",
    //     focusEmiForm: highlight,
    //     setFocusEmiForm: setHighlight
    // };
    return (
        <section className="w-full py-8">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
                {/* LEFT */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    <motion.span variants={fadeUp} className="w-fit inline-flex items-center gap-2 bg-[var(--primary-bg-color)]/10 text-[var(--dark-blue-color)] px-4 py-2 rounded-full text-sm font-medium">
                        ✦ Grow your practice
                    </motion.span>

                    {/* <div className="inline-flex items-center gap-2 bg-[var(--primary-bg-color)]/10 text-[var(--dark-blue-color)] px-4 py-2 rounded-full text-sm font-medium">
            💙 Easy Medical Financing
          </div> */}

                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                    >
                        Join PureCheckup. See more patients. Do less admin.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-md text-muted-foreground"
                    >
                        Get matched with patients, manage appointments, and receive fast
                        payouts — all in one secure platform built for clinicians.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex gap-3">
                        <Button size="lg" className="bg-[var(--orange-button-color)]">Start Application</Button>
                        <Button size="lg" variant="outline">
                            Explore Specializations
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex items-center gap-4 text-sm text-muted-foreground"
                    >
                        <span>Verified profiles & secure data</span>
                        <span>⏱ 1 min signup</span>
                    </motion.div>
                </motion.div>

                {/* RIGHT FORM SECTION */}
                <motion.div
                    ref={applyFormRef}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10"
                >
                    {/* <QuickDoctorConnect config={quickEmiFormConfig} /> */}
                    <DoctorApplicationForm />
                </motion.div>
            </div>
        </section>
    );
}
