"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function SafetyLabPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const isoStandards = [
    { id: "iso9001", title: t('services.iso9001'), description: t('services.iso9001Desc') },
    { id: "iso50001", title: t('services.iso50001'), description: t('services.iso50001Desc'), highlight: true },
    { id: "iso22000", title: t('services.iso22000'), description: t('services.iso22000Desc') },
    { id: "iso42001", title: t('services.iso42001'), description: t('services.iso42001Desc') },
    { id: "iso27001", title: t('services.iso27001'), description: t('services.iso27001Desc') },
    { id: "iso20000", title: t('services.iso20000'), description: t('services.iso20000Desc') },
    { id: "iso22301", title: t('services.iso22301'), description: t('services.iso22301Desc') },
    { id: "cbddo", title: t('services.cbddo'), description: t('services.cbddoDesc') }
  ];

  return (
    <div className="relative min-h-full bg-background">
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <section className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="space-y-4">
              <span className="font-sans text-accent text-xs font-black tracking-[0.4em] uppercase block underline underline-offset-8 decoration-accent/40">Resource Unit 02</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                {t('services.safetyLab')}
              </h1>
            </div>
            <div className="max-w-md text-white/40 text-lg leading-relaxed lg:text-right border-r border-accent/20 pr-8">
               Our commitment to global standards and safety excellence.
            </div>
          </section>

          {/* Standards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
            {isoStandards.map((standard, i) => (
              <div 
                key={standard.id} 
                className={`group p-8 bg-background hover:bg-accent/[0.02] transition-colors relative flex flex-col gap-8 animate-reveal ${
                  standard.highlight ? "border-2 border-accent/40 z-10" : ""
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className={`w-8 h-8 ${standard.highlight ? 'bg-accent' : 'bg-white/10'} rotate-45 group-hover:bg-accent transition-colors`} />
                  <span className="font-mono text-[10px] text-white/20 uppercase">Standard</span>
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {standard.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 group-hover:border-accent/20 transition-colors">
                  <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest">Certified Excellence</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Background Watermark */}
      <div className="fixed bottom-0 left-0 font-display text-[25vw] font-black text-white/[0.01] leading-none pointer-events-none select-none">
        SAFETY
      </div>
    </div>
  );
}
