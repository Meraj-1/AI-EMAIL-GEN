import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Is this email generator free to use?",
    a: "Haan! Aap free plan pe tool use kar sakte ho aur AI-generated emails try kar sakte ho. Pro plan advanced users ke liye hai."
  },
  {
    q: "Is my data and email content safe?",
    a: "Bilkul safe. Aapke emails private rehte hain, na store kiye jaate hain aur na kisi third party ke saath share hote hain."
  },
  {
    q: "Can I edit the generated email?",
    a: "Absolutely. Generated email aap poori tarah edit, customize aur regenerate kar sakte ho jab tak perfect na lage."
  },
  {
    q: "What types of emails can I generate?",
    a: "Job applications, cold emails, follow-ups, sales pitches, apologies, client replies aur bahut kuch."
  },
  {
    q: "Do I need writing skills to use this?",
    a: "Bilkul nahi. Bas apni basic requirement likho aur AI baaki ka kaam kar dega."
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Haan. Koi lock-in nahi hai. Aap kabhi bhi apna plan cancel kar sakte ho."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions 🤔
          </h2>
          <p className="text-gray-400 text-lg">
            Kuch common questions jo users aksar poochte hain.
            Agar phir bhi doubt ho — bas try karke dekho.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                           hover:border-purple-500/40 transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h4 className="font-semibold text-lg">
                    ❓ {item.q}
                  </h4>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-purple-400" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Still have questions?
          </h4>
          <p className="text-gray-400 mb-8">
            Best way to know is to try it yourself.
          </p>
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Generate Your First Email 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Faq;
