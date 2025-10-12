interface FAQProps {
  city: string;
}

const FAQ: React.FC<FAQProps> = ({ city }) => {
  const faqs = [
    {
      id: "one",
      question: `What is the cost of fistula surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            The cost of fistula surgery in {city} at PureCheckup depends on the
            severity and type of treatment recommended. Laser fistula surgery is
            a painless, minimally invasive, and highly effective option offered
            at affordable prices with EMI support.
          </p>
          <p>
            Call us now at <strong>+91-9211930749</strong> to know your
            personalized cost estimate.
          </p>
        </div>
      ),
    },
    {
      id: "two",
      question: `Who is the best doctor for fistula surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            PureCheckup connects you with experienced colorectal and
            proctology specialists in {city}, including Dr. Tanmay Jain, who are
            experts in performing advanced laser fistula surgeries with high
            success rates.
          </p>
          <p>
            Book your consultation today – Call{" "}
            <strong>+91-9211930749</strong>
          </p>
        </div>
      ),
    },
    {
      id: "three",
      question: `Is laser fistula surgery available in ${city} at PureCheckup?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            Yes, PureCheckup provides advanced laser-assisted fistula surgery in{" "}
            {city}. The procedure is safe, bloodless, and ensures faster healing
            compared to traditional open surgery.
          </p>
          <p>
            To confirm your eligibility, call{" "}
            <strong>+91-9211930749</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "four",
      question: `How long does it take to recover after fistula surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>
            With laser fistula surgery, most patients resume their normal
            activities within 2–3 days. The complete healing process usually
            takes 2–4 weeks, depending on the condition.
          </p>
          <p>
            For a free recovery consultation, call{" "}
            <strong>+91-9211930749</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "five",
      question: `Why choose PureCheckup for fistula surgery in ${city}?`,
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>100% advanced laser-assisted treatments</li>
            <li>Experienced colorectal & proctology surgeons</li>
            <li>NABH-accredited hospitals and hygiene-first care</li>
            <li>Insurance assistance & EMI options available</li>
            <li>Free consultation and dedicated post-surgery care</li>
          </ul>
          <p>
            📞 For more details, call <strong>+91-9211930749</strong>
          </p>
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
