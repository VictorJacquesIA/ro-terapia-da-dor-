"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-primary/30 shadow-card bg-white" : "border-border bg-white hover:border-primary/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-expanded={open}
      >
        <span className="font-semibold text-dark text-sm md:text-base leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-primary text-white" : "bg-primary-soft text-primary"
          }`}
          aria-hidden="true"
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-border/50 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-title">
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Rô Responde"
            title="Dúvidas frequentes"
            subtitle="Respondemos as perguntas mais comuns para que você chegue à sua sessão com tranquilidade."
          />
        </AnimateOnScroll>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <AnimateOnScroll key={item.question} delay={Math.min(index + 1, 5)}>
              <FAQItem question={item.question} answer={item.answer} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
