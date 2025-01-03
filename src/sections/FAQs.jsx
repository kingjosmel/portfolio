import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
        "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
        "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
        "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
        "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
      <section className="section">
        <div className="container">
          <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
          <div className="mt-10 md:mt-16 lg:mt-20">
            {faqs.map((faq, index) => (
                <div
                    key={faq.question}
                    className="border-t border-stone-400 border-dotted last:border-b py-6 md:py-8 lg:py-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Question */}
                    <div>
                      <div className="text-2xl md:text-3xl lg:text-4xl">
                        {faq.question}
                      </div>
                    </div>

                    {/* SVG Icon */}
                    <div
                        onClick={() => toggleFAQ(index)}
                        className={`inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 cursor-pointer ${
                            activeQuestion === index ? "rotate-45" : ""
                        } transition-transform duration-300`}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                      className={`overflow-hidden transition-all duration-300 ${
                          activeQuestion === index ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <p className="mt-4 text-stone-600 text-base md:text-lg lg:text-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default FAQs;
