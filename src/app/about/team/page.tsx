"use client";

import { useTranslation } from "react-i18next";

export default function TeamPage() {
  const { t } = useTranslation();

  // Team members data - can be replaced with actual team member information
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "CEO & Founder",
      description: "Leading our vision and strategic direction",
      color: "blue"
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "CTO",
      description: "Driving innovation and technical excellence",
      color: "orange"
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Lead Developer",
      description: "Building cutting-edge solutions",
      color: "purple"
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Project Manager",
      description: "Ensuring successful project delivery",
      color: "teal"
    },
    {
      id: 5,
      name: "Team Member 5",
      role: "Senior Consultant",
      description: "Providing expert guidance and support",
      color: "green"
    },
    {
      id: 6,
      name: "Team Member 6",
      role: "UI/UX Designer",
      description: "Creating beautiful and intuitive experiences",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-600"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-600"
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-600",
        border: "border-teal-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-600"
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        border: "border-pink-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
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
        {/* Team section */}
        <section className="relative z-10 bg-gradient-to-b from-white to-blue-50/30 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                {t('team.title')}
              </h2>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                {t('team.subtitle')}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4 mt-3 sm:mt-4">
                {t('team.description')}
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member) => {
                const colors = getColorClasses(member.color);
                return (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Avatar */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-24 h-24 ${colors.bg} rounded-full flex items-center justify-center border-4 ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className={`text-sm font-semibold ${colors.text} text-center mb-3`}>
                      {member.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {member.description}
                    </p>

                    {/* Decorative line */}
                    <div className={`mt-4 h-1 rounded-full ${
                      member.color === 'blue' ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' :
                      member.color === 'orange' ? 'bg-gradient-to-r from-transparent via-orange-400 to-transparent' :
                      member.color === 'purple' ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' :
                      member.color === 'teal' ? 'bg-gradient-to-r from-transparent via-teal-400 to-transparent' :
                      member.color === 'green' ? 'bg-gradient-to-r from-transparent via-green-400 to-transparent' :
                      'bg-gradient-to-r from-transparent via-pink-400 to-transparent'
                    }`} />
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

