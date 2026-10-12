import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle2,
  ChevronLeft,
  User,
  Phone,
  IndianRupee,
  Calendar,
  Zap,
  MessageCircle,
  Share2,
  Heart,
  Info,
  Cog,
} from "lucide-react";
import { BookingPanel } from "@/components/equipment/booking-panel";

// Mock data — will be replaced with Supabase fetch
const mockEquipment = {
  id: "1",
  title: "Mahindra 475 DI Tractor",
  category: "Tractor",
  brand: "Mahindra",
  model: "475 DI",
  year: 2021,
  description:
    "Well-maintained Mahindra 475 DI tractor available for rent. Ideal for ploughing, harrowing, and transportation. Comes with standard implements. Operator available on request for an additional charge.",
  emoji: "🚜",
  location: "Nashik, Maharashtra",
  address: "Near Gangapur Dam, Nashik, MH 422222",
  pricePerHour: 300,
  pricePerDay: 1800,
  pricePerAcre: 500,
  deposit: 3000,
  operatorIncluded: false,
  operatorExtraPerDay: 500,
  deliveryAvailable: true,
  deliveryRadius: 30,
  deliveryFee: 500,
  minDuration: 4,
  rating: 4.8,
  reviewCount: 24,
  isVerified: true,
  specs: {
    "Engine Power": "45 HP",
    "Fuel Type": "Diesel",
    "Transmission": "8 Forward + 2 Reverse",
    "Lifting Capacity": "1500 kg",
    "Fuel Tank": "60 Litres",
    "PTO Power": "38 HP",
  },
  owner: {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    memberSince: "2022",
    totalRentals: 48,
    responseRate: "98%",
    responseTime: "within 1 hour",
    rating: 4.9,
    isVerified: true,
  },
  reviews: [
    {
      id: "r1",
      name: "Amit Sharma",
      rating: 5,
      comment:
        "Excellent tractor, very well maintained. Rajesh was very cooperative and delivered on time. Highly recommended!",
      date: "3 days ago",
    },
    {
      id: "r2",
      name: "Sunita Deshpande",
      rating: 5,
      comment:
        "Used it for 3 days for harvesting wheat. No issues at all. Will definitely rent again next season.",
      date: "1 week ago",
    },
    {
      id: "r3",
      name: "Vijay Patil",
      rating: 4,
      comment:
        "Good condition, fuel consumption was a bit high but overall satisfied with the service.",
      date: "2 weeks ago",
    },
  ],
};

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const eq = { ...mockEquipment, id };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="/equipment"
            className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Browse Equipment
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">
            {eq.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero image area */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 dark:from-emerald-900/20 dark:to-green-900/20 h-72 md:h-96 flex items-center justify-center shadow-md">
              <span className="text-[120px] md:text-[160px] drop-shadow-xl select-none">
                {eq.emoji}
              </span>

              {/* Overlay badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {eq.isVerified && (
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow">
                    <Shield className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow backdrop-blur-sm dark:bg-gray-800/90 dark:text-gray-200">
                  {eq.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  id="share-btn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow hover:bg-white dark:bg-gray-800/90 dark:text-gray-300"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  id="wishlist-btn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow hover:bg-white hover:text-red-500 dark:bg-gray-800/90 dark:text-gray-300"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Title & meta */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {eq.title}
                  </h1>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {eq.brand} · {eq.model} · {eq.year}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {eq.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({eq.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-emerald-500" />
                {eq.address}
              </div>

              {/* Quick chips */}
              <div className="flex flex-wrap gap-2">
                {eq.deliveryAvailable && (
                  <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <Truck className="h-3.5 w-3.5" />
                    Delivery up to {eq.deliveryRadius} km (₹{eq.deliveryFee})
                  </span>
                )}
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Clock className="h-3.5 w-3.5" />
                  Min. {eq.minDuration} hours
                </span>
                {eq.operatorIncluded ? (
                  <span className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    <User className="h-3.5 w-3.5" />
                    Operator included
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    <User className="h-3.5 w-3.5" />
                    Operator +₹{eq.operatorExtraPerDay}/day
                  </span>
                )}
              </div>
            </div>

            {/* Pricing summary */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-emerald-500" />
                Pricing
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Per Hour", value: `₹${eq.pricePerHour}` },
                  { label: "Per Day", value: `₹${eq.pricePerDay}` },
                  { label: "Per Acre", value: `₹${eq.pricePerAcre}` },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="rounded-xl bg-emerald-50 p-4 text-center dark:bg-emerald-900/20"
                  >
                    <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                      {p.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{p.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Info className="h-4 w-4" />
                Security deposit of ₹{eq.deposit.toLocaleString("en-IN")}{" "}
                (refundable after safe return)
              </p>
            </div>

            {/* Specifications */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Cog className="h-5 w-5 text-emerald-500" />
                Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(eq.specs).map(([key, val]) => (
                  <div
                    key={key}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-700/50"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400">{key}</p>
                    <p className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                About this Equipment
              </h2>
              <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                {eq.description}
              </p>
            </div>

            {/* Owner card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About the Owner
              </h2>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                  {eq.owner.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {eq.owner.name}
                    </h3>
                    {eq.owner.isVerified && (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <Shield className="h-3 w-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Member since {eq.owner.memberSince} ·{" "}
                    {eq.owner.totalRentals} rentals completed
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {eq.owner.rating}
                      </span>
                      <span className="text-gray-500">rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Zap className="h-4 w-4 text-emerald-500" />
                      Responds {eq.owner.responseTime}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  id="contact-owner-btn"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message Owner
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  id="call-owner-btn"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Reviews ({eq.reviewCount})
                </h2>
                <div className="flex items-center gap-1.5">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {eq.rating}
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                {eq.reviews.map((r) => (
                  <div
                    key={r.id}
                    className="border-t border-gray-100 pt-5 first:border-0 first:pt-0 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                          {r.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {r.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                      {r.comment}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-5"
                id="view-all-reviews-btn"
              >
                View all {eq.reviewCount} reviews
              </Button>
            </div>
          </div>

          {/* Right column — Booking Panel (sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BookingPanel equipment={eq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
