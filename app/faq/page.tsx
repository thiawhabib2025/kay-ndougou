import { faqs } from "@/data/demo";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">FAQ</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Questions fréquentes</h1>
      </div>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[28px] border border-[#14532D]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-[#14532D]">{faq.question}</h2>
            <p className="mt-3 text-[#1F2937]/75">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
