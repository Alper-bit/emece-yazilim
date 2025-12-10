"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";


export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    aboutUs: false,
    ourServices: false,
    ourProducts: false,
  });

  const toggleMobileDropdown = (key: 'aboutUs' | 'ourServices' | 'ourProducts') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const aboutUsItems = [
    { name: t('about.mission'), href: "/about/mission" },
    { name: t('about.vision'), href: "/about/vision" },
    { name: t('about.goal'), href: "/about/goal" },
    { name: t('about.team'), href: "/about/team" },
  ];

  const ourServicesItems = [
    { name: t('services.safetyLab'), href: "/services/safety-lab" },
    { name: t('services.mindLab'), href: "/services/mind-lab" },
  ];

  const ourProductsItems = [
    { name: t('services.training'), href: "/products/training" },
    { name: t('services.academia'), href: "/products/academia" },
    { name: t('services.courses'), href: "/products/courses" },
    { name: t('services.software'), href: "/products/software" },
  ];

  const simpleMenuItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.references'), href: "/references" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <NavigationMenu.Root className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black relative">
      <NavigationMenu.List className="relative flex w-full items-center justify-between gap-2 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-3 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            {/* Abstract logo graphic - interlocking S/Z shapes */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded flex items-center justify-center relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="text-white"
              >
                {/* Interlocking S/Z shapes */}
                <path
                  d="M6 8 L14 4 L22 8 L22 12 L14 16 L6 12 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M6 16 L14 12 L22 16 L22 20 L14 24 L6 20 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Horizontal lines */}
                <line
                  x1="8"
                  y1="10"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="8"
                  y1="14"
                  x2="20"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="8"
                  y1="18"
                  x2="20"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* Logo text */}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-600 leading-tight">emece</span>
              <span className="text-[10px] sm:text-xs font-normal text-gray-500 dark:text-gray-400 tracking-wider">YAZILIM</span>
            </div>
          </Link>
        </div>

        {/* Navigation items container - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
          {/* Home */}
        {simpleMenuItems
          .filter((item) => item.href === "/")
          .map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                        <Link
                          href={item.href}
                          className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}

        {/* About Us Dropdown */}
        <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={`group flex items-center gap-1 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
              pathname?.startsWith("/about")
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
          >
            {t('nav.aboutUs')}
            <ChevronDownIcon
              className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-in data-[motion=from-start]:animate-out data-[motion=from-start]:fade-out data-[motion=from-end]:fade-in data-[motion=from-start]:zoom-out-95 data-[motion=from-end]:zoom-in-95 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 sm:w-[540px]">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-4 grid">
                <NavigationMenu.Link asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px_var(--focus)]"
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
                      {t('nav.aboutUs')}
                    </div>
                    <p className="text-sm leading-[1.3] text-gray-600 dark:text-gray-400">
                      {t('aboutUs.description1')}
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
              {aboutUsItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="row-span-1">
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={`block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors ${
                          isActive
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Our Services Dropdown */}
        <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={`group flex items-center gap-1 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
              pathname?.startsWith("/services")
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
          >
            {t('nav.ourServices')}
            <ChevronDownIcon
              className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-in data-[motion=from-start]:animate-out data-[motion=from-start]:fade-out data-[motion=from-end]:fade-in data-[motion=from-start]:zoom-out-95 data-[motion=from-end]:zoom-in-95 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 sm:w-[540px]">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-2 grid">
                <NavigationMenu.Link asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px_var(--focus)]"
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
                      {t('nav.ourServices')}
                    </div>
                    <p className="text-sm leading-[1.3] text-gray-600 dark:text-gray-400">
                      {t('services.subtitle')}
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
              {ourServicesItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="row-span-1">
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={`block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors ${
                          isActive
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Our Products Dropdown */}
        <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={`group flex items-center gap-1 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
              pathname?.startsWith("/products")
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
          >
            {t('nav.ourProducts')}
            <ChevronDownIcon
              className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-in data-[motion=from-start]:animate-out data-[motion=from-start]:fade-out data-[motion=from-end]:fade-in data-[motion=from-start]:zoom-out-95 data-[motion=from-end]:zoom-in-95 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 sm:w-[540px]">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-4 grid">
                <NavigationMenu.Link asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px_var(--focus)]"
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('products');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
                      {t('nav.ourProducts')}
                    </div>
                    <p className="text-sm leading-[1.3] text-gray-600 dark:text-gray-400">
                      {t('products.subtitle')}
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
              {ourProductsItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="row-span-1">
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={`block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors ${
                          isActive
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Other simple menu items */}
        {simpleMenuItems
          .filter((item) => item.href !== "/")
          .map((item) => {
            const isActive = pathname === item.href;
            const isProducts = item.href === "/products" || item.href === "#products";
            const isReferences = item.href === "/references" || item.href === "#references";
            const isContact = item.href === "/contact" || item.href === "#contact";
            const scrollTarget = isProducts ? "products" : isReferences ? "references" : isContact ? "contact" : null;
            
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={scrollTarget ? `#${scrollTarget}` : item.href}
                    onClick={scrollTarget ? (e) => {
                      e.preventDefault();
                      const element = document.getElementById(scrollTarget);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    } : undefined}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
        </div>

        {/* Language Switcher - Hidden on mobile */}
        <div className="hidden lg:flex flex-shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </NavigationMenu.List>

      {/* Mobile Menu - Fixed positioning with overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[60px] sm:top-[73px]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="lg:hidden fixed left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50 overflow-y-auto top-[60px] sm:top-[73px] max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-73px)]">
            <div className="px-4 py-4 space-y-2">
              {/* Home */}
              {simpleMenuItems
                .filter((item) => item.href === "/")
                .map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

              {/* About Us Dropdown */}
              <div className="flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex-1 text-left"
                >
                  {t('nav.aboutUs')}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileDropdown('aboutUs');
                  }}
                  className="ml-2 p-1"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdowns.aboutUs ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileDropdowns.aboutUs && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  {aboutUsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdowns({ aboutUs: false, ourServices: false, ourProducts: false });
                      }}
                      className="block px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Our Services Dropdown */}
              <div className="flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex-1 text-left"
                >
                  {t('nav.ourServices')}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileDropdown('ourServices');
                  }}
                  className="ml-2 p-1"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdowns.ourServices ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileDropdowns.ourServices && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  {ourServicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdowns({ aboutUs: false, ourServices: false, ourProducts: false });
                      }}
                      className="block px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Our Products Dropdown */}
              <div className="flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.getElementById('products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex-1 text-left"
                >
                  {t('nav.ourProducts')}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileDropdown('ourProducts');
                  }}
                  className="ml-2 p-1"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdowns.ourProducts ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileDropdowns.ourProducts && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  {ourProductsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdowns({ aboutUs: false, ourServices: false, ourProducts: false });
                      }}
                      className="block px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* References */}
              {simpleMenuItems
                .filter((item) => item.href === "/references")
                .map((item) => {
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const element = document.getElementById('references');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      {item.name}
                    </button>
                  );
                })}

              {/* Contact */}
              {simpleMenuItems
                .filter((item) => item.href === "/contact")
                .map((item) => {
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      {item.name}
                    </button>
                  );
                })}

              {/* Language Switcher for Mobile */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="perspective-[2000px] absolute top-full left-1/2 -translate-x-1/2 hidden lg:block">
        <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
}

