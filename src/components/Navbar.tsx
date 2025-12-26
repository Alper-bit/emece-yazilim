"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <nav className="relative z-50 h-16 bg-white/80 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-[1600px] mx-auto h-full flex items-stretch">
          <div className="flex items-center px-8 border-r border-border/40">
            <div className="relative flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center font-sans font-black text-lg">E</div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm tracking-tighter leading-none">EMECE</span>
                <span className="font-sans text-[9px] text-accent font-black tracking-[0.2em] mt-0.5 uppercase"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const menuItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.aboutUs'), href: "/about" },
    { name: t('nav.ourProducts'), href: "/#products" },
    { name: t('nav.references'), href: "/#references" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const servicesHierarchy = [
    {
      title: t('services.training'),
      items: [
        {
          label: t('services.isgTraining'),
          subItems: [
            { label: t('services.trainingCalendar'), href: "/services/training/isg/calendar" },
            { label: t('services.courseDescriptionForm'), href: "/services/training/isg/form" }
          ]
        },
        {
          label: t('services.ggTraining'),
          subItems: [
            { label: t('services.trainingCalendar'), href: "/services/training/gg/horticultural-therapy" } // Using our new page here
          ]
        }
      ]
    },
    {
      title: t('services.consultation'),
      items: [
        { label: t('services.projectsList'), href: "/services/consultation/projects" }
      ]
    },
    {
      title: t('services.rnd'),
      items: [
        { label: t('services.publicationsList'), href: "/services/rnd/publications" }
      ]
    },
    {
      title: t('services.software'),
      items: [
        { label: t('services.products'), href: "/#products" }
      ]
    }
  ];

  return (
    <nav className="relative z-50 h-16 bg-white/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-[1600px] mx-auto h-full flex items-stretch">
        {/* Logo */}
        <Link href="/" className="flex items-center px-8 border-r border-border/40 group relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center font-sans font-black text-lg group-hover:bg-foreground group-hover:text-white transition-all">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tighter leading-none">EMECE</span>
              <span className="font-sans font-bold text-sm tracking-tighter leading-none">YAZILIM</span>
            </div>
                    </div>
                  </Link>

        {/* Navigation Items */}
        <div className="hidden lg:flex items-stretch flex-1">
          {/* Static Home & About */}
          {menuItems.slice(0, 2).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
              className={`flex items-center px-8 border-r border-border/20 group relative transition-colors ${
                pathname === item.href ? "text-accent" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase">{item.name}</span>
              {pathname === item.href && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-accent" />
              )}
                    </Link>
          ))}

          {/* Hierarchical Services Dropdown */}
          <div className="relative flex items-stretch" ref={dropdownRef}>
                <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center px-8 border-r border-border/20 group relative transition-colors ${
                servicesDropdownOpen ? "bg-slate-50 text-accent" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase">{t('nav.ourServices')}</span>
                <svg className={`w-3 h-3 transition-transform duration-500 ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-[800px] bg-white border border-border shadow-2xl animate-reveal overflow-hidden grid grid-cols-4 divide-x divide-slate-100">
                {servicesHierarchy.map((section, idx) => (
                  <div key={idx} className="p-8 space-y-6 bg-white hover:bg-slate-50 transition-colors">
                    <span className="font-sans text-[9px] text-accent font-black tracking-[0.3em] uppercase block border-b border-border pb-4">{section.title}</span>
                    <ul className="space-y-6">
                      {section.items.map((item: any, i) => (
                        <li key={i} className="space-y-3">
                          {item.href ? (
                      <Link
                        href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="font-sans text-xs font-bold text-slate-800 hover:text-accent transition-colors block uppercase tracking-widest"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <div className="space-y-3">
                              <span className="font-sans text-xs font-black text-slate-400 uppercase tracking-widest block">{item.label}</span>
                              <ul className="space-y-2 border-l border-slate-100 pl-4">
                                {item.subItems.map((sub: any, j: number) => (
                                  <li key={j}>
                                <Link
                                      href={sub.href}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="font-sans text-[10px] text-slate-500 hover:text-accent transition-colors block uppercase tracking-wider font-bold"
                                    >
                                      {sub.label}
                                </Link>
                                  </li>
                              ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                        </div>
                ))}
              </div>
            )}
          </div>

          {/* Remaining Static Items */}
          {menuItems.slice(2).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
              className={`flex items-center px-8 border-r border-border/20 group relative transition-colors ${
                pathname === item.href ? "text-accent" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase">{item.name}</span>
              {pathname === item.href && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-accent" />
              )}
                    </Link>
          ))}

          <div className="flex-1" />

          {/* Right Section */}
          <div className="flex items-stretch border-l border-border/40">
                <LanguageSwitcher />
              </div>
            </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden px-8 border-l border-border/40 flex items-center gap-3 group">
          <span className="font-sans text-[10px] font-black uppercase tracking-widest text-foreground/60">{t('common.menu')}</span>
          <div className="flex flex-col gap-1.5">
            <div className="w-5 h-[1.5px] bg-foreground group-hover:bg-accent transition-all" />
            <div className="w-3 h-[1.5px] bg-foreground group-hover:w-5 transition-all" />
          </div>
        </button>
      </div>
    </nav>
  );
}
