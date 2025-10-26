import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeartPulse, ShieldCheck, FileCheck, HeadphonesIcon } from "lucide-react"
import ContactAdvisorModal from "../contact-advisor/ContactAdvisorModal";

export const faqs = [
  {
    id: "one",
    question: "What is PureCheckup?",
    answer:
      "PureCheckup is a trusted healthcare platform in India that helps patients get advanced surgeries across reputed hospitals. We also assist patients in claiming their health insurance benefits to make their treatment process smooth and stress-free.",
  },
  {
    id: "two",
    question: "What types of surgeries does PureCheckup provide?",
    answer:
      "We provide major and minor surgeries across multiple specialties including Urology, Gynecology, Proctology, Laparoscopy, Aesthetics, ENT, and Orthopedics. All surgeries are performed by expert doctors at top-rated hospitals in India.",
  },
  {
    id: "three",
    question: "Does PureCheckup accept all health insurance plans?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>
          ✅ Yes, PureCheckup accepts all major health insurance plans in India — both
          private and government schemes. Whether you have a cashless plan or a
          reimbursement-based policy, our insurance team helps you with complete claim
          processing.
        </p>
      </div>
    ),
  },
  {
    id: "four",
    question: "Can I get cashless surgery through my health insurance plan?",
    answer:
      "Yes. If your insurance provider supports cashless hospitalization, our team coordinates directly with the hospital and insurer to get your surgery approved without you having to pay upfront.",
  },
  {
    id: "five",
    question: "How does PureCheckup help in health insurance claim processing?",
    answer:
      "We have a dedicated insurance support team that handles the entire claim process for you — from document verification, pre-authorization, and coordination with TPA/insurance companies to final claim settlement.",
  },
  {
    id: "six",
    question: "I already have health insurance. Can I still book my surgery through PureCheckup?",
    answer:
      "Absolutely! If you already have a valid health insurance plan, PureCheckup ensures that your surgery is covered under your plan and assists you in claiming the maximum possible benefits.",
  },
  {
    id: "seven",
    question: "How do I book my surgery with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking your surgery with PureCheckup is simple and convenient:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit our official website – PureCheckup.com</li>
          <li>Fill out the consultation or callback form</li>
          <li>Our care team will contact you to schedule an appointment</li>
          <li>We guide you through consultation, diagnosis, and insurance coordination</li>
        </ul>
      </div>
    ),
  },
  {
    id: "eight",
    question: "What are the benefits of choosing PureCheckup for surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-1">
        <ul className="list-disc list-inside space-y-1">
          <li>Expert & verified surgeons</li>
          <li>Cashless insurance claim assistance</li>
          <li>No hidden charges</li>
          <li>Free pre-surgery consultation</li>
          <li>24/7 patient care support</li>
          <li>Quick discharge and recovery guidance</li>
        </ul>
      </div>
    ),
  },
  {
    id: "nine",
    question: "Do I need to pay anything before the insurance claim is approved?",
    answer:
      "If you’re eligible for a cashless claim, you don’t need to pay anything upfront. However, if your policy supports reimbursement, we guide you through the documentation so you can get your money refunded quickly.",
  },
  {
    id: "ten",
    question: "Which cities does PureCheckup operate in?",
    answer:
      "PureCheckup currently offers surgery and insurance claim services across major Indian cities including Delhi, Gurgaon, Mumbai, Pune, Bangalore, Hyderabad, Chennai, Jaipur, Lucknow, and more.",
  },
  {
    id: "eleven",
    question: "How long does it take for a health insurance claim to be approved?",
    answer:
      "Most cashless claims are approved within 2 to 6 hours, depending on your insurance provider. For reimbursement claims, it usually takes 5–10 working days after submitting all required documents.",
  },
  {
    id: "twelve",
    question: "What if my health insurance does not cover the surgery?",
    answer:
      "If your insurance does not cover a particular procedure, our team will help you with affordable EMI options or discounted packages from our partner hospitals.",
  },
  {
    id: "thirteen",
    question: "Are PureCheckup’s services available 24/7?",
    answer:
      "Yes, our support team is available 24×7 to assist you with insurance verification, doctor consultations, and emergency surgery bookings.",
  },
  {
    id: "fourteen",
    question: "Is PureCheckup free to use?",
    answer:
      "Yes! There are no extra service charges for using PureCheckup. We help you connect with the best hospitals and doctors, and our insurance claim assistance is completely free of cost.",
  },
  {
    id: "fifteen",
    question: "How can I contact PureCheckup for surgery or insurance claim support?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-1">
        <p>You can reach us at:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>📞 [Add your helpline number here]</li>
          <li>📧 [Add support email here]</li>
          <li>🌐 Visit: https://purecheckup.com</li>
        </ul>
      </div>
    ),
  },
];

