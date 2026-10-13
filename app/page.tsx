"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EquipmentCard, type EquipmentItem } from "@/components/ui/equipment-card";
import { useLanguage } from "@/context/language-context";
import {
  Tractor,
  Search,
  MapPin,
  Calendar,
  Navigation,
  ShieldCheck,
  CreditCard,
  Clock,
  CheckCircle2,
  Users,
  Wheat,
  Droplets,
  Sprout,
  SprayCan,
  Cog,
  Truck,
  Plane,
  Star,
  ChevronDown,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Percent,
} from "lucide-react";

const featuredMachinery: EquipmentItem[] = [
  {
    id: "1",
    title: "Mahindra 575 DI Sarpanch 45HP Tractor",
    category: "Tractor",
    location: "Nashik, Maharashtra",
    distanceKm: 3.8,
    pricePerDay: 1800,
    pricePerHour: 280,
    rating: 4.9,
    reviewCount: 38,
    ownerName: "Rajesh Patil",
    isVerified: true,
    operatorIncluded: true,
    deliveryAvailable: true,
    badge: "Top Rated",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "John Deere W70 Multi-Crop Combine Harvester",
    category: "Harvester",
    location: "Amravati, Maharashtra",
    distanceKm: 9.2,
    pricePerDay: 4800,
    pricePerHour: 750,
    rating: 4.8,
    reviewCount: 29,
    ownerName: "Vijay Solanki",
    isVerified: true,
    operatorIncluded: true,
    deliveryAvailable: true,
    badge: "High Demand",
    imageUrl: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Kirloskar 7.5HP Heavy Diesel Water Pump",
    category: "Water Pump",
    location: "Pune, Maharashtra",
    distanceKm: 2.1,
    pricePerDay: 650,
    pricePerHour: 90,
    rating: 4.7,
    reviewCount: 44,
    ownerName: "Sunita Deshmukh",
    isVerified: true,
    operatorIncluded: false,
    deliveryAvailable: true,
    badge: "Available Today",
    imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Shaktiman 7-Feet Regular Rotary Tiller",
    category: "Rotavator",
    location: "Solapur, Maharashtra",
    distanceKm: 5.4,
    pricePerDay: 1300,
    pricePerHour: 210,
    rating: 4.9,
    reviewCount: 19,
    ownerName: "Anil Shinde",
    isVerified: true,
    operatorIncluded: false,
    deliveryAvailable: true,
    badge: null,
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [eqType, setEqType] = useState("all");
  const [location, setLocation] = useState("Nashik, MH");
  const [dates, setDates] = useState("");
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { name: t("catTractor"), icon: Tractor, count: `480+ ${t("availableCount")}`, desc: t("catTractorDesc"), href: "/equipment?category=tractor" },
    { name: t("catHarvester"), icon: Wheat, count: `160+ ${t("availableCount")}`, desc: t("catHarvesterDesc"), href: "/equipment?category=harvester" },
    { name: t("catWaterPump"), icon: Droplets, count: `310+ ${t("availableCount")}`, desc: t("catWaterPumpDesc"), href: "/equipment?category=water+pump" },
    { name: t("catRotavator"), icon: Cog, count: `210+ ${t("availableCount")}`, desc: t("catRotavatorDesc"), href: "/equipment?category=rotavator" },
    { name: t("catSeeder"), icon: Sprout, count: `125+ ${t("availableCount")}`, desc: t("catSeederDesc"), href: "/equipment?category=seeder" },
    { name: t("catSprayer"), icon: SprayCan, count: `190+ ${t("availableCount")}`, desc: t("catSprayerDesc"), href: "/equipment?category=sprayer" },
    { name: t("catDrone"), icon: Plane, count: `45+ ${t("availableCount")}`, desc: t("catDroneDesc"), href: "/equipment?category=drone" },
    { name: t("catTrailer"), icon: Truck, count: `140+ ${t("availableCount")}`, desc: t("catTrailerDesc"), href: "/equipment?category=trailer" },
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: Search,
    },
    {
      step: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
      icon: Calendar,
    },
    {
      step: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
      icon: CreditCard,
    },
    {
      step: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
      icon: Tractor,
    },
  ];

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
  ];

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(
      `/equipment?category=${encodeURIComponent(eqType)}&location=${encodeURIComponent(
        location
      )}`
    );
  }

  function handleUseLocation() {
    setIsDetectingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocation("Near You (GPS Detected)");
          setIsDetectingLocation(false);
        },
        () => {
          setLocation("District Center (Default)");
          setIsDetectingLocation(false);
        }
      );
    } else {
      setIsDetectingLocation(false);
    }
  }

  return (
    <div className="flex flex-col">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Farm Background Image with Authentic Warm Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
            alt="Indian agricultural fields at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.45] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-[#052E16]/85 to-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#052E16]/40 to-[#111311]/90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          {/* Trust Banner Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20 text-white shadow-sm mb-6 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-beacon" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              {t("govtBadge")}
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight max-w-4xl tracking-tight">
            {t("heroTitle1")}
            <span className="bg-gradient-to-r from-amber-400 via-emerald-200 to-green-300 bg-clip-text text-transparent">
              {t("heroTitleHighlight")}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-stone-200 max-w-2xl font-normal leading-relaxed">
            {t("heroSubtitle")}
          </p>

          {/* ================= PROMINENT SEARCH BAR ================= */}
          <div className="w-full max-w-4xl mt-8 sm:mt-10">
            <form
              onSubmit={handleSearchSubmit}
              className="rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-stone-900/95 p-3 sm:p-4 shadow-2xl backdrop-blur-xl border border-white/40 dark:border-stone-800 text-stone-800 dark:text-stone-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-2 items-center">
                {/* Equipment Type */}
                <div className="sm:col-span-4 flex flex-col text-left px-3 py-2 rounded-xl hover:bg-stone-100/70 dark:hover:bg-stone-800/60 transition-colors">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Tractor className="h-3.5 w-3.5 text-[#166534] dark:text-emerald-400" />
                    {t("equipmentType")}
                  </label>
                  <select
                    value={eqType}
                    onChange={(e) => setEqType(e.target.value)}
                    className="mt-1 bg-transparent text-sm font-bold text-stone-900 dark:text-stone-100 focus:outline-none cursor-pointer"
                  >
                    <option value="all">{t("allEquipment")}</option>
                    <option value="tractor">{t("tractorsCategory")}</option>
                    <option value="harvester">{t("harvestersCategory")}</option>
                    <option value="water pump">{t("waterPumpsCategory")}</option>
                    <option value="rotavator">{t("rotavatorsCategory")}</option>
                    <option value="seeder">{t("seedersCategory")}</option>
                    <option value="sprayer">{t("sprayersCategory")}</option>
                  </select>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-stone-200 dark:bg-stone-800" />

                {/* Location & GPS Button */}
                <div className="sm:col-span-4 flex flex-col text-left px-3 py-2 rounded-xl hover:bg-stone-100/70 dark:hover:bg-stone-800/60 transition-colors relative">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#166534] dark:text-emerald-400" />
                      {t("locationLabel")}
                    </span>
                    <button
                      type="button"
                      onClick={handleUseLocation}
                      disabled={isDetectingLocation}
                      className="text-[10px] font-bold text-[#166534] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Navigation className="h-3 w-3" />
                      {isDetectingLocation ? "Detecting..." : t("detectGps")}
                    </button>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter village, mandal, or PIN"
                    className="mt-1 bg-transparent text-sm font-bold text-stone-900 dark:text-stone-100 focus:outline-none placeholder:text-stone-400"
                  />
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-stone-200 dark:bg-stone-800" />

                {/* Dates & Search CTA */}
                <div className="sm:col-span-3 flex flex-col text-left px-3 py-2 rounded-xl hover:bg-stone-100/70 dark:hover:bg-stone-800/60 transition-colors">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#166534] dark:text-emerald-400" />
                    {t("whenNeed")}
                  </label>
                  <input
                    type="date"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="mt-1 bg-transparent text-sm font-bold text-stone-900 dark:text-stone-100 focus:outline-none cursor-pointer"
                  />
                </div>

                {/* Submit Action */}
                <div className="sm:col-span-12 lg:col-span-1 flex items-center justify-center pt-2 sm:pt-0">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto h-12 sm:h-13 px-6 rounded-xl font-extrabold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sm:hidden">{t("searchEquipmentBtn")}</span>
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick Links below search */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 text-xs font-semibold text-stone-200">
              <span className="text-stone-400">Popular:</span>
              <Link href="/equipment?category=tractor" className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline">
                🚜 {t("catTractor")}
              </Link>
              <Link href="/equipment?category=harvester" className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline">
                🌾 {t("catHarvester")}
              </Link>
              <Link href="/equipment?category=water+pump" className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline">
                💧 {t("catWaterPump")}
              </Link>
              <Link href="/equipment?category=rotavator" className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline">
                ⚙️ {t("catRotavator")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CATEGORIES GRID ===================== */}
      <section className="py-16 sm:py-24 bg-[#FAFAF7] dark:bg-[#111311] border-b border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
                {t("browseCategories")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-heading mt-1">
                {t("browseCategoriesSub")}
              </h2>
            </div>
            <Link
              href="/equipment"
              className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#166534] dark:text-emerald-400 hover:gap-2 transition-all"
            >
              {t("viewAllEquipment")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group relative flex flex-col p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 mb-4 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-1">
                    {cat.desc}
                  </p>
                  <span className="mt-4 text-[11px] font-bold text-emerald-800 dark:text-emerald-400">
                    {cat.count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED EQUIPMENT CAROUSEL ===================== */}
      <section className="py-16 sm:py-24 bg-white dark:bg-stone-900/60 border-b border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
                {t("featuredTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-heading mt-1">
                {t("featuredSubtitle")}
              </h2>
            </div>
            <Link
              href="/equipment"
              className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#166534] dark:text-emerald-400 hover:underline"
            >
              {t("viewAllEquipment")} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMachinery.map((eq) => (
              <EquipmentCard key={eq.id} equipment={eq} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAFAF7] dark:bg-[#111311] border-b border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
              {t("howItWorksTitle")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-heading mt-1">
              {t("howItWorksSubtitle")}
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-heading text-stone-300 dark:text-stone-700">
                        {step.step}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== OWNER CTA BANNER ===================== */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80"
            alt="Tractor on Indian farm"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-[#166534]/70" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                <Percent className="h-3.5 w-3.5" />
                {t("calculateEarningsBtn")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                {t("hostBannerTitle")}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 max-w-xl leading-relaxed">
                {t("hostBannerSub")}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/list-equipment">
                  <Button variant="accent" size="lg" className="rounded-xl font-black text-stone-950">
                    + {t("hostBannerBtn")}
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="rounded-xl font-bold border-stone-600 text-white hover:bg-white/10">
                    {t("calculateEarningsBtn")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                {t("trustVerified")}
              </h3>
              <ul className="space-y-3 text-xs text-stone-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t("trustVerifiedSub")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t("trustPricing")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t("trustDelivery")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t("trustHelpline")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="py-16 sm:py-24 bg-white dark:bg-stone-900/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
              {t("faqSubtitle")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-heading mt-1">
              {t("faqTitle")}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden bg-[#FAFAF7] dark:bg-stone-900 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-stone-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#166534]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-200/50 dark:border-stone-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-[#166534] dark:text-emerald-300">
                {t("farmerSupport")}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                {t("trustHelplineSub")}
              </p>
            </div>
            <a
              href="tel:18001203276"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#14532D] transition-colors shrink-0"
            >
              <PhoneCall className="h-4 w-4" />
              {t("tollFreeSupport")} 1800-120-FARM
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
