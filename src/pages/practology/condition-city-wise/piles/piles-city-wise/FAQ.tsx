interface FAQProps {
  city: string;
}

const FAQ: React.FC<FAQProps> = ({ city }) => {
  const faqs = [
    {
      id: "one",
      question: `What is the cost of piles surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            The cost of piles surgery in {city} at PureCheckup depends on the severity of the condition and the type of treatment chosen. Laser surgery is usually more effective and minimally invasive, with affordable EMI options available.
          </p>
          <p>Call us now at <strong>+91-9211930749</strong> to know the exact cost.</p>
        </div>
      ),
    },
    {
      id: "two",
      question: `Who is the best doctor for piles surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            PureCheckup connects you with experienced and highly qualified proctologists in {city}, including Dr. Tanmay Jain, who specialize in advanced piles treatment.
          </p>
          <p>Book your consultation today – Call <strong>+91-9211930749</strong></p>
        </div>
      ),
    },
    {
      id: "three",
      question: `Is laser piles surgery available in ${city} at PureCheckup?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            Yes, PureCheckup offers advanced laser piles surgery in {city}, which is painless, minimally invasive, and ensures faster recovery compared to traditional surgery.
          </p>
          <p>To confirm your eligibility for laser surgery, call <strong>+91-9211930749</strong></p>
        </div>
      ),
    },
    {
      id: "four",
      question: `How long does it take to recover after piles surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            With laser piles surgery at PureCheckup, recovery usually takes just 1–2 days, allowing patients to resume their daily routine quickly.
          </p>
          <p>Call us at <strong>+91-9211930749</strong> for a free recovery consultation.</p>
        </div>
      ),
    },
    {
      id: "five",
      question: `Why choose PureCheckup for piles surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>100% advanced laser-assisted treatments</li>
            <li>Experienced proctologists</li>
            <li>NABH-accredited hospitals</li>
            <li>Complete insurance support & EMI options</li>
            <li>Free consultation and end-to-end care</li>
          </ul>
          <p>📞 For more details, call <strong>+91-9211930749</strong></p>
        </div>
      ),
    },
  ];

  return (
    <div className="hs-accordion-group mx-auto max-w-5xl mt-8">
      {faqs.map(({ id, question, answer }) => (
        <div
          key={id}
          className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl my-2"
          id={`hs-destroy-heading-${id}`}
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500"
            aria-expanded="false"
            aria-controls={`hs-destroy-collapse-${id}`}
          >
            {question}
            <svg
              className="hs-accordion-active:hidden block size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg
              className="hs-accordion-active:block hidden size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <div
            id={`hs-destroy-collapse-${id}`}
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <div className="pb-4 px-5">{answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
