"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/mosdorstroy" : "";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setMounted(true);
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-neutral-950"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={`${basePath}/2.png`}
          alt="Строительная техника"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />
      </div>

      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main content - centered vertically */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-20">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow with line */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-px bg-orange-500" />
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase">
              Москва и МО
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Благоустройство
            <br />
            и дорожные работы
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-400 leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Профессиональное выполнение работ любой сложности. Собственный парк техники CAT, CASE, HAMM.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-7 py-4 rounded-xl font-semibold transition-all"
            >
              Оставить заявку
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#equipment"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white px-6 py-4 font-medium transition-colors"
            >
              Смотреть технику
            </a>
          </div>
        </div>
      </div>

      {/* Stats row - pinned to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pb-8 sm:pb-12">
        <div className="flex gap-8 sm:gap-12 pt-6 border-t border-white/10">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
            <div className="text-xs sm:text-sm text-neutral-500">техники</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
            <div className="text-xs sm:text-sm text-neutral-500">проектов</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
            <div className="text-xs sm:text-sm text-neutral-500">на связи</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden sm:block absolute bottom-8 right-8">
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
