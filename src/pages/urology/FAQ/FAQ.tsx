const FAQ = () => {
    const faqs = [
      {
        id: "one",
        question: "What does a urologist treat?",
        answer: `A urologist treats conditions related to the urinary tract (kidneys, bladder, ureters, urethra) and the male reproductive system, including kidney stones, prostate issues, UTIs, infertility, and sexual health problems.`,
      },
      {
        id: "two",
        question: "When should I consult a urologist?",
        answer: `You should consult a urologist if you experience symptoms like frequent urination, blood in urine, difficulty urinating, severe back or abdominal pain, prostate-related issues, or recurring urinary infections.`,
      },
      {
        id: "three",
        question: "Are urology treatments painful?",
        answer: `With modern laser and minimally invasive techniques, most urology treatments are safe, cause minimal pain, and ensure faster recovery compared to traditional surgeries.`,
      },
      {
        id: "four",
        question: "How much does urology treatment cost in India?",
        answer: `The cost depends on the type of treatment, hospital, and insurance coverage. At PureCheckup.com, we provide affordable packages with EMI options and full insurance support.`,
      },
      {
        id: "five",
        question: "How to book an appointment with PureCheckup Urology surgeons?",
        answer: (
          <ul className="list-decimal list-inside text-(--text-primary) font-medium">
            <p>To book an appointment with a PureCheckup surgeon, follow these simple steps:</p>
            <li>Visit PureCheckup.com</li>
            <li>Click on “Book Free Consultation”</li>
            <li>Fill out your basic details</li>
            <li>Choose your preferred city and time slot</li>
            <li>A care coordinator will confirm your appointment via call or WhatsApp</li>
            <li>
              Alternatively, call our helpline at{" "}
              <span className="font-semibold">+91-9211930749</span>
            </li>
          </ul>
        ),
      },
      {
        id: "six",
        question: "Why choose PureCheckup.com for urology care?",
        answer: `Because we offer 100% laser-assisted treatments, experienced urologists, NABH-accredited hospitals, complete insurance support, EMI options, and free consultations – ensuring safe, effective, and hassle-free care.`,
      },
      {
        id: "seven",
        question: "What if I need advice after surgery?",
        answer: (
          <ul className="list-disc list-inside space-y-1 text-(--text-primary) font-medium">
            <p>If you need post-surgery advice, you can:</p>
            <li>Call our 24x7 care helpline</li>
            <li>Chat on WhatsApp with our medical assistant</li>
            <li>Book a follow-up call with your surgeon (free within 7 days post-op)</li>
            <p>We provide comprehensive support throughout your recovery journey.</p>
          </ul>
        ),
      },
    ];
  
    return (
      <div className="hs-accordion-group mx-auto max-w-5xl mt-8">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl"
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
              <div className="pb-4 px-5">
                {typeof answer === "string" ? (
                  <p className="text-(--text-primary) font-medium">{answer}</p>
                ) : (
                  answer
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQ;
  