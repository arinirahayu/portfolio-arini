"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";
import HorizontalScrollControls from "./horizontalScrollControls";

const PROJECTS_DATA = {
  id: [
    {
      title: "Analisis Data & Machine Learning",
      category: "Python • PT Transjakarta",
      desc: "Mengolah dan menganalisis jumlah penumpang Transjakarta tahun 2025, lalu membandingkan Random Forest dan XGBoost berdasarkan metrik evaluasi.",
      image: "/project-data.jpeg",
    },
    {
      title: "Pengembangan Sistem Deteksi Anomali",
      category: "Machine Learning • PT Solusi Bangun Indonesia",
      desc: "Mengolah data kehadiran dan menerapkan Isolation Forest untuk mengidentifikasi pola serta anomali pada data.",
      image: "/project-ml.jpg",
    },
    {
      title: "Pengembangan Website Tosalign",
      category: "Web Development • PT Tosalign",
      desc: "Berkontribusi dalam pengembangan website Tosalign untuk mendukung kebutuhan informasi dan layanan digital perusahaan.",
      image: "/project-web.jpg",
    },
    {
      title: "UI/UX Designer — Quick Top",
      category: "UI/UX Design • Figma",
      desc: "Merancang pengalaman transaksi PPOB untuk top-up pulsa dan pembayaran tagihan listrik, air, serta internet. Melakukan riset pengguna dan kompetitor, membuat wireframe dan prototipe interaktif, lalu menyempurnakan alur melalui usability testing.",
      image: "/ppob.jpeg",
    },
    {
      title: "Tes Kecemasan Online — MindCare",
      category: "Web Development • HTML, CSS, JavaScript",
      desc: "Membangun tes kecemasan interaktif dengan scoring otomatis dan tampilan hasil yang jelas. Menghadirkan desain responsif bernuansa hijau, menjaga privasi pengguna, serta menambahkan blog edukasi tentang kecemasan.",
      image: "/kecemasan.jpg",
    },
    {
      title: "Website DesaKu: Panen Segar Desa Cikoneng",
      category: "Frontend Development • HTML, CSS, JavaScript",
      desc: "Mengembangkan antarmuka website yang menonjolkan produk lokal dan identitas visual Desa Cikoneng, dengan desain responsif untuk desktop, tablet, dan ponsel.",
      image: "/desa.png",
    },
  ],
  en: [
    {
      title: "Data Analysis & Machine Learning",
      category: "Python • PT Transjakarta",
      desc: "Analyzed Transjakarta passenger numbers in 2025 and compared Random Forest and XGBoost using evaluation metrics.",
      image: "/project-data.jpeg",
    },
    {
      title: "Anomaly Detection System Development",
      category: "Machine Learning • PT Solusi Bangun Indonesia",
      desc: "Processed attendance data and applied Isolation Forest to identify patterns and anomalies.",
      image: "/PT-Sbi.jpeg",
    },
    {
      title: "Tosalign Website Development",
      category: "Web Development • PT Tosalign",
      desc: "Contributed to the development of the Tosalign website to support the company's information and digital service needs.",
      image: "/TOSALIGN.png",
    },
    {
      title: "UI/UX Designer — Quick Top",
      category: "UI/UX Design • Figma",
      desc: "Designed a PPOB experience for mobile top-ups and electricity, water, and internet bill payments. Conducted user and competitor research, created wireframes and an interactive prototype, then refined the flow through usability testing.",
      image: "/ppob.jpeg",
    },
    {
      title: "Online Anxiety Test — MindCare",
      category: "Web Development • HTML, CSS, JavaScript",
      desc: "Built an interactive anxiety test with automatic scoring and clear results. Created a responsive, calming green interface, considered user privacy, and added an educational anxiety blog.",
      image: "/kecemasan.jpg",
    },
    {
      title: "DesaKu: Fresh Harvest of Cikoneng Village",
      category: "Frontend Development • HTML, CSS, JavaScript",
      desc: "Developed a website interface that highlights local products and the visual identity of Cikoneng Village, with a responsive design for desktop, tablet, and mobile.",
      image: "/desa.png",
    },
  ],
};

export default function ProjectsSection({ language }) {
  const scrollRef = useRef(null);

  return (
    <section id="project-experience" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "PORTOFOLIO" : "PORTFOLIO"}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            {language === "id"
              ? "Pengalaman Proyek"
              : "Project Experience"}
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
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 lg:gap-6"
      >
        {PROJECTS_DATA[language].map((proj, idx) => (
          <Reveal
            key={proj.title}
            delay={idx * 0.08}
            hoverLift
            className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
          >
            <div className="h-full bg-linear-to-br from-[#3a2633]/90 to-[#241923]/90 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-40 overflow-hidden bg-[#352331] sm:h-48 lg:h-56">
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt=""
                      fill
                      sizes="(max-width: 480px) 72vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-linear-to-br from-[#49304a] via-[#352331] to-[#242035]">
                      <span className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-lg font-bold tracking-wide text-white/90 shadow-lg backdrop-blur-sm">
                        {proj.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1d141c] via-[#1d141c]/20 to-transparent" />
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400/90 font-mono mt-1">
                    {proj.category}
                  </p>
                  <p className="text-sm text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {proj.href && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      language === "id"
                        ? `Kunjungi situs ${proj.title} (buka di tab baru)`
                        : `Visit ${proj.title} website (opens in a new tab)`
                    }
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#422b3b] border border-purple-500/30 text-purple-400 transition-all hover:bg-purple-600 hover:text-white focus-visible:outline-2 focus-visible:outline-purple-400"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
