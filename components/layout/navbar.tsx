"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Tractor,
  Menu,
  X,
  Globe,
  Bell,
  Search,
  Sparkles,
  Phone,
  HelpCircle,
  Palette,
} from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "te", name: "తెలుగు" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Browse Equipment", href: "/equipment" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "List Equipment", href: "/list-equipment" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Design System", href: "/styleguide", icon: Palette },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-16 items-center justify-between rounded-2xl bg-white/95 px-5 shadow-sm backdrop-blur-md border border-stone-200/80 dark:bg-stone-900/90 dark:border-stone-800">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white shadow-sm transition-transform group-hover:scale-105 dark:bg-emerald-600">
              <Tractor className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#166534] dark:text-emerald-400 font-heading leading-tight flex items-center gap-1">
                KisanRent
                <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wide">
                FARM MACHINERY SHARING
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? "text-[#166534] bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold"
                      : "text-stone-700 hover:text-[#166534] hover:bg-stone-50 dark:text-stone-300 dark:hover:text-emerald-400 dark:hover:bg-stone-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
                aria-label="Change Language"
              >
                <Globe className="h-3.5 w-3.5 text-[#166534] dark:text-emerald-400" />
                <span>
                  {languages.find((l) => l.code === currentLang)?.name || "English"}
                </span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white p-1.5 shadow-lg border border-stone-200 dark:bg-stone-900 dark:border-stone-800 z-50 animate-in fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                        currentLang === lang.code
                          ? "bg-emerald-50 text-[#166534] dark:bg-emerald-950/80 dark:text-emerald-300"
                          : "text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <Link
              href="/dashboard"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
            </Link>

            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-semibold text-xs">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" variant="default" className="font-bold text-xs">
                  Sign up
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white/98 p-5 shadow-xl backdrop-blur-xl border border-stone-200/80 dark:bg-stone-900/98 dark:border-stone-800">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-stone-700 rounded-xl hover:bg-emerald-50 hover:text-[#166534] transition-colors dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-2 text-xs text-stone-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#166534]" /> Toll Free Support:
                </span>
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  1800-120-FARM
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full text-xs font-bold">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileOpen(false)}>
                  <Button variant="default" className="w-full text-xs font-bold">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
