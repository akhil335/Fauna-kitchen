"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import Animated from "../components/Animated"
import { faqs } from "../data"
import { AnimatePresence, motion } from "motion/react"

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="mt-44 px-4 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <Animated delay={0.2}>
          <p className="font-medium uppercase mb-3.5">FAQs</p>
        </Animated>
        <Animated>
          <h2 className="text-4xl md:text-5xl text-balance mx-auto max-w-2xl">
            Frequently Asked Questions
          </h2>
        </Animated>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <Animated key={i} delay={0.15 * i}>
              <div className="border border-primary/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-primary/5 transition-colors text-left"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="size-7 rounded-full bg-primary/10 grid place-content-center shrink-0">
                    {isOpen ? <X size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Animated>
          )
        })}
      </div>
    </section>
  )
}

export default Faq