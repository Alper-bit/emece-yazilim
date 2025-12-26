"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const sections = [
    { id: "mission", title: t('aboutPage.mission.title'), desc: t('aboutPage.mission.description'), code: t('common.coreMission') },
    { id: "vision", title: t('aboutPage.vision.title'), desc: t('aboutPage.vision.description'), code: t('common.futureVision') },
    { id: "goal", title: t('aboutPage.goal.title'), desc: t('aboutPage.goal.description'), code: t('common.strategicGoal') }
  ];

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="relative min-h-full bg-background">
      <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none" />
      
      <main className="max-w-[1600px] mx-auto p-8 lg:p-20 relative z-10">
        {/* Header - Engineering Dossier */}
        <div className="precision-border glass-panel mb-32 p-12 lg:p-24 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-sans text-[9px] opacity-20 uppercase tracking-[0.3em] border-l border-b border-border font-bold">
            {t('common.corporateProfile')}
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-16">
            <div className="space-y-8 flex-1">
              <span className="font-sans text-accent text-sm font-black tracking-[0.4em] uppercase block underline underline-offset-8 decoration-accent/20">{t('common.operationalStandards')}</span>
              <h1 className="text-5xl md:text-7xl font-sans font-black uppercase leading-[0.8] tracking-tighter">
                {t('aboutPage.title')}
              </h1>
              <p className="max-w-2xl font-sans text-2xl text-slate-500 font-medium italic">
                {t('common.refinedApproach')}
              </p>
            </div>
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="grid grid-cols-1 gap-12">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id} 
              className="bg-white/50 border border-border group scroll-mt-32 p-12 lg:p-20 hover:bg-white transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              
              <div className="grid lg:grid-cols-12 gap-16 relative">
                <div className="lg:col-span-3 space-y-6">
                   <div className="font-sans text-xs text-accent font-black tracking-[0.4em] mb-4">{section.code}</div>
                   <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
                   <div className="font-sans text-[9px] text-slate-300 uppercase tracking-widest pt-4">{t('common.statusVerified')}</div>
                </div>
                
                <div className="lg:col-span-9 space-y-12">
                  <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {section.title}
                  </h2>
                  <p className="font-sans text-xl text-slate-500 leading-relaxed max-w-3xl border-l-4 border-slate-50 pl-12 font-medium">
                    {section.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-20 flex justify-between items-center font-sans text-[9px] opacity-40 uppercase tracking-[0.3em] border-t border-border pt-8 font-bold">
           <span>{t('common.professionalDocument')}</span>
           <span className="text-accent font-black">{t('common.emeceCollectiveConsultancy')}</span>
        </div>
      </main>
    </div>
  );
}
