"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./reveal";
import HorizontalScrollControls from "./horizontalScrollControls";

const EXPERIENCE_DATA = {
  id: [
    {
      title: "Project Manager",
      category: "PT Tosalign • Feb – Agu 2026",
      desc: "Mengelola perencanaan dan pelaksanaan proyek untuk memastikan target, kebutuhan proyek, dan kolaborasi tim berjalan sesuai rencana.",
      image: "/project-management.jpeg",
    },
    {
      title: "Human Capital Information System",
      category: "PT Solusi Bangun Indonesia • Magang • Mar – Jul 2025",
      desc: "Mendukung kegiatan dan kebutuhan terkait Human Capital Information System (HCIS), termasuk pengelolaan informasi dan proses kerja.",
      image: "/project-hcis.jpeg",
    },
  ],
  en: [
    {
      title: "Project Manager",
      category: "PT Tosalign • Feb – Aug 2026",
      desc: "Managed project planning and execution to keep project targets, requirements, and team collaboration on track.",
      image: "/project-management.jpg",
    },
    {
      title: "Human Capital Information System",
      category: "PT Solusi Bangun Indonesia • Internship • Mar – Jul 2025",
      desc: "Supported Human Capital Information System (HCIS) activities and requirements, including information management and work processes.",
      image: "/project-hcis.jpeg",
    },
  ],
};

export default function ExperienceSection({ language }) {
  const scrollRef = useRef(null);

  return (
    <section id="work-experience" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "PENGALAMAN KERJA" : "WORK EXPERIENCE"}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
          </h2>
        </div>
        <div className="mb-6 mt-3 flex items-center justify-between gap-4">
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
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:gap-6"
      >
        {EXPERIENCE_DATA[language].map((item, idx) => (
          <Reveal
            key={item.title}
            delay={idx * 0.1}
            hoverLift
            className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
          >
            <article className="h-full bg-linear-to-br from-[#3a2633]/90 to-[#241923]/90 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-40 overflow-hidden bg-[#352331] sm:h-48 lg:h-56">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 480px) 72vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1d141c] via-[#1d141c]/20 to-transparent" />
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400/90 font-mono mt-1">
                    {item.category}
                  </p>
                  <p className="text-sm text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
