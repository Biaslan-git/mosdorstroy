import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/mosdorstroy" : "";

const services = [
  {
    title: "Земляные работы",
    description: "Планировка территории, выемка и перемещение грунта, подготовка оснований",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15l6-6 4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Дорожные работы",
    description: "Устройство дорожных оснований, асфальтирование, укатка покрытий",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Благоустройство",
    description: "Комплексное благоустройство территорий, подготовка площадок под строительство",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Аренда техники",
    description: "Предоставляем спецтехнику с опытными операторами для ваших проектов",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const equipment = [
  { src: `${basePath}/6.png`, alt: "Экскаватор CAT" },
  { src: `${basePath}/2.png`, alt: "Бульдозер CASE 2050M" },
  { src: `${basePath}/7.png`, alt: "Бульдозер CASE" },
  { src: `${basePath}/3.png`, alt: "Каток HAMM" },
  { src: `${basePath}/4.png`, alt: "Каток HAMM" },
  { src: `${basePath}/1.png`, alt: "Каток SAKAI" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
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
              <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Услуги</a>
              <a href="#equipment" className="text-neutral-600 hover:text-neutral-900 transition-colors">Техника</a>
              <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">О нас</a>
              <a href="#contacts" className="text-neutral-600 hover:text-neutral-900 transition-colors">Контакты</a>
            </nav>
            <a
              href="tel:+79XXXXXXXXX"
              className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/2.png`}
            alt="Строительная техника"
            fill
            className="object-cover"
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
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
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

      {/* Services */}
      <section id="services" className="py-20 sm:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Выполняем полный комплекс работ по благоустройству и подготовке территорий
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Наша техника</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Собственный парк современной спецтехники от ведущих мировых производителей
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-white font-medium">{item.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-32 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                ООО «МОСДОРСТРОЙ» — профессиональная строительная компания, специализирующаяся
                на земляных и дорожных работах в Москве и Московской области.
              </p>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Располагаем собственным парком современной техники: экскаваторы CAT,
                бульдозеры CASE, грунтовые катки HAMM и SAKAI. Это позволяет выполнять
                работы любой сложности в кратчайшие сроки.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">10+</div>
                  <div className="text-neutral-400">единиц техники</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">50+</div>
                  <div className="text-neutral-400">выполненных проектов</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">24/7</div>
                  <div className="text-neutral-400">на связи</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={`${basePath}/6.png`}
                alt="Экскаватор CAT на объекте"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Контакты</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Свяжитесь с нами для расчёта стоимости или консультации
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <a
              href="tel:+79XXXXXXXXX"
              className="flex items-center gap-4 p-6 bg-neutral-50 rounded-2xl hover:bg-orange-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-1">Телефон</div>
                <div className="text-lg font-semibold text-neutral-900">+7 (9XX) XXX-XX-XX</div>
              </div>
            </a>
            <a
              href="mailto:info@mosdorstroy.ru"
              className="flex items-center gap-4 p-6 bg-neutral-50 rounded-2xl hover:bg-orange-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-1">Email</div>
                <div className="text-lg font-semibold text-neutral-900">info@mosdorstroy.ru</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-neutral-50 rounded-2xl">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-1">Адрес</div>
                <div className="text-lg font-semibold text-neutral-900">г. Балашиха, ул. Карбышева, 1</div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-orange-500 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Нужен расчёт стоимости?</h3>
            <p className="text-orange-100 mb-6">Оставьте заявку и мы свяжемся с вами в течение 30 минут</p>
            <a
              href="tel:+79XXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">М</span>
              </div>
              <span className="font-bold text-xl">МОСДОРСТРОЙ</span>
            </div>
            <div className="text-neutral-400 text-sm">
              ООО «МОСДОРСТРОЙ» ИНН 5001145255 ОГРН 1225000045973
            </div>
            <div className="text-neutral-400 text-sm">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
