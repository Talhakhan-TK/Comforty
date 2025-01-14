"use client"
import { useState } from 'react';

const FAQs = [
  {
    question: "What types of chairs do you offer?",
    answer: "We offer a wide range of chairs including ergonomic, office, gaming, and lounge chairs to suit your needs."
  },
  {
    question: "How can we get in touch with you?",
    answer: "You can contact us via email at support@comfortychairs.com or call us at 123-456-7890."
  },
  {
    question: "Do your chairs come with a warranty?",
    answer: "Yes, all our chairs come with a 1-year warranty. Some models include extended warranty options."
  },

  {
    question: "What will be delivered? And when?",
    answer: "Your chair will be delivered within 5-7 business days. We provide tracking information once it ships."
  },
  {
    question: "Can I try a chair before purchasing?",
    answer: "Yes, you can visit our showroom to try out any chair before making a purchase."
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer: "Use a soft, damp cloth to clean the surface. Avoid harsh chemicals. For detailed care instructions, refer to the user manual."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div>  
  <h1 className="flex justify-center mt-16 text-[48px] font-semibold">Question Looks Here</h1>
  <h2 className="text-center text-[16px] text-[#9F9F9F] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h2>
    <div className="  max-w-screen-xl  mx-auto mt-14 mb-28  p-8 bg-gray-100 rounded-lg">
      <div className=" grid grid-cols-2 gap-20 ">
        {FAQs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-[18px] text-[#333333] hover:text-gray-900 "
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
}
