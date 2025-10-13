interface FAQProps {
    city: string;
  }
  
  const FAQ: React.FC<FAQProps> = ({ city }) => {
    const faqs = [
      {
        id: "one",
        question: `What is the cost of rectal prolapse surgery in ${city}?`,
        answer: (
          <div className="text-(--text-primary) font-medium space-y-2">
            <p>
              The cost of rectal prolapse surgery in {city} at PureCheckup depends on the
              severity and type of prolapse. Laparoscopic rectal prolapse surgery is minimally
              invasive, safe, and effective, with EMI support available for convenience.
            </p>
            <p>
              Call us now at <strong>+91-9211930749</strong> to know your personalized cost estimate.
            </p>
          </div>
        ),
      },
      {
        id: "two",
        question: `Who is the best doctor for rectal prolapse surgery in ${city}?`,
        answer: (
          <div className="text-(--text-primary) font-medium space-y-2">
            <p>
              PureCheckup connects you with expert colorectal and proctology surgeons in {city},
              including specialists in laparoscopic rectal prolapse surgery with high success rates.
            </p>
            <p>
              Book your consultation today – Call <strong>+91-9211930749</strong>
            </p>
          </div>
        ),
      },
      {
        id: "three",
        question: `Is laparoscopic rectal prolapse surgery available in ${city} at PureCheckup?`,
        answer: (
          <div className="text-(--text-primary) font-medium space-y-2">
            <p>
              Yes, PureCheckup offers advanced laparoscopic rectal prolapse surgery in {city}.
              The procedure is minimally invasive, reduces pain and scarring, and ensures faster
              recovery compared to open surgery.
            </p>
            <p>
              To confirm your eligibility, call <strong>+91-9211930749</strong>.
            </p>
          </div>
        ),
      },
      {
        id: "four",
        question: `How long does it take to recover after rectal prolapse surgery in ${city}?`,
        answer: (
          <div className="text-(--text-primary) font-medium space-y-2">
            <p>
              After laparoscopic rectal prolapse surgery, most patients resume normal activities
              within 2–4 weeks. A short hospital stay of 2–4 days is usually required.
            </p>
            <p>
              For a free recovery consultation, call <strong>+91-9211930749</strong>.
            </p>
          </div>
        ),
      },
      {
        id: "five",
        question: `Why choose PureCheckup for rectal prolapse surgery in ${city}?`,
        answer: (
          <div className="text-(--text-primary) font-medium space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Expert laparoscopic rectal prolapse surgeons</li>
              <li>Minimally invasive procedures with faster recovery</li>
              <li>Reduced pain, scarring, and hospital stay</li>
              <li>Insurance support & EMI options available</li>
              <li>Comprehensive pre- and post-operative care</li>
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
  