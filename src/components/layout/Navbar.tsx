"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn, scrollToSection } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-8xl items-center justify-between rounded-2xl px-5 transition-all duration-500 ease-out-expo sm:px-6",
            scrolled
              ? "mx-4 border border-border bg-background/80 py-2.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:mx-auto lg:max-w-7xl"
              : "border border-transparent bg-transparent py-1 lg:max-w-8xl"
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            data-cursor-hover
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                data-cursor-hover
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  activeSection === link.id
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-gradient transition-transform duration-300 ease-out-expo group-hover:scale-x-100",
                    activeSection === link.id && "scale-x-100"
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton onClick={() => handleNavClick("contact")} className="!px-5 !py-2.5 !text-xs">
              Join E-Cell
            </MagneticButton>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor-hover
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col items-center justify-center gap-2 px-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.id)}
                  className="py-3 font-display text-3xl font-semibold text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.4 }}
                className="mt-6"
              >
                <MagneticButton onClick={() => handleNavClick("contact")}>Join E-Cell</MagneticButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
