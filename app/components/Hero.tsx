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
      className="relative flex items-center overflow-hidden bg-neutral-950"
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:py-32 w-full">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow with line */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-10 h-px bg-orange-500" />
            <p className="text-orange-400 text-xs sm:text-sm font-medium tracking-widest uppercase">
              Москва и МО
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
            Благоустройство
            <br />
            и дорожные работы
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-400 leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Профессиональное выполнение работ любой сложности. Собственный парк техники CAT, CASE, HAMM.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16">
            <a
              href="#contacts"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold transition-all"
            >
              Оставить заявку
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#equipment"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white px-4 sm:px-6 py-3.5 sm:py-4 font-medium transition-colors"
            >
              Смотреть технику
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 sm:gap-10 pt-6 sm:pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-1">единиц техники</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-1">проектов</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-1">на связи</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
