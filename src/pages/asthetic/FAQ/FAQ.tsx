const FAQ = () => {
    const faqs = [
      {
        id: "one",
        question: "What is aesthetic (cosmetic) surgery?",
        answer:
          "Aesthetic surgery focuses on improving appearance through elective procedures such as facelifts, rhinoplasty, liposuction, and breast augmentation.",
      },
      {
        id: "two",
        question: "Am I a good candidate for aesthetic surgery?",
        answer:
          "If you are healthy, have realistic expectations, and want to enhance specific features of your body or face, you may be a suitable candidate.",
      },
      {
        id: "three",
        question: "Is aesthetic surgery safe?",
        answer:
          "Yes, when performed by qualified surgeons with modern techniques, aesthetic surgery is generally safe. Risks exist, but they are minimized with proper care.",
      },
      {
        id: "four",
        question: "Will I have scars after surgery?",
        answer:
          "Most procedures leave minimal or hidden scars. Surgeons use advanced methods to make them as unnoticeable as possible.",
      },
      {
        id: "five",
        question: "How long does recovery take?",
        answer:
          "Recovery depends on the procedure—minor treatments may take a few days, while major surgeries may require a few weeks.",
      },
      {
        id: "six",
        question: "Are the results permanent?",
        answer:
          "Many results are long-lasting, but natural aging, lifestyle, and body changes can affect outcomes over time.",
      },
      {
        id: "seven",
        question: "Is the procedure painful?",
        answer:
          "Discomfort is managed with anesthesia and post-surgery medication. Most patients report only mild, temporary pain.",
      },
      {
        id: "eight",
        question: "How much does aesthetic surgery cost?",
        answer:
          "Costs vary depending on the procedure and surgeon. At PureCheckup, we offer transparent and affordable pricing.",
      },
      {
        id: "nine",
        question: "Are there non-surgical alternatives?",
        answer:
          "Yes. Treatments like fillers, Botox, chemical peels, and laser therapy are non-surgical options for enhancement.",
      },
      {
        id: "ten",
        question: "How to book an appointment with PureCheckup Aesthetic surgeons?",
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
        id: "eleven",
        question: "Why choose PureCheckup.com for Aesthetic Care?",
        answer:
          "Because we provide expert cosmetic specialists, advanced technology, NABH-accredited hospitals, insurance support, EMI options, and free consultations – ensuring safe, effective, and hassle-free aesthetic treatments.",
      },
      {
        id: "twelve",
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
  