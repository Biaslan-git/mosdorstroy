"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">М</span>
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight">МОСДОРСТРОЙ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-neutral-600 hover:text-orange-500 transition-colors">Услуги</a>
            <a href="#equipment" className="text-neutral-600 hover:text-orange-500 transition-colors">Техника</a>
            <a href="#about" className="text-neutral-600 hover:text-orange-500 transition-colors">О нас</a>
            <a href="#contacts" className="text-neutral-600 hover:text-orange-500 transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79XXXXXXXXX"
              className="flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white sm:px-5 sm:py-2.5 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Позвонить</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative flex items-center justify-center w-10 h-10 text-neutral-600"
              aria-label="Меню"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-neutral-100">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#equipment", label: "Техника" },
              { href: "#about", label: "О нас" },
              { href: "#contacts", label: "Контакты" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-neutral-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200 font-medium"
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-4 pb-4">
            <a
              href="tel:+79XXXXXXXXX"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
