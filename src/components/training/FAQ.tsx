import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I get started with AI Lab PRO?',
    answer: 'Begin by exploring our Setup Wizard, which will guide you through the essential steps to set up your AI-powered business foundation.'
  },
  {
    question: 'What resources are included with my subscription?',
    answer: 'Your subscription includes access to all training videos, tools, templates, and regular updates to help you grow your business.'
  },
  {
    question: 'How often is new content added?',
    answer: 'We regularly update our content library with new training materials, tools, and resources to keep you at the forefront of AI-powered business strategies.'
  },
  {
    question: 'Can I get personalized support?',
    answer: 'Yes, we offer various support options including community forums, email support, and premium coaching sessions for personalized guidance.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {faq.question}
            </span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}