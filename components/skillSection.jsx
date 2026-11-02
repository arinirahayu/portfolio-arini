"use client";

import { useRef } from "react";
import {
  Braces,
  Database,
  Fingerprint,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import Reveal from "./reveal";
import HorizontalScrollControls from "./horizontalScrollControls";

const SKILL_GROUPS = [
  {
    icon: PanelsTopLeft,
    title: { id: "Analisis Data", en: "Data Analysis" },
    description: {
      id: "Mengolah data menjadi insight untuk mendukung keputusan.",
      en: "Turning data into insights that support decisions.",
    },
    technologies: [
      "Python",
      "Excel",
      "Power BI",
      "Visualisasi Data",
    ],
  },
  {
    icon: Braces,
    title: { id: "Machine Learning", en: "Machine Learning" },
    description: {
      id: "Membangun model prediksi dan deteksi anomali.",
      en: "Building prediction and anomaly detection models.",
    },
    technologies: ["Random Forest", "XGBoost", "Isolation Forest"],
  },
  {
    icon: Database,
    title: { id: "Pengembangan Web", en: "Web Development" },
    description: {
      id: "Mengembangkan situs dan sistem informasi berbasis web.",
      en: "Developing websites and web-based information systems.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    icon: Fingerprint,
    title: { id: "UI/UX Design", en: "UI/UX Design" },
    description: {
      id: "Merancang pengalaman pengguna dan antarmuka aplikasi.",
      en: "Designing user experiences and application interfaces.",
    },
    technologies: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    icon: Wrench,
    title: { id: "Perangkat & Alur Kerja", en: "Tools & Workflow" },
    description: {
      id: "Mengelola proyek dan berkolaborasi dengan tim.",
      en: "Managing projects and collaborating with teams.",
    },
    technologies: ["Project Management", "Communication", "Teamwork"],
  },
];

export default function SkillsSection({ language }) {
  const scrollRef = useRef(null);

  return (
    <section id="skills" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "KEAHLIAN" : "EXPERTISE"}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            {language === "id"
              ? "Keahlian & Teknologi"
              : "Skills & Technologies"}
          </h2>
        </div>
        <div className="mb-6 mt-3 flex items-center justify-between gap-4 md:mb-8">
          <p className="text-xs text-slate-400 md:hidden">
            {language === "id"
              ? "Geser kartu untuk melihat lainnya"
              : "Swipe to explore"}
          </p>
          <HorizontalScrollControls scrollRef={scrollRef} language={language} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = group.icon;

          return (
            <Reveal
              key={group.title.en}
              delay={idx * 0.07}
              hoverLift
              className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <article className="h-full min-h-52 rounded-2xl border border-purple-500/20 bg-linear-to-br from-[#3a2633]/90 to-[#241923]/90 p-5 sm:p-6 backdrop-blur-xl transition-colors hover:border-purple-500/40">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-purple-500/30 bg-[#422b3b] p-3 text-purple-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {group.title[language]}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {group.description[language]}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-purple-500/20 bg-[#422b3b]/80 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
