"use client";

import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (newLocale: 'en' | 'tr') => {
    i18n.changeLanguage(newLocale);
    setIsOpen(false);
  };

  const locale = i18n.language || 'en';
  const currentLang = mounted ? locale.split('-')[0].toUpperCase() : 'EN';

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-full px-8 flex items-center gap-4 font-sans text-[10px] font-black tracking-[0.2em] transition-all ${
          isOpen ? "bg-accent text-white" : "hover:text-accent text-slate-400"
        }`}
        aria-label="Toggle system language"
      >
        <span className="opacity-60">LANG:</span>
        <span>{currentLang}</span>
        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-success'} animate-pulse`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-px w-56 bg-white border border-border shadow-2xl z-50 animate-reveal text-slate-900">
          <div className="bg-slate-50 text-slate-400 px-4 py-2 font-sans text-[8px] uppercase font-black tracking-[0.3em]">Select Module</div>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full px-6 py-4 text-left font-sans text-[10px] uppercase font-black tracking-widest hover:bg-accent hover:text-white transition-colors flex justify-between items-center ${
              currentLang === 'EN' ? 'text-accent' : 'text-slate-600'
            }`}
          >
            {t('language.english')}
            {currentLang === 'EN' && <span className="text-[8px] opacity-40 underline decoration-accent underline-offset-4">[ACTIVE]</span>}
          </button>
          <div className="h-px bg-slate-100" />
          <button
            onClick={() => handleLanguageChange('tr')}
            className={`w-full px-6 py-4 text-left font-sans text-[10px] uppercase font-black tracking-widest hover:bg-accent hover:text-white transition-colors flex justify-between items-center ${
              currentLang === 'TR' ? 'text-accent' : 'text-slate-600'
            }`}
          >
            {t('language.turkish')}
            {currentLang === 'TR' && <span className="text-[8px] opacity-40 underline decoration-accent underline-offset-4">[ACTIVE]</span>}
          </button>
        </div>
      )}
    </div>
  );
}
