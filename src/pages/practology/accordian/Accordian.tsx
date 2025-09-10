
const Accordian = () => {
  const faqs = [
    {
      id: "one",
      question: "What is Proctology?",
      answer: `Proctology is a branch of medicine that deals with the diagnosis and treatment of conditions affecting the rectum, anus, and colon. Common issues treated by proctologists include piles (hemorrhoids), anal fissures, fistula, pilonidal sinus, colorectal polyps, and related disorders.`,
    },
    {
      id: "two",
      question: "What diseases does a proctologist treat?",
      answer: (
        <ul className="list-disc list-inside space-y-1 text-(--text-primary) font-medium">
          <p>A proctologist treats diseases related to the lower digestive tract, such as:</p>
          <li>Hemorrhoids (Piles)</li>
          <li>Anal Fissures</li>
          <li>Fistula-in-Ano</li>
          <li>Pilonidal Sinus</li>
          <li>Anal Abscesses</li>
          <li>Rectal Prolapse</li>
          <li>Colorectal Polyps</li>
          <li>IBD-related Anal Conditions</li>
        </ul>
      ),
    },
    {
      id: "three",
      question: "How to book an appointment with PureCheckup surgeons?",
      answer: (
        <ul className="list-decimal list-inside text-(--text-primary) font-medium">
          <p>To book an appointment with a PureCheckup surgeon, follow these simple steps:</p>
          <li>Visit PureCheckup.com</li>
          <li>Click on “Book Free Consultation”</li>
          <li>Fill out your basic details</li>
          <li>Choose your preferred city and time slot</li>
          <li>
            A care coordinator will confirm your appointment via call or
            WhatsApp
          </li>
          <li>
            Alternatively, call our helpline at{" "}
            <span className="font-semibold">+91-9211930749</span>
          </li>
        </ul>
      ),
    },
    {
      id: "four",
      question: "Can a woman consult a proctologist?",
      answer: `Yes, women can and should consult proctologists for anorectal concerns. At PureCheckup, we prioritize privacy, comfort, and the option of consulting with female specialists or assistants to ensure a smooth and respectful consultation experience.`,
    },
    {
      id: "five",
      question: "Is laser surgery a permanent cure for piles?",
      answer: `Yes, laser surgery for piles offers long-term relief and is considered a highly effective and minimally invasive treatment. It seals blood vessels, causes minimal bleeding, and significantly reduces the chance of recurrence compared to conventional surgery, when combined with lifestyle changes.`,
    },
    {
      id: "six",
      question:
        "Do you offer transportation to and from the hospital for the surgery?",
      answer: `Yes, PureCheckup provides complimentary pickup and drop-off services for surgery day in most major cities. Our care coordinators will schedule a vehicle for your convenience so you can travel stress-free.`,
    },
    {
      id: "seven",
      question: "Does PureCheckup offer insurance coverage?",
      answer: <p className=" text-(--text-primary) font-medium">Yes, <span className="underline text-blue-500">PureCheckup</span> supports insurance. Our team helps you with cashless claims and insurance documentation for eligible patients. We work with major TPAs and insurance providers across India.</p>,
    },
    {
      id: "eight",
      question: "What if I need advice after surgery?",
      answer: (
        <ul className="list-disc list-inside space-y-1  text-(--text-primary) font-medium">
          <p>If you need post-surgery advice, you can:</p>
          <li>Call our 24x7 care helpline</li>
          <li>Chat on WhatsApp with our medical assistant</li>
          <li>
            Book a follow-up call with your surgeon (free within 7 days post-op)
          </li>
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
                <p className=" text-(--text-primary) font-medium">{answer}</p>
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

export default Accordian;
