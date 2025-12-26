"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function HorticulturalTherapyPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const course = t('services.horticulturalTherapy', { returnObjects: true }) as any;

  return (
    <div className="relative min-h-full bg-background">
      <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none" />
      
      <main className="max-w-[1600px] mx-auto p-8 lg:p-20 relative z-10">
        {/* Header - Course Identity */}
        <div className="precision-border glass-panel mb-12 p-12 lg:p-20 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-sans text-[9px] opacity-20 uppercase tracking-[0.3em] border-l border-b border-border font-bold">
            {t('common.professionalDevelopment')}
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <span className="font-sans text-accent text-xs font-black tracking-[0.4em] uppercase block underline underline-offset-8 decoration-accent/20">G&G {t('common.trainingProgram')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-sans font-black uppercase leading-[0.9] tracking-tighter text-slate-900">
                {course.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="space-y-2">
                  <span className="font-sans text-[9px] text-slate-400 uppercase font-black tracking-widest">{t('common.schedule')}</span>
                  <p className="font-sans text-lg font-bold text-slate-800 tracking-tight">{course.date}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-sans text-[9px] text-slate-400 uppercase font-black tracking-widest">{t('common.duration')}</span>
                  <p className="font-sans text-lg font-bold text-slate-800 tracking-tight">{course.duration}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-sans text-[9px] text-slate-400 uppercase font-black tracking-widest">{t('common.format')}</span>
                  <p className="font-sans text-lg font-bold text-accent tracking-tight uppercase">{course.type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Purpose */}
            <section className="bg-white/50 border border-border p-12 hover:bg-white transition-all duration-500 relative overflow-hidden group">
              <div className="util-label bg-slate-900 text-white uppercase tracking-widest font-black text-[8px] px-2 py-1">{t('common.missionProfile')}</div>
              <div className="space-y-6">
                <h2 className="text-3xl font-sans font-black uppercase tracking-tighter text-slate-800">{t('common.coursePurpose')}</h2>
                <p className="font-sans text-lg text-slate-500 leading-relaxed font-medium">
                  {course.purpose}
                </p>
              </div>
            </section>

            {/* Learning Goals */}
            <section className="bg-white/50 border border-border p-12 hover:bg-white transition-all duration-500 relative overflow-hidden group">
              <div className="util-label bg-accent text-white uppercase tracking-widest font-black text-[8px] px-2 py-1">{t('common.objectives')}</div>
              <div className="space-y-8">
                <h2 className="text-3xl font-sans font-black uppercase tracking-tighter text-slate-800">{t('common.learningGoals')}</h2>
                <ul className="space-y-6">
                  {course.learningGoals.map((goal: string, i: number) => (
                    <li key={i} className="flex gap-6 items-start group/item">
                      <span className="font-sans text-xs text-accent font-black pt-1">0{i+1}</span>
                      <p className="font-sans text-base text-slate-600 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors italic">
                        {goal}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Course Content */}
            <section className="space-y-px bg-border border border-border shadow-2xl shadow-slate-200/50">
              <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
                <h2 className="text-2xl font-sans font-black uppercase tracking-widest italic">{t('common.courseCurriculum')}</h2>
                <span className="font-sans text-[9px] opacity-40 uppercase tracking-widest">{t('common.detailedModules')}</span>
              </div>
              {course.content.map((module: any, i: number) => (
                <div key={i} className="bg-white p-12 hover:bg-accent/5 transition-all group relative">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <span className="font-sans text-xs text-accent font-black tracking-[0.4em] uppercase block mb-4">{module.module}</span>
                      <div className="w-12 h-0.5 bg-slate-100 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
                    </div>
                    <div className="lg:col-span-8">
                      <ul className="space-y-4">
                        {module.items.map((item: string, j: number) => (
                          <li key={j} className="font-sans text-sm text-slate-500 font-bold uppercase tracking-wider flex items-center gap-4">
                            <div className="w-1 h-1 bg-slate-200 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="lg:col-span-4 space-y-12">
            {/* Target Audience */}
            <div className="bg-slate-900 p-10 text-white space-y-8 relative overflow-hidden group">
              <span className="font-sans text-[9px] text-accent font-black tracking-[0.4em] uppercase block">{t('common.idealParticipants')}</span>
              <h3 className="text-3xl font-sans font-black uppercase tracking-tighter leading-none">{t('common.whoShouldAttend')}</h3>
              <p className="font-sans text-base text-white/60 leading-relaxed font-medium">
                {course.targetAudience}
              </p>
            </div>

            {/* Trainers */}
            <div className="precision-border glass-panel p-10 space-y-8">
              <span className="font-sans text-[9px] text-accent font-black tracking-[0.4em] uppercase block">{t('common.expertFaculty')}</span>
              <h3 className="text-2xl font-sans font-black uppercase tracking-tighter border-b border-border pb-4">{t('common.courseTrainers')}</h3>
              <ul className="space-y-6">
                {course.trainers.map((trainer: string, i: number) => (
                  <li key={i} className="space-y-1">
                    <p className="font-sans text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{trainer.split(',')[0]}</p>
                    <p className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">{trainer.split(',')[1]}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Info */}
            <div className="bg-accent text-white p-10 space-y-8 shadow-2xl shadow-accent/30 relative overflow-hidden">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-sans text-[9px] text-white/60 uppercase font-black tracking-widest">{t('common.courseFee')}</span>
                  <p className="text-4xl font-sans font-black tracking-tighter leading-none">{course.fee}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-sans text-[9px] text-white/60 uppercase font-black tracking-widest">{t('common.capacityLimit')}</span>
                  <p className="text-2xl font-sans font-black tracking-tighter leading-none">{course.capacity}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-white/20">
                  <span className="font-sans text-[9px] text-white/60 uppercase font-black tracking-widest">{t('common.evaluation')}</span>
                  <p className="text-lg font-sans font-black tracking-tighter leading-none italic uppercase">{course.evaluation}</p>
                </div>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white font-sans text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
                {t('common.registerNow')}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 flex justify-between items-center font-sans text-[9px] opacity-40 uppercase tracking-[0.3em] border-t border-border pt-8 font-bold">
           <span>{t('common.courseDocumentation')}</span>
           <span className="text-accent font-black">{t('common.emeceCollectiveEducation')}</span>
        </div>
      </main>
    </div>
  );
}

