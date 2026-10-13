"use client";

import { useState, useRef, useEffect } from "react";
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
  Check,
  ShieldCheck,
  LogOut,
  User,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useAuth } from "@/context/auth-context";
import { Language } from "@/lib/translations";

const languages: { code: Language; name: string; label: string }[] = [
  { code: "en", name: "English", label: "English" },
  { code: "hi", name: "Hindi", label: "हिन्दी" },
  { code: "te", name: "Telugu", label: "తెలుగు" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { language, setLanguage, t } = useLanguage();
  const { user, isAdmin, logout } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: t("browseEquipment"), href: "/equipment" },
    { label: t("howItWorks"), href: "/#how-it-works" },
    { label: t("listEquipment"), href: "/list-equipment" },
    { label: t("dashboard"), href: "/dashboard" },
    { label: t("designSystem"), href: "/styleguide", icon: Palette },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

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
                {t("farmMachinerySharing")}
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
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* ADMIN DASHBOARD ICON & BUTTON (Shown when logged in with chowdaryu24@gmail.com) */}
            {isAdmin && (
              <Link
                href="/admin"
                id="admin-dashboard-link"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-xs shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 hover:scale-105 transition-all border border-amber-400 cursor-pointer"
                title="Enter Admin Dashboard"
              >
                <ShieldCheck className="h-4 w-4 fill-stone-950 text-amber-300 shrink-0" />
                <span className="hidden sm:inline">{t("adminDashboard")}</span>
                <span className="bg-stone-950 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                  ADMIN
                </span>
              </Link>
            )}

            {/* Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                id="language-switcher-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Change Language"
                aria-expanded={langMenuOpen}
              >
                <Globe className="h-3.5 w-3.5 text-[#166534] dark:text-emerald-400" />
                <span className="font-semibold">{currentLangObj.label}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white p-1.5 shadow-xl border border-stone-200 dark:bg-stone-900 dark:border-stone-800 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        language === lang.code
                          ? "bg-emerald-50 text-[#166534] dark:bg-emerald-950/80 dark:text-emerald-300 font-bold"
                          : "text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      )}
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

            {/* Desktop Auth Section */}
            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <User className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="max-w-[120px] truncate">{user.name || user.email.split("@")[0]}</span>
                </div>
                <Button
                  onClick={() => logout()}
                  variant="ghost"
                  size="sm"
                  className="font-semibold text-xs text-stone-600 hover:text-red-600"
                  title="Sign out"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="font-semibold text-xs">
                    {t("login")}
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" variant="default" className="font-bold text-xs">
                    {t("signup")}
                  </Button>
                </Link>
              </div>
            )}

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
            {/* Mobile Admin Banner (Shown when chowdaryu24@gmail.com is logged in) */}
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="mb-3 flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-sm shadow-md"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 fill-stone-950 text-amber-300" />
                  {t("adminDashboard")}
                </span>
                <span className="text-[10px] font-black uppercase bg-stone-950 text-amber-400 px-2 py-0.5 rounded-md tracking-wider">
                  ADMIN CONSOLE
                </span>
              </Link>
            )}

            {/* Mobile Language Switcher Row */}
            <div className="mb-4 pb-3 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-300">
                <Globe className="h-4 w-4 text-[#166534] dark:text-emerald-400" />
                <span>Select Language:</span>
              </div>
              <div className="flex items-center gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-colors ${
                      language === lang.code
                        ? "bg-[#166534] text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

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
                  <Phone className="h-3.5 w-3.5 text-[#166534]" /> {t("tollFreeSupport")}
                </span>
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  1800-120-FARM
                </span>
              </div>

              {user ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-100 dark:bg-stone-800 mt-2">
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">
                    {user.email}
                  </span>
                  <Button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs font-bold text-red-600"
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full text-xs font-bold">
                      {t("login")}
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileOpen(false)}>
                    <Button variant="default" className="w-full text-xs font-bold">
                      {t("signup")}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
