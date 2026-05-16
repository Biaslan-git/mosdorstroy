"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/mosdorstroy" : "";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set height once on mount, never update it
    if (sectionRef.current) {
      const height = window.innerHeight;
      sectionRef.current.style.height = `${height}px`;
      sectionRef.current.style.minHeight = `${height}px`;
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center pt-20 overflow-hidden"
      style={{ minHeight: "100vh" }} // Fallback before JS runs
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={`${basePath}/2.png`}
          alt="Строительная техника"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Работаем по Москве и МО
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Благоустройство
            <br />
            <span className="text-orange-500">и дорожные работы</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            Профессиональное выполнение земляных и дорожных работ любой сложности.
            Собственный парк современной техники.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 active:scale-95"
            >
              Оставить заявку
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#equipment"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
            >
              Наша техника
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
