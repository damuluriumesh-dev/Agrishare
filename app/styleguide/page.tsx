"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge, VerifiedBadge, OperatorChip, StatusPill } from "@/components/ui/badge";
import { RatingStars } from "@/components/ui/rating-stars";
import { PriceTag } from "@/components/ui/price-tag";
import { EquipmentCard, type EquipmentItem } from "@/components/ui/equipment-card";
import { Skeleton, EquipmentCardSkeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Tractor,
  Wheat,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Heart,
  Phone,
  RotateCcw,
} from "lucide-react";

const sampleEquipment: EquipmentItem = {
  id: "sample-1",
  title: "Mahindra 475 DI 45HP Tractor",
  category: "Tractor",
  location: "Nashik, Maharashtra",
  distanceKm: 4.2,
  pricePerDay: 1800,
  pricePerHour: 300,
  rating: 4.9,
  reviewCount: 38,
  ownerName: "Rajesh Patil",
  isVerified: true,
  operatorIncluded: true,
  deliveryAvailable: true,
  badge: "Top Rated",
};

export default function StyleguidePage() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#111311] pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-stone-200 dark:border-stone-800 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-[#166534] dark:bg-emerald-950 dark:text-emerald-300 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            KisanRent Design System v2.0
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-heading">
            Living Styleguide & Component Library
          </h1>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400 max-w-2xl">
            Clean, modern, warm and trustworthy design tokens engineered for rural
            farmers and machinery owners across India.
          </p>
        </div>

        {/* Section 1: Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            1. Color Tokens & Scales
          </h2>

          {/* Primary Forest Green Scale */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
              Primary: Deep Forest Green (#166534 Brand Anchor)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {[
                { label: "50", hex: "#F0FDF4", bg: "bg-[#F0FDF4]", text: "text-stone-800" },
                { label: "100", hex: "#DCFCE7", bg: "bg-[#DCFCE7]", text: "text-stone-800" },
                { label: "200", hex: "#BBF7D0", bg: "bg-[#BBF7D0]", text: "text-stone-800" },
                { label: "300", hex: "#86EFAC", bg: "bg-[#86EFAC]", text: "text-stone-800" },
                { label: "400", hex: "#4ADE80", bg: "bg-[#4ADE80]", text: "text-stone-900" },
                { label: "500", hex: "#22C55E", bg: "bg-[#22C55E]", text: "text-white" },
                { label: "600", hex: "#16A34A", bg: "bg-[#16A34A]", text: "text-white" },
                { label: "700", hex: "#15803D", bg: "bg-[#15803D]", text: "text-white" },
                { label: "800 (Brand)", hex: "#166534", bg: "bg-[#166534]", text: "text-white ring-2 ring-amber-400" },
                { label: "900", hex: "#14532D", bg: "bg-[#14532D]", text: "text-white" },
              ].map((swatch) => (
                <div
                  key={swatch.label}
                  className={`rounded-xl p-3 flex flex-col justify-between h-20 shadow-sm ${swatch.bg} ${swatch.text}`}
                >
                  <span className="text-xs font-bold">{swatch.label}</span>
                  <span className="text-[10px] font-mono">{swatch.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Harvest Amber */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
              Accent: Harvest Gold & Amber (#F59E0B)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { label: "50", hex: "#FFFBEB", bg: "bg-[#FFFBEB]", text: "text-stone-800" },
                { label: "200", hex: "#FDE68A", bg: "bg-[#FDE68A]", text: "text-stone-800" },
                { label: "500 (Accent)", hex: "#F59E0B", bg: "bg-[#F59E0B]", text: "text-stone-950 font-bold" },
                { label: "600", hex: "#D97706", bg: "bg-[#D97706]", text: "text-white" },
                { label: "700", hex: "#B45309", bg: "bg-[#B45309]", text: "text-white" },
              ].map((swatch) => (
                <div
                  key={swatch.label}
                  className={`rounded-xl p-3 flex flex-col justify-between h-20 shadow-sm ${swatch.bg} ${swatch.text}`}
                >
                  <span className="text-xs font-bold">{swatch.label}</span>
                  <span className="text-[11px] font-mono">{swatch.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warm Neutrals */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
              Neutrals: Warm Canvas (#FAFAF7) & Stone Text
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl p-4 bg-[#FAFAF7] border border-stone-300 text-stone-900 shadow-sm">
                <p className="text-xs font-bold">Canvas Background</p>
                <p className="text-xs font-mono text-stone-500">#FAFAF7</p>
              </div>
              <div className="rounded-xl p-4 bg-white border border-stone-200 text-stone-900 shadow-sm">
                <p className="text-xs font-bold">Surface Card</p>
                <p className="text-xs font-mono text-stone-500">#FFFFFF</p>
              </div>
              <div className="rounded-xl p-4 bg-stone-100 border border-stone-200 text-stone-800 shadow-sm">
                <p className="text-xs font-bold">Subtle Stone</p>
                <p className="text-xs font-mono text-stone-500">#F5F5F0</p>
              </div>
              <div className="rounded-xl p-4 bg-stone-900 text-white shadow-sm">
                <p className="text-xs font-bold">High Contrast Text</p>
                <p className="text-xs font-mono text-stone-400">#1C1917</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Typography & Vernacular Support */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            2. Typography & Vernacular Fallbacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 space-y-3">
              <span className="text-xs font-bold text-[#166534] dark:text-emerald-400">
                English (Plus Jakarta Sans & Inter)
              </span>
              <p className="text-2xl font-black font-heading text-stone-900 dark:text-stone-100">
                Modern Farming Machinery
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Rent tractors, harvesters, and solar water pumps directly from
                verified owners right in your district.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 space-y-3">
              <span className="text-xs font-bold text-[#166534] dark:text-emerald-400">
                हिन्दी (Noto Sans Devanagari)
              </span>
              <p className="text-2xl font-black font-heading text-stone-900 dark:text-stone-100">
                सही उपकरण, सीधे आपके खेत तक
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                अपने गांव या जिले के सत्यापित किसानों से किफायती दरों पर ट्रैक्टर
                और हार्वेस्टर किराए पर लें।
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 space-y-3">
              <span className="text-xs font-bold text-[#166534] dark:text-emerald-400">
                తెలుగు (Noto Sans Telugu)
              </span>
              <p className="text-2xl font-black font-heading text-stone-900 dark:text-stone-100">
                సరైన వ్యవసాయ పరికరాలు
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                మీ గ్రామం మరియు మండలంలోని ధృవీకరించబడిన యజమానుల నుండి సరసమైన
                ధరలకు ట్రాక్టర్లను అద్దెకు తీసుకోండి.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            3. Buttons & Touch Targets (Min 48px)
          </h2>
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
            <Button variant="default">
              <Tractor className="h-4 w-4" />
              Primary Forest Green
            </Button>

            <Button variant="accent">
              <Sparkles className="h-4 w-4" />
              Harvest Amber Accent
            </Button>

            <Button variant="secondary">Secondary Neutral</Button>

            <Button variant="outline">Outline Button</Button>

            <Button variant="ghost">Ghost Button</Button>

            <Button
              variant="default"
              loading={loadingBtn}
              onClick={() => {
                setLoadingBtn(true);
                setTimeout(() => setLoadingBtn(false), 2000);
              }}
            >
              {loadingBtn ? "Verifying..." : "Click For Loading State"}
            </Button>
          </div>
        </section>

        {/* Section 4: Badges, Pills & Price Tags */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            4. Badges, Trust Chips & Pricing Tags
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                Badges & Trust Seals
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <VerifiedBadge />
                <OperatorChip included={true} />
                <OperatorChip included={false} />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill status="active" />
                <StatusPill status="pending" />
                <StatusPill status="completed" />
                <StatusPill status="cancelled" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                Rating Stars & Indian Currency Tags
              </h3>
              <div className="space-y-3">
                <RatingStars rating={4.9} reviewCount={42} size="md" />
                <div className="flex items-center gap-6">
                  <PriceTag amount={1800} period="day" size="lg" subtext="Includes GST & insurance" />
                  <PriceTag amount={300} period="hour" size="md" />
                  <PriceTag amount={550} period="acre" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Real-looking Equipment Card */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            5. Equipment Card Component
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            <EquipmentCard equipment={sampleEquipment} />
            <EquipmentCard
              equipment={{
                ...sampleEquipment,
                id: "sample-2",
                title: "John Deere Multi-Crop Combine Harvester",
                category: "Harvester",
                pricePerDay: 4500,
                pricePerHour: 750,
                rating: 4.8,
                reviewCount: 22,
                distanceKm: 8.5,
                badge: "In Demand",
                operatorIncluded: true,
              }}
            />
            <EquipmentCardSkeleton />
          </div>
        </section>

        {/* Section 6: Empty State */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-heading">
            6. Friendly Empty State with Suggestion
          </h2>
          <EmptyState
            title="No tractors found within 10 km"
            description="We couldn't find available equipment matching those filters. Widen your radius to 25 km or check adjacent panchayats."
            actionLabel="Widen radius to 25 km"
            onReset={() => alert("Radius widened")}
          />
        </section>
      </div>
    </div>
  );
}
