"use client";

import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        aria-label="Change language"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="uppercase font-semibold">{locale.split('-')[0]}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50 overflow-hidden">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ${
              locale === 'en' || locale.startsWith('en') ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {t('language.english')}
          </button>
          <button
            onClick={() => handleLanguageChange('tr')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ${
              locale === 'tr' || locale.startsWith('tr') ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {t('language.turkish')}
          </button>
        </div>
      )}
    </div>
  );
}