const plans = [
    {
      name: "Basic Care Plan",
    //   price: "₹2,499/year",
      description:
        "An affordable starter plan that covers essential hospitalization costs, day-care treatments, and emergency ambulance services.",
      highlights: [
        "Coverage up to ₹2 lakh",
        "Includes OPD & diagnostics benefits",
        "Cashless facility at 5000+ hospitals",
      ],
    },
    {
      name: "Family Plus Plan",
    //   price: "₹5,999/year",
      description:
        "Designed for families who want comprehensive protection under a single policy. Covers parents, spouse, and children.",
      highlights: [
        "Coverage up to ₹5 lakh (family floater)",
        "Critical illness & maternity benefits",
        "No-claim bonus on renewals",
      ],
    },
    {
      name: "Premium Shield Plan",
    //   price: "₹9,999/year",
      description:
        "Our top-tier plan with extensive coverage and premium benefits for high-value protection and peace of mind.",
      highlights: [
        "Coverage up to ₹10 lakh or more",
        "Worldwide treatment coverage",
        "Zero-claim bonus + wellness rewards",
      ],
    },
]

export default function HealthInsurance() {
  return (
    <div className="min-h-screen bg-(--primary-bg-light-blue) text-(--text-primary)">
      {/* Hero Section */}
      <section className="bg-(--dark-blue-color) text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Comprehensive Health Insurance Plans</h1>
        <p className="text-lg text-(--text-light) max-w-2xl mx-auto mb-8">
          Protect your family’s health and finances with our trusted, hassle-free medical coverage.
        </p>
         <ContactAdvisorModal text="Get a Free Quote" className="rounded-full" />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Our Health Insurance?</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { icon: ShieldCheck, title: "Cashless Treatment", desc: "Seamless cashless claims across 5000+ hospitals." },
            { icon: HeartPulse, title: "Comprehensive Coverage", desc: "Covers hospitalization, critical illness & maternity." },
            { icon: FileCheck, title: "Easy Claims", desc: "Quick & transparent claim process with minimal paperwork." },
            { icon: HeadphonesIcon, title: "24/7 Support", desc: "Dedicated insurance helpline for all policyholders." },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon className="w-10 h-10 text-(--primary-bg-color) mb-4" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-(--text-secondary)">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans Section */}
     <section className="py-16 px-6 bg-(--primary-bg-background-color)">
      <h2 className="text-3xl font-semibold text-center mb-10 text-(--text-primary)">
        Our Health Insurance Plans
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {plans.map((plan:any) => (
          <div
            key={plan.name}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-(--sidebar-border-color)"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-(--text-primary)">
                  {plan.name}
                </h3>
                <p className="text-(--primary-bg-color) font-bold mt-1">
                  {plan?.price || ""}
                </p>
              </div>
              <div className="md:text-right">
                {/* Using Modal Button Here */}
                <ContactAdvisorModal text="Contact Advisor" className="" />
              </div>
            </div>

            <p className="text-(--text-secondary) mt-4">{plan.description}</p>

            <ul className="list-disc list-inside mt-4 text-(--text-secondary) space-y-1">
              {plan.highlights.map((point:any, index:number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem value={faq.id}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-(--text-secondary)">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-(--dark-blue-color) text-white py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Need Help Choosing the Right Plan?</h3>
        <p className="text-(--text-light) mb-6">Talk to our insurance advisor today — we’ll guide you through every step.</p>
        <ContactAdvisorModal text="Get a Free Quote" className=""/>
      </footer>
    </div>
  )
}
