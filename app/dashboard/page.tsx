import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tractor,
  Calendar,
  IndianRupee,
  Star,
  Bell,
  MessageCircle,
  Plus,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  ChevronRight,
  User,
} from "lucide-react";

// Mock data — replace with Supabase server-side fetch
const mockUser = { name: "Rajesh Kumar", role: "owner", avatar: "RK" };

const stats = [
  { label: "Active Listings", value: "4", icon: Tractor, color: "emerald", delta: "+1 this month" },
  { label: "Total Bookings", value: "48", icon: Calendar, color: "blue", delta: "+3 this week" },
  { label: "Total Earnings", value: "₹86,400", icon: IndianRupee, color: "purple", delta: "+₹12K this month" },
  { label: "Avg. Rating", value: "4.9", icon: Star, color: "amber", delta: "Based on 24 reviews" },
];

const recentBookings = [
  {
    id: "b1",
    equipment: "Mahindra 475 DI Tractor",
    emoji: "🚜",
    renter: "Amit Sharma",
    dates: "Oct 14 – Oct 16",
    amount: 3600,
    status: "confirmed",
  },
  {
    id: "b2",
    equipment: "Mahindra 475 DI Tractor",
    emoji: "🚜",
    renter: "Sunita Deshpande",
    dates: "Oct 18 – Oct 19",
    amount: 1800,
    status: "pending",
  },
  {
    id: "b3",
    equipment: "Kirloskar Water Pump",
    emoji: "💧",
    renter: "Vijay Patil",
    dates: "Oct 10 – Oct 12",
    amount: 1200,
    status: "completed",
  },
];

const notifications = [
  { id: "n1", type: "booking", text: "New booking request from Amit Sharma", time: "5 min ago", unread: true },
  { id: "n2", type: "payment", text: "Payment of ₹1,800 received", time: "2 hours ago", unread: true },
  { id: "n3", type: "review", text: "Sunita Deshpande left you a 5★ review", time: "Yesterday", unread: false },
];

const statusConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  confirmed: { label: "Confirmed", color: "text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30", icon: CheckCircle2 },
  pending: { label: "Pending", color: "text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30", icon: Clock },
  completed: { label: "Completed", color: "text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30", icon: CheckCircle2 },
  cancelled: { label: "Cancelled", color: "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30", icon: AlertCircle },
};

const colorMap: Record<string, string> = {
  emerald: "from-emerald-500 to-green-600",
  blue: "from-blue-500 to-cyan-600",
  purple: "from-purple-500 to-violet-600",
  amber: "from-amber-500 to-orange-600",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {mockUser.name.split(" ")[0]}! 👋
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Here&apos;s what&apos;s happening with your listings today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" id="notifications-btn" className="relative">
              <Bell className="h-4 w-4" />
              Notifications
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white font-bold">
                2
              </span>
            </Button>
            <Link href="/list-equipment">
              <Button size="sm" id="add-listing-btn">
                <Plus className="h-4 w-4" />
                Add Listing
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[s.color]} shadow-md`}
                >
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                {s.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Bookings
              </h2>
              <Link
                href="/dashboard/bookings"
                className="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-1"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden dark:border-gray-700 dark:bg-gray-800">
              {recentBookings.map((b, i) => {
                const s = statusConfig[b.status];
                return (
                  <div
                    key={b.id}
                    className={`flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                      i !== recentBookings.length - 1
                        ? "border-b border-gray-100 dark:border-gray-700"
                        : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl dark:bg-emerald-900/20">
                      {b.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium text-gray-900 dark:text-white truncate">
                          {b.equipment}
                        </p>
                        <span
                          className={`shrink-0 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.color}`}
                        >
                          <s.icon className="h-3 w-3" />
                          {s.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {b.renter} · {b.dates}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                        ₹{b.amount.toLocaleString("en-IN")}
                      </p>
                      <ChevronRight className="h-4 w-4 text-gray-400 ml-auto mt-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Earnings chart placeholder */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Earnings Overview
                </h3>
                <select className="text-xs rounded-lg border border-gray-200 px-2 py-1.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>This year</option>
                </select>
              </div>

              {/* Bar chart visual (CSS-based) */}
              <div className="flex items-end gap-2 h-28">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 opacity-90 transition-all hover:opacity-100"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-xs text-gray-400">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">This week</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ₹12,600
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 dark:text-gray-400">vs last week</p>
                  <p className="text-emerald-600 font-semibold dark:text-emerald-400">
                    ↑ 18%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white font-bold">
                  {mockUser.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {mockUser.name}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 capitalize">
                    {mockUser.role}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Profile", href: "/dashboard/profile", icon: User },
                  { label: "My Equipment", href: "/dashboard/equipment", icon: Tractor },
                  { label: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
                  { label: "Messages", href: "/dashboard/messages", icon: MessageCircle },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Bell className="h-4 w-4 text-emerald-500" />
                Recent Notifications
              </h3>
              <div className="space-y-3">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`rounded-xl p-3 text-sm ${
                      n.unread
                        ? "bg-emerald-50 dark:bg-emerald-900/20"
                        : "bg-gray-50 dark:bg-gray-700/50"
                    }`}
                  >
                    <p
                      className={`${
                        n.unread
                          ? "font-medium text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {n.text}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tips */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 p-5 text-white">
              <h3 className="font-semibold mb-3">💡 Boost Your Earnings</h3>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-300" />
                  Add photos to get 3x more booking requests
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-300" />
                  Enable delivery to reach more farmers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-300" />
                  Respond quickly to maintain top-rated status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
