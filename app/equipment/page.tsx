import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  Clock,
  ChevronRight,
  Tractor,
  Wheat,
  Droplets,
  Sprout,
  SprayCan,
  Cog,
  Truck,
  Plane,
  Filter,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demonstration (will be replaced with Supabase calls)
const mockEquipment = [
  {
    id: "1",
    title: "Mahindra 475 DI Tractor",
    category: "Tractor",
    location: "Nashik, Maharashtra",
    pricePerDay: 1800,
    pricePerHour: 300,
    rating: 4.8,
    reviewCount: 24,
    ownerName: "Rajesh Kumar",
    isVerified: true,
    deliveryAvailable: true,
    emoji: "🚜",
    badge: "Top Rated",
  },
  {
    id: "2",
    title: "John Deere Combine Harvester",
    category: "Harvester",
    location: "Amravati, Maharashtra",
    pricePerDay: 4500,
    pricePerHour: 700,
    rating: 4.9,
    reviewCount: 18,
    ownerName: "Vijay Patil",
    isVerified: true,
    deliveryAvailable: false,
    emoji: "🌾",
    badge: "In Demand",
  },
  {
    id: "3",
    title: "Kirloskar Water Pump 5HP",
    category: "Water Pump",
    location: "Pune, Maharashtra",
    pricePerDay: 600,
    pricePerHour: 100,
    rating: 4.6,
    reviewCount: 31,
    ownerName: "Sunita Deshpande",
    isVerified: true,
    deliveryAvailable: true,
    emoji: "💧",
    badge: null,
  },
  {
    id: "4",
    title: "Shaktiman Rotavator 7 feet",
    category: "Rotavator",
    location: "Solapur, Maharashtra",
    pricePerDay: 1200,
    pricePerHour: 200,
    rating: 4.7,
    reviewCount: 12,
    ownerName: "Anil Shinde",
    isVerified: false,
    deliveryAvailable: true,
    emoji: "🔄",
    badge: null,
  },
  {
    id: "5",
    title: "Multi-Crop Seed Drill",
    category: "Seeder",
    location: "Nagpur, Maharashtra",
    pricePerDay: 900,
    pricePerHour: 150,
    rating: 4.5,
    reviewCount: 8,
    ownerName: "Priya Meshram",
    isVerified: true,
    deliveryAvailable: false,
    emoji: "🌱",
    badge: null,
  },
  {
    id: "6",
    title: "Agricultural Drone DJI T40",
    category: "Drone",
    location: "Aurangabad, Maharashtra",
    pricePerDay: 3000,
    pricePerHour: 500,
    rating: 4.9,
    reviewCount: 6,
    ownerName: "Rahul Tech Farms",
    isVerified: true,
    deliveryAvailable: true,
    emoji: "🛸",
    badge: "New",
  },
];

const categories = [
  { name: "All", icon: Filter },
  { name: "Tractor", icon: Tractor },
  { name: "Harvester", icon: Wheat },
  { name: "Water Pump", icon: Droplets },
  { name: "Seeder", icon: Sprout },
  { name: "Sprayer", icon: SprayCan },
  { name: "Rotavator", icon: Cog },
  { name: "Trailer", icon: Truck },
  { name: "Drone", icon: Plane },
];

const badgeColor: Record<string, string> = {
  "Top Rated": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "In Demand": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  New: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse Equipment
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Find verified farm equipment near you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="equipment-search"
              type="text"
              placeholder="Search tractors, harvesters, pumps…"
              className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="equipment-location"
              type="text"
              placeholder="Your location"
              className="w-full sm:w-56 h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Button id="equipment-search-btn" size="default" className="h-12 px-6">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        {/* Category Pills */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.name}
              id={`category-${cat.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-5 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <SlidersHorizontal className="h-4 w-4 text-emerald-500" />
                Filters
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Max Daily Rate
                </label>
                <input
                  id="filter-price"
                  type="range"
                  min="0"
                  max="10000"
                  defaultValue="5000"
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>₹0</span>
                  <span className="font-medium text-emerald-600">₹5,000/day</span>
                  <span>₹10K+</span>
                </div>
              </div>

              {/* Delivery */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Delivery
                </p>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-400">
                  <input id="filter-delivery" type="checkbox" className="rounded border-gray-300 text-emerald-600" />
                  Delivery available
                </label>
              </div>

              {/* Verified */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Owner Status
                </p>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-400">
                  <input id="filter-verified" type="checkbox" className="rounded border-gray-300 text-emerald-600" />
                  Verified owners only
                </label>
              </div>

              {/* Min Rating */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Minimum Rating
                </p>
                {[4, 3, 2].map((r) => (
                  <label
                    key={r}
                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-400"
                  >
                    <input
                      type="radio"
                      name="rating-filter"
                      id={`filter-rating-${r}`}
                      className="text-emerald-600"
                    />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: r }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span>& above</span>
                    </div>
                  </label>
                ))}
              </div>

              <Button variant="outline" className="w-full" size="sm" id="apply-filters">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Equipment Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-medium text-gray-900 dark:text-white">6</span> results near you
              </p>
              <select
                id="sort-select"
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option>Nearest first</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {mockEquipment.map((item) => (
                <Link
                  key={item.id}
                  href={`/equipment/${item.id}`}
                  id={`equipment-card-${item.id}`}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
                >
                  {/* Equipment visual */}
                  <div className="relative h-44 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center dark:from-emerald-900/20 dark:to-green-900/20">
                    <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                      {item.emoji}
                    </span>

                    {/* Badge */}
                    {item.badge && (
                      <span
                        className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold ${badgeColor[item.badge]}`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Verified badge */}
                    {item.isVerified && (
                      <span className="absolute top-3 right-3 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                        ✓ Verified
                      </span>
                    )}

                    {/* Delivery chip */}
                    {item.deliveryAvailable && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                        🚚 Delivery
                      </span>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.rating}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({item.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-700">
                      <div>
                        <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
                          <IndianRupee className="h-4 w-4" />
                          <span className="text-lg font-bold">
                            {item.pricePerDay.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-gray-500 ml-0.5">/day</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />
                          ₹{item.pricePerHour}/hour
                        </div>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
