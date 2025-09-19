const FAQ = () => {
    const faqs = [
      {
        id: "one",
        question: "What is Gynaecology and what problems does a gynaecologist treat?",
        answer:
          "A gynaecologist is a specialist in women’s reproductive health. They manage issues like menstrual problems (heavy, irregular or painful periods), vaginal discharge or infections, PCOS / hormonal imbalance, fibroids, ovarian cysts, contraception, and menopausal symptoms.",
      },
      {
        id: "two",
        question: "When should I see a gynaecologist for the first time?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
            <li>Any unusual vaginal discharge, itching, or odor</li>
            <li>Pain during periods or sex</li>
            <li>Spotting or bleeding between periods</li>
            <li>Missed or irregular periods</li>
            <li>For routine preventive care (Pap smear, breast exam)</li>
          </ul>
        ),
      },
      {
        id: "three",
        question: "What tests & screenings are commonly done in gynaecology?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
            <li>Pap smear (cervical cancer screening)</li>
            <li>Pelvic examination & ultrasound</li>
            <li>Hormone tests (for PCOS, menopause etc.)</li>
            <li>STI screenings</li>
            <li>Tests for fibroids, ovarian cysts</li>
          </ul>
        ),
      },
      {
        id: "four",
        question: "Are gynaecological exams painful or embarrassing?",
        answer:
          "Most exams are brief and may cause mild discomfort, but not severe pain. Doctors take care to maintain privacy, use gentle techniques, and explain each step. If you’re anxious or it’s your first time, tell the doctor—they will help you feel comfortable.",
      },
      {
        id: "five",
        question: "How often should I have a routine gynaecology check-up?",
        answer:
          "Generally once a year for most women is recommended. However, if you have ongoing issues (e.g. PCOS, heavy periods, fibroids, menopause symptoms).",
      },
      {
        id: "six",
        question: "What contraception options are available at PureCheckup?",
        answer:
          "We offer counselling and a range of reliable contraceptive methods, including birth control pills, intrauterine devices (IUDs), barrier methods (like condoms), injectables, implants, etc. A specialist can help you choose the one best suited to your health, lifestyle, and preferences.",
      },
      {
        id: "seven",
        question: "How are gynaecological issues like fibroids or ovarian cysts treated?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
            <li>Medicines or hormonal therapy</li>
            <li>Minimally invasive procedures (laparoscopy, hysteroscopy)</li>
            <li>Surgery (if needed)</li>
            <li>Lifestyle & diet changes</li>
          </ul>
        ),
      },
      {
        id: "eight",
        question: "What should I expect during a pregnancy-related gynaecology consultation?",
        answer:
          "In early pregnancy, you’ll have counseling, initial screening (blood work, ultrasound), nutritional advice, and scheduling of prenatal visits. The doctor will review your medical history and monitor you and the baby through periodic check-ups.",
      },
      {
        id: "nine",
        question: "Can I consult PureCheckup if I’m not sexually active?",
        answer:
          "Absolutely yes. Gynaecological health is important for all women regardless of sexual activity. Many concerns like menstrual irregularity, hormonal imbalance, infections, or preventive screenings apply irrespective of sexual history.",
      },
      {
        id: "ten",
        question: "How do I prepare for my gynaecology appointment?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
            <li>Keep a record of your cycle, symptoms, and any previous medical reports</li>
            <li>Note down questions you wish to ask</li>
            <li>Wear comfortable clothes</li>
            <li>
              Avoid intercourse or vaginal products before certain tests (like Pap smear) — the doctor will guide you
            </li>
            <li>Be open about your health history</li>
          </ul>
        ),
      },
      {
        id: "eleven",
        question: "How to book an appointment with PureCheckup Gynaecology surgeons?",
        answer: (
          <ul className="list-decimal list-inside text-(--text-primary) font-medium">
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
        id: "twelve",
        question: "Why choose PureCheckup.com for Gynecology care?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
            <li>👩‍⚕️ Experienced gynecologists with expertise in advanced care</li>
            <li>🏥 Treatment at NABH-accredited hospitals</li>
            <li>💳 Insurance support & flexible EMI options</li>
            <li>🎯 Personalized treatment plans for each patient</li>
            <li>📞 Free consultations & continuous aftercare support</li>
          </ul>
        ),
      },
      {
        id: "thirteen",
        question: "What if I need advice after surgery?",
        answer: (
          <ul className="list-disc list-inside text-(--text-primary) font-medium space-y-1">
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
  