"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { SITE, cn, scrollToSection } from "@/lib/utils";

const QUICK_LINKS = [
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
];

const RESOURCES = [
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
  { label: "Join E-Cell", id: "contact" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="relative mx-auto max-w-8xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-foreground-muted">{SITE.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: InstagramIcon, href: SITE.social.instagram, label: "Instagram" },
                { Icon: LinkedinIcon, href: SITE.social.linkedin, label: "LinkedIn" },
                { Icon: TwitterIcon, href: SITE.social.twitter, label: "Twitter" },
                { Icon: YoutubeIcon, href: SITE.social.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`E-Cell VPKBIET on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {RESOURCES.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay in the loop
            </h4>
            <p className="mt-5 text-sm text-foreground-muted">
              One email a month. New events, mentorship openings, and founder stories.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="your@email.com"
                  aria-label="Email for newsletter"
                  className={cn(
                    "w-full min-w-0 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle/60 transition-colors duration-300 focus:border-accent/50 focus:outline-none"
                  )}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-background transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  {subscribed ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-error">{error}</p>}
              {subscribed && (
                <p className="mt-2 text-xs text-accent">Subscribed! Welcome aboard.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-subtle">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-foreground-subtle">
            {SITE.college}
          </p>
        </div>
      </div>
    </footer>
  );
}
