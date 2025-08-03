import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: 'What is PureCheckup.com?',
    answer: (
      <>
        PureCheckup is a next-generation healthtech startup dedicated to transforming surgical care in India. As a patient-first platform, we connect individuals with top-rated hospitals and expert surgeons to deliver safe, minimally invasive, and insurance-covered surgeries.
      </>
    ),
  },
  {
    question: 'What types of conditions and surgeries does PureCheckup offer?',
    answer: (
      <ul className="list-disc list-inside space-y-1 pl-4">
        <li><strong>Proctology:</strong> Laser treatment for piles, fissures, fistula, and pilonidal sinus</li>
        <li><strong>Laparoscopy:</strong> Gallbladder removal, hernia repair, appendix surgery</li>
        <li><strong>Urology:</strong> Kidney stone removal, prostate surgery, circumcision</li>
        <li><strong>Gynecology:</strong> PCOS, ovarian cysts, fibroids, hysterectomy</li>
        <li><strong>Aesthetics:</strong> Scar revision, skin tightening, body contouring</li>
        <li><strong>Plastic Surgery:</strong> Cosmetic and reconstructive procedures like rhinoplasty and liposuction</li>
      </ul>
    ),
  },
  {
    question: 'Where is PureCheckup available?',
    answer: 'We currently serve Jaipur, Ahmedabad, Indore, Vadodara, Bhopal, and other cities — with more launching soon.',
  },
  {
    question: 'Are the surgeries covered under insurance?',
    answer: (
      <>
        Yes. Most surgeries are insurance-covered. We handle:
        <ul className="list-disc list-inside pl-4 mt-1">
          <li>Pre-authorization</li>
          <li>Documentation</li>
          <li>Cashless approvals</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do I book a free consultation with PureCheckup?',
    answer: 'Simply fill out the form on our website or call our helpline. A Care Coordinator will assist you immediately.',
  },
  {
    question: 'How fast is the recovery after surgery?',
    answer: 'Most patients recover in 2–5 days depending on the procedure — thanks to minimally invasive techniques.',
  },
  {
    question: 'What post-surgery care will I receive?',
    answer: (
      <ul className="list-disc list-inside pl-4">
        <li>Free follow-ups</li>
        <li>Personalized diet & recovery plans</li>
        <li>Regular healing check-ins</li>
      </ul>
    ),
  },
  {
    question: 'Who will support me throughout the process?',
    answer: 'Your dedicated Care Coordinator helps from the first call to final recovery, managing doctors, insurance, transport, and follow-ups.',
  },
  {
    question: 'Is my health data secure with PureCheckup?',
    answer: 'Yes, we follow strict healthcare privacy protocols. Your information is 100% safe and confidential.',
  },
  {
    question: 'What makes PureCheckup different from other healthcare providers?',
    answer: (
      <ul className="list-disc list-inside pl-4">
        <li><strong>Startup Innovation:</strong> Modern, tech-first patient experience</li>
        <li><strong>Top Hospital Partners:</strong> NABH-accredited institutions</li>
        <li><strong>Advanced Surgery:</strong> Laser/laparoscopic procedures for quicker recovery</li>
        <li><strong>Insurance Assistance:</strong> We handle everything, end-to-end</li>
        <li><strong>Dedicated Coordinators:</strong> Personal support at every step</li>
        <li><strong>Transparency:</strong> No hidden costs, full clarity</li>
        <li><strong>Multi-City Reach:</strong> Serving 10+ cities and growing</li>
      </ul>
    ),
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Most Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 font-semibold text-gray-700 text-left hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <span className="text-orange-500 text-sm">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-600 border-t bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
