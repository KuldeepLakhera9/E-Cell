import SectionHeading from "@/components/ui/SectionHeading";
import LogoMarquee from "@/components/ui/LogoMarquee";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { STARTUP_LOGOS, PRESS_MENTIONS } from "@/data/logos";

export default function Achievements() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Proof, Not Promises"
          description="Startups we've helped launch and the press that noticed."
        />

        <div className="mt-16 space-y-8">
          <RevealOnScroll direction="fade">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              Startups Incubated
            </p>
            <LogoMarquee items={STARTUP_LOGOS} />
          </RevealOnScroll>
          <RevealOnScroll direction="fade" delay={0.1}>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              As Featured In
            </p>
            <LogoMarquee items={PRESS_MENTIONS} reverse muted />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
