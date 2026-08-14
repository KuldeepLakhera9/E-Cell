"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_REGEX.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Tell us a little about your message.";
    else if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // eslint-disable-next-line no-console
    console.log("E-Cell contact form submission:", form);

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          description="Questions about joining, mentorship, or partnering with us? Send a message — we read every one."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <RevealOnScroll direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Aarav Deshmukh"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-foreground-subtle/60 transition-colors duration-300 focus:border-accent-cyan/50 focus:outline-none"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-accent-magenta">{errors.name}</p>}
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-foreground-subtle/60 transition-colors duration-300 focus:border-accent-cyan/50 focus:outline-none"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-accent-magenta">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us what you're looking for..."
                    aria-invalid={!!errors.message}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-foreground-subtle/60 transition-colors duration-300 focus:border-accent-cyan/50 focus:outline-none"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-accent-magenta">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <MagneticButton type="submit">
                  {status === "submitting" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent"
                      : "Send Message"}
                </MagneticButton>
                {status === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-foreground-muted"
                  >
                    We&rsquo;ll get back to you within 2 business days.
                  </motion.span>
                )}
              </div>
            </form>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient">
                    <Mail size={18} className="text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground-subtle">Email us</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      data-cursor-hover
                      className="font-display text-lg font-semibold text-foreground transition-colors hover:text-accent-cyan"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient">
                    <MapPin size={18} className="text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground-subtle">Find us</p>
                    <p className="font-display text-lg font-semibold text-foreground">{SITE.location}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {[
                    { Icon: InstagramIcon, href: SITE.social.instagram, label: "Instagram" },
                    { Icon: LinkedinIcon, href: SITE.social.linkedin, label: "LinkedIn" },
                    { Icon: TwitterIcon, href: SITE.social.twitter, label: "Twitter" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`E-Cell VPKBIET on ${label}`}
                      data-cursor-hover
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors duration-300 hover:border-accent-violet/40 hover:text-accent-violet"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass relative min-h-[200px] flex-1 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 grid-texture opacity-40" />
                <div className="absolute inset-0 bg-mesh-gradient" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center gap-2">
                    <span className="absolute h-16 w-16 animate-ping rounded-full bg-accent-violet/20" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent-gradient shadow-glow">
                      <MapPin size={20} className="text-background" />
                    </span>
                    <span className="mt-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground-muted backdrop-blur-md">
                      Baramati, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
