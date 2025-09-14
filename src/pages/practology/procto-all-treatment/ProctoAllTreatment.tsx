import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppointForm, CallNow, Heading } from "@/components"

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)


  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center text-left font-semibold text-lg hover:text-primary transition"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-700 space-y-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProctologyTreatments() {
  const [showMore, setShowMore] = useState(false)
  const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close


  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-primary"
      >
        <Heading text1="Proctology Treatments at" text2="PureCheckup" />
      </motion.div>

      {/* Intro with read more */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative text-(--dark-blue-color) leading-relaxed"
      >
        <p className={`${!showMore ? "line-clamp-2" : ""}`}>
          Proctology is a specialized branch of medicine that focuses on diagnosing and treating
          conditions affecting the rectum, anus, and colon. Disorders like piles, anal fissures,
          anal fistula, pilonidal sinus, and rectal prolapse are common but often ignored due to
          embarrassment or lack of awareness. If left untreated, they may lead to complications and
          severely affect a person’s quality of life. At PureCheckup.com, we provide advanced and
          minimally invasive proctology treatments backed by modern technology, expert surgeons, and
          a patient-first approach. Our focus is on safe, effective, and pain-free solutions with
          long-lasting relief.
        </p>
        <button
          className="mt-2 text-(--dark-blue-color) font-medium hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read less" : "Read more"}
        </button>
      </motion.div>

      {/* Why Choose Us */}
      <Section title="Why Choose Proctology Care at PureCheckup.com?">
        <ul className="list-disc list-inside space-y-2">
          <li>15+ years of combined medical expertise</li>
          <li>Skilled surgeons specializing in piles, fissure, fistula, sinus, prolapse treatment</li>
          <li>Advanced laser and minimally invasive procedures</li>
          <li>Affordable packages with transparent pricing</li>
          <li>Complete post-surgery care & follow-ups</li>
          <li>PAN-India hospital & clinic network</li>
          <li>24x7 patient support</li>
        </ul>
        <Button
          size="lg"
          className="mt-4 bg-gradient-to-r from-primary to-purple-600 text-white"
        >
          <Phone className="w-5 h-5 mr-2" /> Call us: 9211930749
        </Button>
      </Section>

      {/* Conditions */}
      <Section title="Common Proctology Conditions We Treat">
        <div className="space-y-4">
          <Section title="1. Piles (Hemorrhoids) Treatment">
            <p>Causes: Chronic constipation, pregnancy, sedentary lifestyle, obesity.</p>
            <p>Symptoms: Bleeding, lump near anus, pain, itching.</p>
            <p>Treatment: Lifestyle changes, medicines, Laser piles surgery.</p>
          </Section>
          <Section title="2. Anal Fissure Treatment">
            <p>Causes: Hard stools, constipation, low-fiber diet.</p>
            <p>Symptoms: Severe pain, bleeding, burning, spasms.</p>
            <p>Treatment: Medications, ointments, Laser sphincterotomy.</p>
          </Section>
          <Section title="3. Anal Fistula Treatment">
            <p>Causes: Chronic infection, abscess, Crohn’s disease.</p>
            <p>Symptoms: Pus discharge, pain, recurrent abscesses.</p>
            <p>Treatment: Laser Fistula Surgery, LIFT, VAAFT.</p>
          </Section>
          <Section title="4. Pilonidal Sinus Treatment">
            <p>Causes: Ingrown hair, sitting long hours, poor hygiene.</p>
            <p>Symptoms: Pain near tailbone, pus/blood discharge.</p>
            <p>Treatment: Laser sinus treatment, preventive care.</p>
          </Section>
          <Section title="5. Rectal Prolapse Treatment">
            <p>Causes: Weak pelvic muscles, aging, straining.</p>
            <p>Symptoms: Rectum protrusion, bleeding, incontinence.</p>
            <p>Treatment: Lifestyle changes, advanced surgery.</p>
          </Section>
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Benefits of Choosing Laser & Advanced Treatments">
        <ul className="list-disc list-inside space-y-2">
          <li>Painless procedures</li>
          <li>Same-day discharge</li>
          <li>Faster recovery</li>
          <li>Lower recurrence rate</li>
          <li>No long hospital stays</li>
          <li>No-Cost EMI options</li>
          <li>Insurance support</li>
        </ul>
      </Section>

      {/* CTA */}
      <motion.div
        className="flex flex-col items-center gap-3 p-6 bg-(--dark-blue-color) text-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold">Book Your Appointment</h2>
        <p>Don’t wait — take the first step towards a pain-free life.</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <Button size="lg" className="border border-white rounded px-4 py-2 font-semibold hover:scale-[0.99]  transition text-sm md:text-base  bg-(--dark-blue-color) disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
            onClick={() => setAppointmentOpen(true)}
          >

            <Calendar className="w-5 h-5 mr-2" /> Book Free Appointment
          </Button>
          <CallNow />
          {appointmentOpen && (
            <AppointForm />
          )}
        </div>
      </motion.div>
    </div>
  )
}
