const FAQ = () => {
  const faqs = [
    {
      id: "one",
      question: "What are the common symptoms of piles?",
      answer: (
        <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
          <li>Itching, pain, or discomfort around the anus</li>
          <li>Bright red bleeding after passing stool</li>
          <li>Swelling or lump near the anus</li>
          <li>Mucus discharge or feeling of incomplete bowel movement</li>
        </ul>
      ),
    },
    {
      id: "two",
      question: "How are piles diagnosed?",
      answer: (
        <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
          <li>Visual/physical examination (for external piles)</li>
          <li>Digital rectal exam (for internal piles)</li>
          <li>Proctoscopy/colonoscopy if bleeding persists or other conditions are suspected</li>
        </ul>
      ),
    },
    {
      id: "three",
      question: "What not to eat in piles?",
      answer:
        "Avoid spicy food, oily food, junk food, processed food, alcohol, and excess caffeine as they can worsen piles symptoms.",
    },
    {
      id: "four",
      question: "What are the best home remedies for piles?",
      answer: (
        <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
          <li>Eat high-fiber foods (fruits, vegetables, whole grains)</li>
          <li>Drink at least 8 glasses of water daily</li>
          <li>Use OTC creams (hydrocortisone) or witch hazel pads</li>
          <li>Take warm sitz baths (10–15 minutes, 2–3 times daily)</li>
          <li>Avoid straining during bowel movements</li>
        </ul>
      ),
    },
    {
      id: "five",
      question: "Is laser treatment for piles painful?",
      answer:
        "Laser surgery for piles is usually less painful compared to traditional surgery. Some people may feel slight discomfort, burning, or a pulling sensation afterward, but the pain depends on the technique used by the doctor, the type of anesthesia, and individual pain tolerance.",
    },
    {
      id: "six",
      question: "Will I be discharged the same day?",
      answer:
        "Yes, in many hospitals, laser piles treatment is a day-care procedure, meaning you can be discharged the same day after surgery. However, this depends on the grade of your piles, your overall health, and whether any complications occur during surgery.",
    },
    {
      id: "seven",
      question: "How many days does recovery take?",
      answer: (
        <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
          <li>Most patients can resume daily activities within 1–2 weeks.</li>
          <li>
            Complete recovery may take 2–3 weeks in some cases, especially if the condition was severe or the surgery was extensive.
          </li>
        </ul>
      ),
    },
    {
      id: "eight",
      question: "What is the cost via PureCheckup for piles?",
      answer:
        "Through PureCheckup.com, patients can avail free doctor consultation to understand the best treatment options for piles. The final cost depends on factors like the severity of the condition, the hospital/surgeon’s expertise, the city, and the type of care required.",
    },
    {
      id: "nine",
      question: "Does insurance cover piles treatment?",
      answer:
        "Yes, most health insurance policies cover piles surgery if it is medically required. With PureCheckup.com, you don’t need to worry; we support all major health insurance companies and help you with cashless hospitalization as well as reimbursement claims. Our team guides you through pre-authorization, documentation, and approval so that your treatment journey stays hassle-free.",
    },
    {
      id: "ten",
      question: "Which healthcare service provider provides the best treatment at the best price?",
      answer:
        "PureCheckup.com is the best healthcare service provider that connects you with expert doctors and affordable piles treatment options.",
    },
    {
      id: "eleven",
      question: "How to search the best piles doctor?",
      answer:
        "PureCheckup.com is the best option to book experienced and verified piles specialists.",
    },
    {
      id: "twelve",
      question: "How to book?",
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>Booking piles treatment is simple with PureCheckup.com:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Visit our website</li>
            <li>Select your city</li>
            <li>Choose the right doctor</li>
            <li>Book your appointment hassle-free</li>
          </ul>
          <p>
            PureCheckup.com is the best healthcare service provider for quality treatment at the best price.
          </p>
          <p>
            👉 Our care team is available 24/7 to assist you with consultation, treatment booking, and insurance support.
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
