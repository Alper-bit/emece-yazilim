"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background gradients and dots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blue gradient on left */}
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        {/* Orange gradient on right */}
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        {/* Additional orange gradient in center-right */}
        <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-orange-200/25 rounded-full blur-3xl" />
        {/* Additional orange gradient at bottom-right */}
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-20">
          {/* Blue dots on left */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full" />
          <div className="absolute top-40 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full" />
          <div className="absolute top-60 left-60 w-2 h-2 bg-blue-400 rounded-full" />
          <div className="absolute top-80 left-80 w-1.5 h-1.5 bg-blue-300 rounded-full" />
          <div className="absolute top-24 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <div className="absolute top-44 left-52 w-2 h-2 bg-blue-300 rounded-full" />
          
          {/* Orange dots on right - more of them */}
          <div className="absolute top-32 right-32 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-52 right-52 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute top-72 right-72 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-92 right-92 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute top-16 right-24 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-36 right-44 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute top-56 right-64 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-76 right-84 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute top-28 right-36 w-1.5 h-1.5 bg-orange-400 rounded-full" />
          <div className="absolute top-48 right-56 w-2 h-2 bg-orange-300 rounded-full" />
          <div className="absolute top-68 right-76 w-1.5 h-1.5 bg-orange-400 rounded-full" />
          <div className="absolute top-88 right-96 w-2 h-2 bg-orange-300 rounded-full" />
          
          {/* Orange dots in center area */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-2/5 right-2/5 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute top-3/5 right-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          
          {/* Orange dots at bottom */}
          <div className="absolute bottom-32 right-40 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute bottom-52 right-60 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute bottom-72 right-80 w-2 h-2 bg-orange-400 rounded-full" />
          <div className="absolute bottom-24 right-28 w-1.5 h-1.5 bg-orange-300 rounded-full" />
          <div className="absolute bottom-44 right-48 w-2 h-2 bg-orange-400 rounded-full" />
        </div>
      </div>

      {/* Main content - accounting for fixed navbar */}
      <main className="relative z-10 pt-[73px]">
        {/* Hero section - First div */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 min-h-screen">
          <div className="max-w-4xl w-full">
            {/* Headline */}
            <h1 className="mb-3">
              <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-1">
                {t('home.title')}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-blue-600 flex items-center gap-2">
                {t('home.subtitle')}
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-500 transform rotate-45" />
              </span>
          </h1>

            {/* Descriptive text */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 max-w-3xl">
              {t('home.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors"
              >
                {t('home.discoverServices')} →
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-800 border border-gray-200 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-50 transition-colors"
              >
                {t('home.getInTouch')}
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics section - Second div */}
        <section className="relative z-10 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Successful Projects */}
              <div className="text-center md:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-gray-600 text-sm sm:text-base">{t('home.successfulProjects')}</div>
              </div>

              {/* Happy Customers */}
              <div className="text-center md:text-left relative">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-1 flex items-center justify-center md:justify-start gap-2">
                  50+
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="text-gray-600 text-base">{t('home.happyCustomers')}</div>
              </div>

              {/* Years of Experience */}
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-gray-600 text-base">{t('home.yearsExperience')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us section */}
        <section id="about" className="relative z-10 bg-gradient-to-b from-white to-blue-50/30 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                {t('aboutUs.title').split(' ')[0]} <span className="text-black-600">{t('aboutUs.title').split(' ')[1]}</span>
              </h2>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Left Column - Main Text */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {t('aboutUs.description1')}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('aboutUs.description2')}
                </p>
              </div>

              {/* Right Column - Features Grid */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {t('aboutUs.ourApproach')}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t('aboutUs.ourApproachDesc')}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {t('aboutUs.ourCommitment')}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t('aboutUs.ourCommitmentDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section - Full Width */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-xl">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full" />
                  {t('aboutUs.strategicDevelopment')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95 mb-4 sm:mb-6">
                  {t('aboutUs.strategicDevelopmentDesc')}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{t('aboutUs.expertDevelopers')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{t('aboutUs.professionalConsultants')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{t('aboutUs.techManagement')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services section */}
        <section id="services" className="relative z-10 bg-gradient-to-b from-blue-50/30 to-white py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-3 sm:mb-4">
                {t('services.title')}
              </h2>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-blue-400 mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Web-Mobile-Desktop Software */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('services.webMobile')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.webMobileDesc')}
                </p>
              </div>

              {/* Trainings */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('services.trainings')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.trainingsDesc')}
                </p>
              </div>

              {/* Corporate Solutions */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('services.corporateSolutions')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.corporateSolutionsDesc')}
                </p>
              </div>

              {/* Consultancy */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('services.consultancy')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.consultancyDesc')}
          </p>
        </div>
            </div>
          </div>
        </section>

        {/* Our Products section */}
        <section id="products" className="relative z-10 bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 flex items-center justify-center gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {t('products.title')}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 px-4">
                {t('products.subtitle')}
              </p>
              <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
            </div>

            {/* Products List - Single Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Risk Crews */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden border-b-4 border-b-blue-600">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{t('products.riskCrews')}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{t('products.riskCrewsSub')}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {t('products.riskCrewsDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Fuzzy Logic Algorithms</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Risk Scoring</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Real-Time Analysis</span>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-20 sm:w-24" />
                  </div>
                </div>
              </div>

              {/* Medi Crews */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden border-b-4 border-b-red-600">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{t('products.mediCrews')}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{t('products.mediCrewsSub')}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-600 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {t('products.mediCrewsDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Clinical Workflows</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Resource Management</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Patient Tracking System</span>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full w-20 sm:w-24" />
                  </div>
                </div>
              </div>

              {/* Hotel Crews */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden border-b-4 border-b-purple-600">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{t('products.hotelCrews')}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{t('products.hotelCrewsSub')}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {t('products.hotelCrewsDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Staff Management</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Guest Experience</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Room Service Automation</span>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full w-20 sm:w-24" />
                  </div>
                </div>
              </div>

              {/* Emlak Crews */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden border-b-4 border-b-green-600">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{t('products.emlakCrews')}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{t('products.emlakCrewsSub')}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-600 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {t('products.emlakCrewsDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Portfolio Management</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Market Analysis</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Valuation Tools</span>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full w-20 sm:w-24" />
                  </div>
                </div>
              </div>

              {/* DrMemories */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden border-b-4 border-b-orange-500">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{t('products.drMemories')}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{t('products.drMemoriesSub')}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {t('products.drMemoriesDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">NLP Technology</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Auto Documentation</span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">Voice Notes</span>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full w-20 sm:w-24" />
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>

        {/* References section */}
        <section id="references" className="relative z-10 bg-white py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                {t('references.title')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
                {t('references.subtitle')}
              </p>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </div>

            {/* Marquee Container */}
            <div className="overflow-hidden relative">
              <div className="flex marquee">
                {/* First set of references */}
                {[
                  "TechCorp", "InnovateLab", "DigitalFlow", "CloudSync", "DataVault",
                  "SmartSys", "NextGen", "FutureTech", "CodeBase", "DevWorks"
                ].map((name, index) => (
                  <div
                    key={name}
                    className="flex-shrink-0 mx-2 sm:mx-4 w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center p-3 sm:p-4 md:p-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">
                          {name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1">
                        {name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Reference {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  "TechCorp", "InnovateLab", "DigitalFlow", "CloudSync", "DataVault",
                  "SmartSys", "NextGen", "FutureTech", "CodeBase", "DevWorks"
                ].map((name, index) => (
                  <div
                    key={`duplicate-${name}`}
                    className="flex-shrink-0 mx-2 sm:mx-4 w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center p-3 sm:p-4 md:p-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">
                          {name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1">
                        {name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Reference {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="relative z-10 bg-gradient-to-b from-white to-blue-50/30 py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">{t('contact.title')}</h2>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-teal-500 mx-auto rounded-full" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Section - Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                {/* Main Campus Card */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 sm:mb-6">{t('contact.mainCampus')}</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-gray-800 mb-1">{t('contact.address')}</p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          AKFIRAT MAH. FATIH SULTAN MEHMET BLV. NO: 3 İÇ KAPI NO: 60 TUZLA/ ISTANBUL İstanbul, Türkiye
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-gray-800 mb-1">{t('contact.phone')}</p>
                        <p className="text-xs sm:text-sm text-gray-600">(0216) 206 03 10</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-gray-800 mb-1">{t('contact.email')}</p>
                        <p className="text-xs sm:text-sm text-gray-600 break-all">medeniyetteknopark@emeceyazilim.com.tr</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Office Card */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{t('contact.centralOffice')}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t('contact.centralOfficeDesc')}
                  </p>
                </div>
              </div>

              {/* Right Section - Google Map */}
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1234567890123!2d29.1234567!3d40.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8b8b8b8b8b9%3A0x1234567890abcdef!2sAKFIRAT%20MAH.%20FATIH%20SULTAN%20MEHMET%20BLV.%20NO%3A%203%20%C4%B0%C3%87%20KAPI%20NO%3A%2060%20TUZLA%2F%20ISTANBUL!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg w-full"
                    title="Company Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
