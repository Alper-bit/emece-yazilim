"use client";

import { useTranslation } from "react-i18next";

export default function MindLabPage() {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      title: t('services.course1Title'),
      description: t('services.course1Desc'),
      date: t('services.course1Date'),
      duration: t('services.course1Duration'),
      instructor: t('services.course1Instructor'),
      iconColor: "purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: t('services.course2Title'),
      description: t('services.course2Desc'),
      date: t('services.course2Date'),
      duration: t('services.course2Duration'),
      instructor: t('services.course2Instructor'),
      iconColor: "teal",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 3,
      title: t('services.course3Title'),
      description: t('services.course3Desc'),
      date: t('services.course3Date'),
      duration: t('services.course3Duration'),
      instructor: t('services.course3Instructor'),
      iconColor: "green",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 4,
      title: t('services.course4Title'),
      description: t('services.course4Desc'),
      date: t('services.course4Date'),
      duration: t('services.course4Duration'),
      instructor: t('services.course4Instructor'),
      iconColor: "orange",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  const stats = [
    {
      id: 1,
      value: t('services.statsCourses'),
      description: t('services.statsCoursesDesc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 2,
      value: t('services.statsSatisfaction'),
      description: t('services.statsSatisfactionDesc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      value: t('services.statsStudents'),
      description: t('services.statsStudentsDesc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const features = [
    {
      id: 1,
      title: t('services.featureTeaching'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      title: t('services.featureCertificate'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 3,
      title: t('services.featureSupport'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: t('services.featurePDU'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: t('services.featureInPerson'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: t('services.featureDuration'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; tag: string }> = {
      purple: { text: "text-purple-500", bg: "bg-purple-50", tag: "bg-purple-100 text-purple-700" },
      teal: { text: "text-teal-500", bg: "bg-teal-50", tag: "bg-teal-100 text-teal-700" },
      green: { text: "text-green-500", bg: "bg-green-50", tag: "bg-green-100 text-green-700" },
      orange: { text: "text-orange-500", bg: "bg-orange-50", tag: "bg-orange-100 text-orange-700" }
    };
    return colors[color] || { text: "text-gray-500", bg: "bg-gray-50", tag: "bg-gray-100 text-gray-700" };
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50/30 min-h-screen">
      <main className="relative z-10">
        <section className="pt-[60px] sm:pt-[73px] px-3 sm:px-4 py-2">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-3 sm:mb-4 flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                {t('services.mindLabTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                {t('services.mindLabSubtitle')}
              </p>
              <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </div>

            {/* Courses List - One per row */}
            <div className="flex flex-col gap-2">
              {courses.map((course) => {
                const colors = getColorClasses(course.iconColor);
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-shrink-0 ${colors.bg}`}>
                        <div className={`${colors.text} scale-75 sm:scale-100`}>
                          {course.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-teal-600 mb-2 leading-tight">
                          {course.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium ${colors.tag}`}>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {course.date}
                          </span>
                          <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium ${colors.tag}`}>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-3">
                          {course.instructor}
                        </p>
                        
                        {/* Statistics inside each card */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 pt-3 border-t border-gray-200">
                          {stats.map((stat) => (
                            <div
                              key={stat.id}
                              className="bg-gray-50 rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3"
                            >
                              <div className="flex-shrink-0 text-teal-500 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                                {stat.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-lg sm:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1">
                                  {stat.value}
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                                  {stat.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Features inside each card */}
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 pt-3 border-t border-gray-200">
                          {features.map((feature) => (
                            <div
                              key={feature.id}
                              className="flex flex-col items-center text-center"
                            >
                              <div className="text-pink-500 mb-0.5 sm:mb-1">
                                <div className="w-4 h-4 sm:w-6 sm:h-6">
                                  {feature.icon}
                                </div>
                              </div>
                              <p className="text-[9px] sm:text-xs text-gray-700 leading-tight">
                                {feature.title}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-end mt-3">
                          <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 hover:bg-teal-600 text-white transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
