"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "./reveal";

export default function ContactSection({ language }) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const updateContact = (event) => {
    setContact((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${contact.name || "visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
    );
    window.location.href = `mailto:arinirahayu296@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-purple-500/10 pt-8 sm:scroll-mt-28 sm:pt-10"
    >
      <Reveal className="mx-auto max-w-3xl py-1 sm:py-2" direction="scale">
        <div className="relative p-1 sm:p-3">
          <span
            className="absolute -left-2 top-1 h-px w-20 bg-linear-to-r from-purple-300/80 to-transparent"
            aria-hidden="true"
          />
          <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-400">
            <span className="h-px w-6 bg-indigo-400/80" aria-hidden="true" />
            {language === "id" ? "KONTAK" : "GET IN TOUCH"}
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-4xl">
            {language === "id" ? (
              <>
                Mari mulai{" "}
                <span className="text-slate-300">percakapan.</span>
              </>
            ) : (
              <>
                Let’s start a{" "}
                <span className="text-slate-300">conversation.</span>
              </>
            )}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:mt-4">
            {language === "id"
              ? "Terbuka untuk berdiskusi tentang pengembangan web, kolaborasi, maupun peluang profesional."
              : "I’m open to discussing web development, collaboration, and professional opportunities."}
          </p>
          <form onSubmit={handleContactSubmit} className="mt-5 space-y-3 sm:mt-6">
            <input
              required
              name="name"
              value={contact.name}
              onChange={updateContact}
              placeholder={language === "id" ? "Nama Anda" : "Your name"}
              className="min-h-11 w-full rounded-xl border border-white/10 bg-[#21151e]/85 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <input
              required
              type="email"
              name="email"
              value={contact.email}
              onChange={updateContact}
              placeholder={language === "id" ? "Email Anda" : "Your email"}
              className="min-h-11 w-full rounded-xl border border-white/10 bg-[#21151e]/85 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <textarea
              required
              name="message"
              value={contact.message}
              onChange={updateContact}
              rows={5}
              placeholder={language === "id" ? "Pesan Anda" : "Your message"}
              className="w-full resize-none rounded-xl border border-white/10 bg-[#21151e]/85 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500/90 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-400"
            >
              <Send className="size-4" aria-hidden="true" />
              {language === "id" ? "Kirim Pesan" : "Send Message"}
            </button>
          </form>
        </div>
      </Reveal>

      <footer className="mt-10 border-t border-purple-500/10 pt-6 text-center font-mono text-xs text-slate-500">
        © 2026 Arini Rahayu •{" "}
        {language === "id" ? "Dibangun dengan" : "Built with"} Next.js 16,
        Tailwind CSS & Framer Motion
      </footer>
    </section>
  );
}
