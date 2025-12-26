"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full bg-background" />;
  
  return (
    <div className="relative h-full bg-background flex flex-col overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none" />
      
      <main className="max-w-[1600px] mx-auto px-8 lg:px-16 py-8 relative z-10 flex flex-col flex-1 overflow-hidden">
        {/* Contact Header - Compact */}
        <div className="mb-8 space-y-3 animate-reveal flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="font-sans text-accent text-[9px] font-black uppercase tracking-[0.4em]">{t('common.establishConnection')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase leading-[0.85] tracking-tighter">
            {t('contact.title')}
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-border border border-border glass-panel overflow-hidden flex-1 min-h-0">
          {/* Information Terminal */}
          <div className="lg:col-span-5 bg-white/50 p-8 lg:p-10 flex flex-col border-r border-border overflow-auto">
            <div className="space-y-8 flex-1">
              <div className="group">
                <span className="font-sans text-[8px] text-slate-300 uppercase font-black block mb-3 tracking-[0.4em]">{t('common.campusLocation')}</span>
                <h3 className="text-2xl lg:text-3xl font-sans font-black uppercase mb-4 tracking-tight">{t('contact.mainCampus')}</h3>
                <p className="font-sans text-sm text-slate-500 font-medium leading-relaxed max-w-sm italic">
                  AKFIRAT MAH. FATIH SULTAN MEHMET BLV. NO: 3 İÇ KAPI NO: 60 TUZLA/ ISTANBUL
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-6 border-t border-slate-100">
                 <div className="space-y-2">
                    <span className="font-sans text-[8px] text-slate-300 uppercase font-black block tracking-[0.3em]">{t('contact.phone')}</span>
                    <p className="font-sans text-sm font-black text-slate-900 tracking-tighter">(0216) 206 03 10</p>
                 </div>
                 <div className="space-y-2">
                    <span className="font-sans text-[8px] text-slate-300 uppercase font-black block tracking-[0.3em]">{t('contact.email')}</span>
                    <p className="font-sans text-sm font-black text-slate-900 break-all lowercase leading-relaxed">medeniyetteknopark@emeceyazilim.com.tr</p>
                 </div>
              </div>
            </div>

            <div className="p-6 border-2 border-accent/10 bg-accent/5 space-y-4 relative overflow-hidden group mt-6 flex-shrink-0">
              <div className="util-label bg-accent text-white uppercase tracking-widest font-black text-[7px] px-2 py-0.5">{t('common.additionalInfo')}</div>
              <h3 className="font-sans text-lg font-black italic text-accent">{t('contact.centralOffice')}</h3>
              <p className="font-sans text-[9px] text-slate-500 leading-relaxed uppercase font-black tracking-widest">
                {t('contact.centralOfficeDesc')}
              </p>
            </div>
          </div>

          {/* Interactive Map Feed */}
          <div className="lg:col-span-7 bg-slate-50/50 p-4 flex flex-col min-h-[300px]">
            <div className="flex-1 border-4 border-white shadow-2xl relative group overflow-hidden">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1234567890123!2d29.1234567!3d40.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8b8b8b8b8b9%3A0x1234567890abcdef!2sAKFIRAT%20MAH.%20FATIH%20SULTAN%20MEHMET%20BLV.%20NO%3A%203%20%C4%B0%C3%87%20KAPI%20NO%3A%2060%20TUZLA%2F%20ISTANBUL!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                 width="100%"
                 height="100%"
                 style={{ border: 0, filter: 'saturate(0.4) contrast(1.1) brightness(1.05)' }}
                 allowFullScreen
                 loading="lazy"
               />
               
               {/* UI Feed Overlays */}
               <div className="absolute inset-0 pointer-events-none border border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
               <div className="absolute top-4 left-4 flex flex-col gap-1">
                 <div className="bg-slate-900 text-white font-sans text-[8px] px-2 py-0.5 font-black shadow-2xl uppercase tracking-widest">
                   {t('common.locationVerified')}
                 </div>
                 <div className="bg-accent text-white font-sans text-[8px] px-2 py-0.5 font-black shadow-2xl uppercase tracking-widest">
                   Tuzla / Istanbul
                 </div>
               </div>
               
               <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 shadow-2xl border border-accent/20">
                  <div className="status-dot" />
                  <span className="font-sans text-[8px] text-slate-800 font-black uppercase tracking-[0.2em]">{t('common.liveConnection')}</span>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
