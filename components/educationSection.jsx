"use client";

import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import Reveal from "./reveal";
import HorizontalScrollControls from "./horizontalScrollControls";

const ACHIEVEMENTS_DATA = {
  id: [
    {
      title: "S1 Teknik Informatika",
      issuer: "Universitas Esa Unggul • IPK 3,84/4,00",
      date: "2022 – 2026",
      type: "Pendidikan",
    },
    {
      title: "Multimedia",
      issuer: "SMK Menengah Kejuruan",
      date: "2018 – 2021",
      type: "Pendidikan",
    },
  ],
  en: [
    {
      title: "Bachelor of Informatics Engineering",
      issuer: "Universitas Esa Unggul • GPA 3.84/4.00",
      date: "2022 – 2026",
      type: "Education",
    },
    {
      title: "Multimedia Studies",
      issuer: "Vocational High School",
      date: "2018 – 2021",
      type: "Education",
    },
  ],
};

export default function EducationSection({ language }) {
  const scrollRef = useRef(null);

  return (
    <section id="achievements" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              {language === "id" ? "PENDIDIKAN" : "EDUCATION"}
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              {language === "id" ? "Riwayat Pendidikan" : "Education"}
            </h2>
          </div>
          <div className="mb-6 mt-3 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-400 md:hidden">
              {language === "id"
                ? "Geser kartu untuk melihat lainnya"
                : "Swipe to explore"}
            </p>
            <HorizontalScrollControls
              scrollRef={scrollRef}
              language={language}
            />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 lg:gap-6"
        >
          {ACHIEVEMENTS_DATA[language].map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.1}
              hoverLift
              className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <article className="h-full min-h-52 bg-linear-to-br from-[#3a2633]/90 to-[#241923]/90 border border-purple-500/20 rounded-2xl p-5 sm:p-6 backdrop-blur-xl flex flex-col hover:border-purple-500/40 transition-all group">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono text-right">
                    <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    {item.date}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{item.issuer}</p>
                </div>

                <span className="mt-auto pt-5">
                  <span className="inline-flex items-center whitespace-nowrap rounded-full border border-purple-500/30 bg-purple-950/60 px-3 py-1.5 text-[10px] font-mono leading-none text-purple-300">
                    {item.type}
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
