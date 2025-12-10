"use client";

import { useTranslation } from "react-i18next";

export default function SafetyLabPage() {
  const { t } = useTranslation();

  const isoStandards = [
    {
      id: "iso9001",
      title: t('services.iso9001'),
      description: t('services.iso9001Desc'),
      iconColor: "orange",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "iso50001",
      title: t('services.iso50001'),
      description: t('services.iso50001Desc'),
      iconColor: "green",
      highlighted: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "iso22000",
      title: t('services.iso22000'),
      description: t('services.iso22000Desc'),
      iconColor: "blue",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "iso42001",
      title: t('services.iso42001'),
      description: t('services.iso42001Desc'),
      iconColor: "purple",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: "iso27001",
      title: t('services.iso27001'),
      description: t('services.iso27001Desc'),
      iconColor: "teal",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "iso20000",
      title: t('services.iso20000'),
      description: t('services.iso20000Desc'),
      iconColor: "pink",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "iso22301",
      title: t('services.iso22301'),
      description: t('services.iso22301Desc'),
      iconColor: "orange",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "cbddo",
      title: t('services.cbddo'),
      description: t('services.cbddoDesc'),
      iconColor: "cyan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string }> = {
      orange: { text: "text-orange-500", bg: "bg-orange-50" },
      green: { text: "text-green-500", bg: "bg-green-50" },
      blue: { text: "text-blue-500", bg: "bg-blue-50" },
      purple: { text: "text-purple-500", bg: "bg-purple-50" },
      teal: { text: "text-teal-500", bg: "bg-teal-50" },
      pink: { text: "text-pink-500", bg: "bg-pink-50" },
      cyan: { text: "text-cyan-500", bg: "bg-cyan-50" }
    };
    return colors[color] || { text: "text-gray-500", bg: "bg-gray-50" };
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50/30 overflow-hidden h-screen">
      <main className="relative z-10 h-full flex flex-col">
        <section className="pt-[60px] sm:pt-[73px] px-3 sm:px-4 py-2 flex-1 flex flex-col overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col min-h-0">
            {/* Section Header */}
            <div className="text-center mb-2 flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                {t('services.safetyLab')}
              </h1>
              <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </div>

            {/* ISO Standards Cards Container */}
            <div className="flex-1 flex flex-col justify-center overflow-hidden min-h-0">
              {/* ISO Standards Cards - First Row (3 cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {isoStandards.slice(0, 3).map((standard) => (
                  <div
                    key={standard.id}
                    className={`bg-white rounded-lg p-2 sm:p-3 shadow-md hover:shadow-lg transition-shadow flex items-start gap-2 ${
                      standard.highlighted ? 'border-2 border-green-200 shadow-lg' : ''
                    }`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0 ${getColorClasses(standard.iconColor).bg}`}>
                      <div className={`${getColorClasses(standard.iconColor).text} scale-[0.6] sm:scale-[0.65]`}>
                        {standard.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-0.5 leading-tight">
                        {standard.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-gray-600 leading-tight">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ISO Standards Cards - Second Row (5 cards: 3 on top, 2 centered below) */}
              <div className="flex flex-col items-center">
                {/* Top row - 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2 w-full max-w-5xl">
                  {isoStandards.slice(3, 6).map((standard) => (
                    <div
                      key={standard.id}
                      className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow flex items-start gap-2"
                    >
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${getColorClasses(standard.iconColor).bg}`}>
                        <div className={`${getColorClasses(standard.iconColor).text} scale-[0.65]`}>
                          {standard.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-0.5 leading-tight">
                          {standard.title}
                        </h3>
                        <p className="text-[10px] text-gray-600 leading-tight">
                          {standard.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom row - 2 cards centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-3xl">
                  {isoStandards.slice(6).map((standard) => (
                    <div
                      key={standard.id}
                      className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow flex items-start gap-2"
                    >
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${getColorClasses(standard.iconColor).bg}`}>
                        <div className={`${getColorClasses(standard.iconColor).text} scale-[0.65]`}>
                          {standard.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-0.5 leading-tight">
                          {standard.title}
                        </h3>
                        <p className="text-[10px] text-gray-600 leading-tight">
                          {standard.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
