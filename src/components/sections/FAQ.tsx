import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { FAQS } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          description="Everything you were about to ask before joining or attending an event."
        />
        <div className="mt-14">
          <Accordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
