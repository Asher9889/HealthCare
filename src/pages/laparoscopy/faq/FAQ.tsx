
const FAQ = () => {
    const faqs = [
      {
        id: "one",
        question: "What is laparoscopy?",
        answer: `Laparoscopy is a minimally invasive surgery used for the diagnosis and treatment of abdominal or pelvic conditions. At PureCheckup.com, we connect you with the best laparoscopic surgeons in India for safe and advanced care.`,
      },
      {
        id: "two",
        question: "Is laparoscopy painful?",
        answer: "Laparoscopy is performed under anesthesia, so you won’t feel pain during the procedure. After surgery, patients usually experience only mild discomfort, which heals quickly compared to traditional surgery.",
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
        question: "How long does it take to recover from laparoscopy?",
        answer: `Most patients recover within 1–2 weeks. With laparoscopy treatment in India at PureCheckup.com, recovery is faster and safer due to modern techniques and expert surgeons.`,
      },
      {
        id: "five",
        question: "What conditions can be treated with laparoscopy?",
        answer: (
            <ul className="list-decimal list-inside text-(--text-primary) font-medium">
                <p>Laparoscopy is commonly used for:</p>
                <li>Hernia surgery</li>
                <li>Gallstones (Gallbladder removal)</li>
                <li>Appendicitis</li>
                <li>Inguinal & Umbilical Hernia Treatment</li>
                <li>Ovarian cysts & gynecological conditions</li>
                <p>PureCheckup.com helps you book the right doctor for laparoscopy surgery near you.</p>
            </ul>
            
        ),
      },
      {
        id: "six",
        question:"Is laparoscopy safe?",
        answer: `Yes, laparoscopy is very safe when performed by experienced specialists. At PureCheckup.com, we ensure you get the best laparoscopic care in India with minimal risks.`,
      },
      {
        id: "seven",
        question: "How long does laparoscopy surgery take?",
        answer: "Depending on the procedure, laparoscopy usually takes 30 minutes to 2 hours.",
      },
      {
        id: "eight",
        question: "Will I need to stay in the hospital after a laparoscopy?",
        answer: "Many laparoscopic surgeries are daycare procedures, meaning you can go home the same day. In some cases, a short hospital stay of 1–2 days may be required.",
      },
      {
        id: "ten",
        question: "Are there risks involved in laparoscopy?",
        answer: "Risks are minimal, but like any surgery, there may be minor chances of infection, bleeding, or anesthesia reactions. PureCheckup.com ensures you are treated at trusted laparoscopy hospitals in India to reduce risks.",
      },
      {
        id: "eleven",
        question: "Can everyone undergo laparoscopy?",
        answer: "Most patients are eligible for laparoscopy, but your surgeon will decide after checking your health condition, age, and medical history.",
      },
      {
        id: "twelve",
        question: "Why choose laparoscopy over open surgery?",
        answer: (
          <ul className="list-disc list-inside space-y-1  text-(--text-primary) font-medium">
            <p>Because it offers:</p>
            <li>Smaller incisions</li>
            <li>Less pain</li>
            <li>Minimal scarring</li>
            <li>Faster healing</li>
            <li>Shorter hospital stay</li>
            <p>PureCheckup.com makes it easy to find the best laparoscopic surgeons near you for advanced treatment.</p>
          </ul>
        ),
      },
      {
        id: "thirteen",
        question: "What if I need advice after surgery?",
        answer: (
          <ul className="list-disc list-inside space-y-1  text-(--text-primary) font-medium">
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
  
export default FAQ;
  