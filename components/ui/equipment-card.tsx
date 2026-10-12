"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, ShieldCheck, Wrench, Sparkles, Navigation } from "lucide-react";
import { RatingStars } from "@/components/ui/rating-stars";
import { PriceTag } from "@/components/ui/price-tag";
import { Button } from "@/components/ui/button";

export interface EquipmentItem {
  id: string;
  title: string;
  category: string;
  location: string;
  distanceKm?: number;
  pricePerDay: number;
  pricePerHour?: number;
  pricePerAcre?: number;
  rating: number;
  reviewCount: number;
  ownerName: string;
  isVerified?: boolean;
  operatorIncluded?: boolean;
  deliveryAvailable?: boolean;
  badge?: string | null;
  imageUrl?: string;
  emoji?: string;
}

const defaultImages: Record<string, string> = {
  Tractor:
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
  Harvester:
    "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
  "Water Pump":
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  Rotavator:
    "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
  Seeder:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
  Sprayer:
    "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
  Drone:
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
  Trailer:
    "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=800&q=80",
};

interface EquipmentCardProps {
  equipment: EquipmentItem;
  className?: string;
}

export function EquipmentCard({ equipment, className }: EquipmentCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const imageSrc =
    equipment.imageUrl ||
    defaultImages[equipment.category] ||
    defaultImages.Tractor;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/90 dark:hover:border-emerald-700 ${
        className || ""
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <Image
          src={imageSrc}
          alt={equipment.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {equipment.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/95 px-2.5 py-0.5 text-[11px] font-bold text-stone-950 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3 w-3" />
                {equipment.badge}
              </span>
            )}
            {equipment.isVerified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#166534]/90 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md shadow-sm">
                <ShieldCheck className="h-3 w-3 text-emerald-300" />
                Verified
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-700 backdrop-blur-md transition-transform hover:scale-110 active:scale-95 shadow-sm dark:bg-stone-900/90 dark:text-stone-300"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isSaved ? "fill-red-500 text-red-500" : "text-stone-600"
              }`}
            />
          </button>
        </div>

        {/* Bottom Image Overlay: Distance & Category */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <span className="inline-flex items-center gap-1 rounded-md bg-black/40 px-2 py-0.5 backdrop-blur-md">
            <MapPin className="h-3 w-3 text-emerald-400" />
            {equipment.location}
          </span>
          {equipment.distanceKm !== undefined && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/70 px-2 py-0.5 backdrop-blur-md text-emerald-200">
              <Navigation className="h-3 w-3 text-emerald-400" />
              {equipment.distanceKm} km away
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title & Category */}
        <div className="mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
            {equipment.category}
          </span>
          <Link href={`/equipment/${equipment.id}`}>
            <h3 className="text-base font-bold text-stone-900 line-clamp-1 group-hover:text-[#166534] dark:text-stone-100 dark:group-hover:text-emerald-400 transition-colors">
              {equipment.title}
            </h3>
          </Link>
        </div>

        {/* Rating and Operator Chip */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <RatingStars
            rating={equipment.rating}
            reviewCount={equipment.reviewCount}
            size="sm"
          />
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-600 dark:text-stone-400">
            <Wrench className="h-3 w-3 text-amber-500" />
            {equipment.operatorIncluded ? "Operator incl." : "Self-drive"}
          </span>
        </div>

        {/* Owner Info & Pricing Footer */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
          <div>
            <PriceTag amount={equipment.pricePerDay} period="day" size="md" />
            {equipment.pricePerHour && (
              <span className="text-[11px] text-stone-500 block">
                ₹{equipment.pricePerHour}/hr available
              </span>
            )}
          </div>

          <Link href={`/equipment/${equipment.id}`}>
            <Button size="sm" variant="default" className="rounded-xl font-bold">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
