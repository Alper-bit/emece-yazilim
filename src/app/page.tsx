"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Home() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="relative bg-background">
      {/* Hero Section - Precision Engineered Header */}
      <header className="relative border-b border-border/40 min-h-[calc(100vh-64px)] flex flex-col justify-center px-8 lg:px-20 overflow-hidden">
        {/* Background Engineering Elements */}
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center gap-6 animate-reveal">
                <div className="flex items-center gap-2 px-3 py-1 border-l-2 border-accent text-accent font-sans text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  {t('common.standardExcellence')}
        </div>
                <span className="font-sans text-[10px] text-foreground/30 uppercase tracking-[0.2em]">{t('common.excellenceInCraft')}</span>
      </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] font-sans font-black leading-[0.75] tracking-tighter text-slate-900 reveal-shutter pb-4">
                {t('home.title')}
                <span className="block text-accent italic opacity-90 font-sans mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[4vw]">{t('home.subtitle')}</span>
          </h1>

              <div className="max-w-2xl flex gap-12 items-start animate-reveal" style={{ animationDelay: '200ms' }}>
                <div className="w-px h-24 bg-accent/20 flex-shrink-0 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent" />
                </div>
                <div className="space-y-8">
                  <p className="font-sans text-xl text-slate-500 leading-relaxed font-medium">
                    {t('home.description')}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Link href="#services" className="group relative px-10 py-5 bg-slate-900 text-white font-sans text-xs font-black overflow-hidden transition-all hover:pr-14 hover:bg-accent shadow-2xl shadow-slate-900/20 uppercase tracking-widest">
                      <span className="relative z-10">{t('common.discoverServices')}</span>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
                    </Link>
                    <Link href="/contact" className="px-10 py-5 border-2 border-slate-200 font-sans text-xs font-black hover:border-slate-900 transition-all uppercase tracking-widest bg-white">
                      {t('common.getInTouch')}
                    </Link>
                </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block animate-reveal" style={{ animationDelay: '400ms' }}>
              <div className="grid grid-cols-1 gap-px bg-border border border-border glass-panel">
                 {[
                   { label: t('common.consultancy'), val: "100+", sub: t('common.successfulProjects') },
                   { label: t('common.experience'), val: "15+", sub: t('common.yearsOfPractice') },
                   { label: t('common.reliability'), val: "98%", sub: t('common.clientSatisfaction') }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white/50 p-10 group hover:bg-white transition-colors">
                     <span className="block font-sans text-[9px] text-accent font-black tracking-[0.3em] uppercase mb-4">{stat.label}</span>
                     <div className="flex items-baseline justify-between">
                       <span className="font-sans text-6xl font-black text-slate-900">{stat.val}</span>
                       <span className="font-sans text-[10px] text-slate-400 uppercase tracking-[0.1em] max-w-[80px] text-right leading-none">{stat.sub}</span>
                  </div>
                </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Precision Markers */}
        <div className="absolute top-0 left-0 w-24 h-24 border-r border-b border-border/40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-l border-t border-border/40 pointer-events-none" />
      </header>

      {/* Services - Grid of Components */}
      <section id="services" className="py-32 px-8 lg:px-20 bg-slate-50/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24 border-b border-border pb-12">
            <div className="space-y-4">
              <span className="font-sans text-accent text-xs font-black tracking-[0.5em] uppercase block">{t('common.serviceUnits')}</span>
              <h2 className="text-6xl font-sans font-black text-slate-900 tracking-tighter uppercase">{t('services.title')}</h2>
            </div>
            <div className="max-w-md font-sans text-lg text-slate-400 text-right italic font-medium">
              {t('services.subtitle')}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "01", title: t('services.training'), desc: t('services.trainingDesc'), tag: t('common.strategicLearning') },
              { id: "02", title: t('services.consultationRndProjects'), desc: t('services.consultationRndProjectsDesc'), tag: t('common.innovationSync') },
              { id: "03", title: t('services.programmingSoftware'), desc: t('services.programmingSoftwareDesc'), tag: t('common.digitalCraft') }
            ].map((s) => (
              <div key={s.id} className="precision-border p-12 bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all group flex flex-col gap-16">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 border border-slate-100 flex items-center justify-center font-sans text-xs font-black text-accent bg-slate-50">
                    {s.id}
                  </div>
                  <span className="font-sans text-[9px] font-black text-slate-300 tracking-[0.3em] group-hover:text-accent transition-colors uppercase">{s.tag}</span>
              </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-sans font-black text-slate-800 tracking-tight leading-none">{s.title}</h3>
                  <p className="font-sans text-base text-slate-500 leading-relaxed font-medium">{s.desc}</p>
              </div>

                <div className="mt-auto flex items-center justify-between">
                   <div className="h-0.5 bg-border flex-1 mr-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                   <button className="w-12 h-12 border-2 border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                     <span className="font-mono text-lg font-bold">→</span>
                   </button>
                </div>
              </div>
            ))}
                      </div>
                    </div>
      </section>

      {/* Product Highlight - Machine Catalog */}
      <section id="products" className="py-32 px-8 lg:px-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 blueprint-bg opacity-10 mask-radial" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex justify-between items-baseline mb-24 border-b border-white/10 pb-8">
            <h2 className="text-6xl font-sans font-black uppercase tracking-tighter italic">{t('common.featuredSolutions')}</h2>
            <span className="font-sans text-[10px] text-accent font-black tracking-[0.4em] uppercase">{t('common.corporatePortfolio')}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
            {[
              { name: t('products.riskCrews'), sub: t('products.riskCrewsSub'), desc: t('products.riskCrewsDesc'), code: t('common.riskManagement') },
              { name: t('products.mediCrews'), sub: t('products.mediCrewsSub'), desc: t('products.mediCrewsDesc'), code: t('common.healthSystems') },
              { name: t('products.hotelCrews'), sub: t('products.hotelCrewsSub'), desc: t('products.hotelCrewsDesc'), code: t('common.serviceAutomation') },
              { name: t('products.emlakCrews'), sub: t('products.emlakCrewsSub'), desc: t('products.emlakCrewsDesc'), code: t('common.realEstate') }
            ].map((p, i) => (
              <div key={i} className="lg:col-span-6 p-12 bg-slate-900 hover:bg-slate-800 transition-all group border-b border-r border-white/10">
                <div className="flex flex-col gap-10">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[10px] text-accent font-black uppercase tracking-widest">{p.code}</span>
                    <span className="font-sans text-[8px] text-white/20 tracking-[0.2em] uppercase group-hover:text-white transition-colors underline underline-offset-4 decoration-accent">{t('common.verifiedSolution')}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-5xl font-sans font-black tracking-tighter uppercase">{p.name}</h3>
                    <p className="font-sans text-base text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">{p.desc}</p>
                  </div>
                  <Link href="#" className="self-start font-sans text-xs font-black text-accent hover:text-white flex items-center gap-4 transition-all hover:gap-8 uppercase tracking-widest">
                    {t('common.solutionDetails')} <span className="text-2xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References - Elegant Stream */}
      <section id="references" className="py-24 border-y border-border bg-white">
        <div className="marquee-content gap-24">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
                {[
                  "TechCorp", "InnovateLab", "DigitalFlow", "CloudSync", "DataVault",
                  "SmartSys", "NextGen", "FutureTech", "CodeBase", "DevWorks"
              ].map((ref) => (
                <div key={ref} className="flex items-center gap-10">
                  <span className="font-sans text-4xl font-black italic tracking-tighter uppercase whitespace-nowrap text-slate-200 hover:text-accent transition-colors duration-500 cursor-default">
                    {ref}
                        </span>
                  <div className="w-2 h-2 border border-accent/20 rotate-45" />
                  </div>
                ))}
                  </div>
                ))}
              </div>
      </section>

      {/* Final CTA - Precision Contact */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col items-center text-center">
           <div className="w-20 h-0.5 bg-accent mb-12 animate-pulse" />
           <h2 className="text-7xl md:text-[10vw] font-sans font-black tracking-tighter uppercase leading-[0.8] mb-12">
             {t('common.evolve')} <br/><span className="text-accent italic">{t('common.readyTo')}</span>
           </h2>
           <Link 
             href="/contact"
             className="group relative px-20 py-8 bg-slate-900 text-white font-sans text-xl font-black overflow-hidden shadow-2xl shadow-accent/20 hover:scale-105 transition-all uppercase tracking-widest"
           >
             <span className="relative z-10">{t('common.startYourJourney')}</span>
             <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           </Link>
           <div className="mt-12 font-sans text-[10px] text-slate-300 uppercase tracking-[0.3em] font-bold">
             {t('common.refiningExcellence')}
           </div>
        </div>
      </section>
    </div>
  );
}
