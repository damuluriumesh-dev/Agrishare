"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, ADMIN_EMAIL } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ShieldAlert,
  Tractor,
  Users,
  Calendar,
  IndianRupee,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  ChevronRight,
  Sparkles,
  Phone,
  Lock,
  LogOut,
  RefreshCw,
  Plus,
} from "lucide-react";

interface PendingApproval {
  id: string;
  title: string;
  category: string;
  ownerName: string;
  phone: string;
  village: string;
  rcNumber: string;
  pricePerDay: number;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

interface AdminBooking {
  id: string;
  equipment: string;
  renter: string;
  owner: string;
  dates: string;
  amount: number;
  escrowStatus: "held" | "released" | "disputed";
  commission: number;
}

export default function AdminDashboardPage() {
  const { user, isAdmin, login, logout } = useAuth();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"overview" | "approvals" | "fleet" | "bookings" | "users">("overview");

  // Mock pending approvals with state
  const [approvals, setApprovals] = useState<PendingApproval[]>([
    {
      id: "app-1",
      title: "Sonalika DI 745 III 50HP Tractor",
      category: "Tractor",
      ownerName: "Ramesh Pawar",
      phone: "+91 98221 44321",
      village: "Dindori, Nashik",
      rcNumber: "MH-15-EG-8291",
      pricePerDay: 1950,
      submittedAt: "Today, 10:30 AM",
      status: "pending",
    },
    {
      id: "app-2",
      title: "Claas Crop Tiger 30 Harvester",
      category: "Harvester",
      ownerName: "Baldev Singh",
      phone: "+91 94172 88290",
      village: "Karnal, Haryana",
      rcNumber: "HR-05-BX-1029",
      pricePerDay: 5200,
      submittedAt: "Yesterday",
      status: "pending",
    },
    {
      id: "app-3",
      title: "Kirloskar 10HP Multi-stage Electric Pump",
      category: "Water Pump",
      ownerName: "Venkat Rao",
      phone: "+91 89192 11982",
      village: "Guntur, Andhra Pradesh",
      rcNumber: "AP-07-WP-4921",
      pricePerDay: 750,
      submittedAt: "2 days ago",
      status: "pending",
    },
  ]);

  const [bookings, setBookings] = useState<AdminBooking[]>([
    {
      id: "BK-9021",
      equipment: "Mahindra 575 DI Tractor",
      renter: "Suresh Patil",
      owner: "Rajesh Patil",
      dates: "Oct 14 – Oct 16, 2026",
      amount: 3600,
      escrowStatus: "held",
      commission: 360,
    },
    {
      id: "BK-9022",
      equipment: "John Deere W70 Harvester",
      renter: "Ranjit Ghadge",
      owner: "Vijay Solanki",
      dates: "Oct 15 – Oct 17, 2026",
      amount: 9600,
      escrowStatus: "held",
      commission: 960,
    },
    {
      id: "BK-9020",
      equipment: "Kirloskar 7.5HP Diesel Pump",
      renter: "Anand Deshmukh",
      owner: "Sunita Deshmukh",
      dates: "Oct 10 – Oct 12, 2026",
      amount: 1300,
      escrowStatus: "released",
      commission: 130,
    },
  ]);

  function handleApprove(id: string) {
    setApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "approved" } : item))
    );
  }

  function handleReject(id: string) {
    setApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "rejected" } : item))
    );
  }

  function handleReleaseEscrow(id: string) {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, escrowStatus: "released" } : b))
    );
  }

  // If user is not admin, show permission gate with quick one-click authorization
  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-[#FAFAF7] dark:bg-[#111311]">
        <div className="max-w-md w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto border border-amber-500/30">
            <Lock className="h-8 w-8" />
          </div>

          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Restricted Area
            </span>
            <h1 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-3 font-heading">
              Admin Portal Access
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
              This portal is restricted to authorized platform administrators. You must be signed in with the admin email:
            </p>
            <p className="mt-2 text-xs font-mono font-bold bg-stone-100 dark:bg-stone-800 py-1.5 px-3 rounded-xl text-stone-800 dark:text-stone-200">
              {ADMIN_EMAIL}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Button
              onClick={() => login(ADMIN_EMAIL, "admin123")}
              className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold h-12 rounded-xl text-sm shadow-md"
            >
              <ShieldCheck className="h-4 w-4 mr-2" />
              Sign in as Admin ({ADMIN_EMAIL})
            </Button>

            <Link href="/" className="block">
              <Button variant="ghost" className="w-full text-xs font-semibold text-stone-600 dark:text-stone-400">
                Return to Farmer Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAFAF7] dark:bg-[#111311]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                👑 Super Admin Console
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 font-heading tracking-tight">
              KisanRent Control Center
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 flex items-center gap-2">
              <span>Logged in as:</span>
              <strong className="text-stone-900 dark:text-stone-200 font-mono">{user?.email}</strong>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                Verified Master
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link href="/equipment">
              <Button variant="outline" size="sm" className="rounded-xl text-xs font-bold">
                <Tractor className="h-3.5 w-3.5 mr-1.5 text-emerald-600" />
                View Marketplace
              </Button>
            </Link>
            <Button
              onClick={() => logout()}
              variant="ghost"
              size="sm"
              className="rounded-xl text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/40"
            >
              <LogOut className="h-3.5 w-3.5 mr-1.5" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Executive Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
              <span className="text-xs font-bold">Total Machinery</span>
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                <Tractor className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-black text-stone-900 dark:text-stone-100">1,540</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+18 registered this week</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
              <span className="text-xs font-bold">Gross Rental Volume</span>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400">
                <IndianRupee className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-black text-stone-900 dark:text-stone-100">₹42.8 Lakh</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+14.2% MoM growth</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
              <span className="text-xs font-bold">Pending KYC & RC</span>
              <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                <ShieldAlert className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-black text-stone-900 dark:text-stone-100">
              {approvals.filter((a) => a.status === "pending").length}
            </p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
              <Clock className="h-3 w-3" />
              <span>Requires coordinator action</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
              <span className="text-xs font-bold">Escrow In Trust</span>
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-black text-stone-900 dark:text-stone-100">₹3,85,000</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>100% insured & bonded</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 overflow-x-auto">
          {[
            { id: "overview", label: "Executive Overview", icon: TrendingUp },
            { id: "approvals", label: `Listing Approvals (${approvals.filter(a => a.status === 'pending').length})`, icon: ShieldCheck },
            { id: "bookings", label: "Escrow & Bookings", icon: Calendar },
            { id: "fleet", label: "Platform Fleet", icon: Tractor },
            { id: "users", label: "Farmers & Owners", icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#166534] text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Executive Overview */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                    District Level Rental Volume
                  </h3>
                  <p className="text-xs text-stone-500">Active tractor & harvester distribution</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg">
                  Oct 2026 Season
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { district: "Nashik, Maharashtra", tractors: 420, value: "₹14.2 L", progress: 85 },
                  { district: "Amravati, Maharashtra", tractors: 310, value: "₹10.8 L", progress: 68 },
                  { district: "Karnal, Haryana", tractors: 280, value: "₹9.4 L", progress: 60 },
                  { district: "Guntur, Andhra Pradesh", tractors: 250, value: "₹8.4 L", progress: 52 },
                ].map((d) => (
                  <div key={d.district} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#166534]" />
                        {d.district}
                      </span>
                      <span className="text-stone-900 dark:text-stone-100">{d.value} ({d.tractors} units)</span>
                    </div>
                    <div className="h-2 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                        style={{ width: `${d.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
                <span>Verified e-NAM Agricultural Mandi Integrated</span>
                <span className="font-bold text-[#166534]">Audit Status: PASS</span>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-4">
              <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                Admin Quick Actions
              </h3>
              <div className="space-y-2.5">
                <Button
                  onClick={() => setActiveTab("approvals")}
                  variant="outline"
                  className="w-full justify-between h-11 text-xs font-bold rounded-xl"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Review Pending Listings
                  </span>
                  <span className="bg-amber-500 text-stone-950 px-1.5 py-0.5 rounded text-[10px] font-black">
                    {approvals.filter(a => a.status === 'pending').length}
                  </span>
                </Button>

                <Button
                  onClick={() => setActiveTab("bookings")}
                  variant="outline"
                  className="w-full justify-between h-11 text-xs font-bold rounded-xl"
                >
                  <span className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-blue-600" />
                    Release Escrow Payouts
                  </span>
                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </Button>

                <Link href="/list-equipment" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-between h-11 text-xs font-bold rounded-xl"
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="h-4 w-4 text-emerald-600" />
                      Add Machinery for Farmer
                    </span>
                    <ChevronRight className="h-4 w-4 text-stone-400" />
                  </Button>
                </Link>

                <Button
                  onClick={() => alert("Platform report exported to CSV!")}
                  variant="outline"
                  className="w-full justify-between h-11 text-xs font-bold rounded-xl"
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-purple-600" />
                    Export Monthly Audit Log
                  </span>
                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </Button>
              </div>

              <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Breakdown Guarantee Reserve</span>
                </div>
                <p className="text-[11px] text-amber-900/80 dark:text-amber-400/80 leading-relaxed">
                  Active emergency repair funds: ₹1,50,000 ready for instant village dispatch across 4 regional centers.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Approvals Queue */}
        {activeTab === "approvals" && (
          <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                  Machinery RC & KYC Verification Queue
                </h3>
                <p className="text-xs text-stone-500">
                  Verify vehicle registration documents and field coordinator checks before activating listings.
                </p>
              </div>
              <div className="text-xs font-bold text-stone-500">
                {approvals.filter((a) => a.status === "pending").length} items pending approval
              </div>
            </div>

            <div className="space-y-4">
              {approvals.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    item.status === "approved"
                      ? "bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900"
                      : item.status === "rejected"
                      ? "bg-red-50/50 border-red-200 dark:bg-red-950/20 dark:border-red-900 opacity-60"
                      : "bg-stone-50/80 border-stone-200 dark:bg-stone-800/40 dark:border-stone-700"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-[#166534] text-white">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      {item.status === "approved" && (
                        <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          APPROVED
                        </span>
                      )}
                      {item.status === "rejected" && (
                        <span className="text-[10px] font-black uppercase text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                          REJECTED
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-stone-500 space-x-3">
                      <span>Owner: <strong>{item.ownerName}</strong> ({item.phone})</span>
                      <span>•</span>
                      <span>Location: <strong>{item.village}</strong></span>
                      <span>•</span>
                      <span>RC: <strong className="font-mono">{item.rcNumber}</strong></span>
                    </div>
                    <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                      Rate: ₹{item.pricePerDay}/day · Submitted: {item.submittedAt}
                    </p>
                  </div>

                  {item.status === "pending" ? (
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleApprove(item.id)}
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-1.5" />
                        Approve & Publish
                      </Button>
                      <Button
                        onClick={() => handleReject(item.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:bg-red-50 border-red-200 text-xs font-bold rounded-xl"
                      >
                        <XCircle className="h-4 w-4 mr-1.5" />
                        Reject / Request RC
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-stone-500">
                      Action Completed
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Escrow & Bookings */}
        {activeTab === "bookings" && (
          <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                  Platform Escrow & Payout Vault
                </h3>
                <p className="text-xs text-stone-500">
                  Rental payments are held safely until farmer confirms equipment delivery and satisfactory operation.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Booking ID</th>
                    <th className="py-3 px-4">Machinery</th>
                    <th className="py-3 px-4">Renter / Owner</th>
                    <th className="py-3 px-4">Dates</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Platform Fee (10%)</th>
                    <th className="py-3 px-4">Escrow Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/40">
                      <td className="py-3 px-4 font-mono font-bold text-stone-800 dark:text-stone-200">
                        {b.id}
                      </td>
                      <td className="py-3 px-4 font-bold text-stone-900 dark:text-stone-100">
                        {b.equipment}
                      </td>
                      <td className="py-3 px-4 text-stone-600 dark:text-stone-400">
                        <div>{b.renter} (Renter)</div>
                        <div className="text-[11px] text-stone-400">→ {b.owner} (Owner)</div>
                      </td>
                      <td className="py-3 px-4 text-stone-600 dark:text-stone-400">
                        {b.dates}
                      </td>
                      <td className="py-3 px-4 font-bold text-stone-900 dark:text-stone-100">
                        ₹{b.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-bold">
                        ₹{b.commission}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                            b.escrowStatus === "released"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                          }`}
                        >
                          {b.escrowStatus === "released" ? "Released to Owner" : "Held in Escrow"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {b.escrowStatus === "held" ? (
                          <Button
                            onClick={() => handleReleaseEscrow(b.id)}
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl"
                          >
                            Release Payout
                          </Button>
                        ) : (
                          <span className="text-stone-400 text-xs">Completed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Fleet Management */}
        {activeTab === "fleet" && (
          <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                  Live Machinery Fleet
                </h3>
                <p className="text-xs text-stone-500">1,540 verified tractors, combines, and pumps</p>
              </div>
              <Link href="/list-equipment">
                <Button size="sm" className="rounded-xl text-xs font-bold bg-[#166534]">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add New Unit
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Mahindra 575 DI Sarpanch 45HP", cat: "Tractor", location: "Nashik, MH", status: "Active", rate: "₹1,800/day" },
                { title: "John Deere W70 Multi-Crop", cat: "Harvester", location: "Amravati, MH", status: "Active", rate: "₹4,800/day" },
                { title: "Kirloskar 7.5HP Diesel Pump", cat: "Water Pump", location: "Pune, MH", status: "Active", rate: "₹650/day" },
                { title: "Shaktiman 7-Ft Rotary Tiller", cat: "Rotavator", location: "Solapur, MH", status: "Active", rate: "₹1,300/day" },
                { title: "Garuda Agri Drone 16L", cat: "Agri Drone", location: "Nagpur, MH", status: "Active", rate: "₹450/acre" },
                { title: "Swaraj 855 FE 52HP", cat: "Tractor", location: "Karnal, HR", status: "Active", rate: "₹2,100/day" },
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-700/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400">
                      {f.cat}
                    </span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                      {f.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                    {f.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span>{f.location}</span>
                    <strong className="text-stone-900 dark:text-stone-100">{f.rate}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Users */}
        {activeTab === "users" && (
          <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 font-heading">
                  Farmers & Machinery Owners
                </h3>
                <p className="text-xs text-stone-500">12,850 registered rural accounts</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "Rajesh Patil", email: "rajesh.patil@kisan.in", role: "Owner (3 Machines)", kyc: "Verified", village: "Nashik, MH" },
                { name: "Vijay Solanki", email: "v.solanki@farm.in", role: "Owner (1 Harvester)", kyc: "Verified", village: "Amravati, MH" },
                { name: "Suresh Kadam", email: "suresh.kadam@gmail.com", role: "Renter (Smallholder)", kyc: "Verified", village: "Wardha, MH" },
                { name: "Umesh Chowdary", email: ADMIN_EMAIL, role: "Super Administrator", kyc: "Master Admin", village: "Hyderabad / HQ" },
              ].map((u) => (
                <div key={u.email} className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm">{u.name}</h5>
                    <p className="text-stone-500">{u.email} · {u.village}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-stone-800 dark:text-stone-200 block">{u.role}</span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{u.kyc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
