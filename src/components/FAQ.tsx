"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer delivery for bulk orders?",
    answer: "Yes, we offer delivery for bulk purchases within our service region. Please contact us directly with your location and order size for a customized delivery quote."
  },
  {
    question: "What is the minimum order quantity for eggs?",
    answer: "For retail, you can purchase as little as one crate (30 eggs). For wholesale pricing, the minimum order is 10 crates."
  },
  {
    question: "Are your birds organically fed?",
    answer: "We use premium quality, highly nutritious feed formulated to ensure the optimal health of our birds. While not 100% certified organic, our practices emphasize natural growth and zero harmful additives."
  },
  {
    question: "Can I schedule a visit to the farm?",
    answer: "We welcome business clients for scheduled tours to inspect our facilities. However, to maintain strict biosecurity and protect our flock, casual walk-in visits are currently restricted. Please use our contact form to schedule an appointment."
  },
  {
    question: "Where are you located?",
    answer: "Adefran Farms is located in a serene environment optimal for poultry farming. For the exact address and directions, please reach out to us via our contact form or WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-50 dark:bg-[#0f1610]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-farm-primary mx-auto mb-6 rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-foreground pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-farm-primary"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
