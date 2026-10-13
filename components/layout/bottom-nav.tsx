"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Calendar, MessageSquare, User } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { label: t("home"), href: "/", icon: Home },
    { label: t("search"), href: "/equipment", icon: Search },
    { label: t("bookings"), href: "/dashboard", icon: Calendar },
    { label: t("list"), href: "/list-equipment", icon: MessageSquare },
    { label: t("account"), href: "/login", icon: User },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center min-h-[48px] py-1 transition-colors ${
                isActive
                  ? "text-emerald-800 dark:text-emerald-400 font-semibold"
                  : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-transform ${
                  isActive ? "bg-emerald-50 dark:bg-emerald-950/60 scale-110" : ""
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[11px] leading-tight mt-0.5 tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
