"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function MindLabPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const courses = [
    {
      id: 1,
      title: t('services.course1Title'),
      description: t('services.course1Desc'),
      date: t('services.course1Date'),
      duration: t('services.course1Duration'),
      instructor: t('services.course1Instructor'),
      number: "01"
    },
    {
      id: 2,
      title: t('services.course2Title'),
      description: t('services.course2Desc'),
      date: t('services.course2Date'),
      duration: t('services.course2Duration'),
      instructor: t('services.course2Instructor'),
      number: "02"
    },
    {
      id: 3,
      title: t('services.course3Title'),
      description: t('services.course3Desc'),
      date: t('services.course3Date'),
      duration: t('services.course3Duration'),
      instructor: t('services.course3Instructor'),
      number: "03"
    },
    {
      id: 4,
      title: t('services.course4Title'),
      description: t('services.course4Desc'),
      date: t('services.course4Date'),
      duration: t('services.course4Duration'),
      instructor: t('services.course4Instructor'),
      number: "04"
    }
  ];

  return (
    <div className="relative min-h-full bg-background">
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <section className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="space-y-4">
              <span className="font-sans text-accent text-xs font-black tracking-[0.4em] uppercase block underline underline-offset-8 decoration-accent/40">Resource Unit 01</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                {t('services.mindLabTitle')}
              </h1>
            </div>
            <p className="max-w-md text-white/40 text-lg leading-relaxed lg:text-right border-r border-accent/20 pr-8">
              {t('services.mindLabSubtitle')}
            </p>
          </section>

          {/* Courses Grid */}
          <div className="grid lg:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
            {courses.map((course, i) => (
              <div 
                key={course.id} 
                className="group p-12 bg-background hover:bg-accent/[0.02] transition-colors relative flex flex-col gap-12 animate-reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-accent text-5xl font-black opacity-10 group-hover:opacity-100 transition-opacity duration-500 italic">
                    {course.number}
                  </span>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="font-mono text-[10px] text-accent border border-accent/20 px-2 py-0.5">{course.date}</span>
                    <span className="font-mono text-[10px] text-white/40 uppercase">{course.duration}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed min-h-[4.5rem]">
                    {course.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-tighter">Instructor</span>
                    <span className="font-display font-bold text-sm text-white/80">{course.instructor}</span>
                  </div>
                  <button className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Watermark */}
      <div className="fixed top-0 right-0 font-display text-[25vw] font-black text-white/[0.01] leading-none pointer-events-none select-none">
        MIND
      </div>
    </div>
  );
}
