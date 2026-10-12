"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Calendar,
  MapPin,
  IndianRupee,
  MessageCircle,
  ArrowRight,
  Tractor,
  Shield,
  Info,
} from "lucide-react";

function ConfirmationContent() {
  const params = useSearchParams();
  const equipmentId = params.get("equipment") ?? "1";
  const start = params.get("start") ?? "";
  const end = params.get("end") ?? "";

  // Mock booking reference
  const bookingRef = "KR-2024-8921";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Success Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 text-center text-white mb-6 shadow-xl shadow-emerald-500/20">
          <div className="flex justify-center mb-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Booking Request Sent!</h1>
          <p className="mt-2 text-emerald-100/80">
            Your booking request has been sent to the owner. You&apos;ll be
            notified once they confirm.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Booking Ref: <span className="font-bold">{bookingRef}</span>
          </div>
        </div>

        {/* Booking Details Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 space-y-5 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Booking Summary
          </h2>

          <div className="flex items-center gap-4 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
            <span className="text-4xl">🚜</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Mahindra 475 DI Tractor
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Owned by Rajesh Kumar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Start Date
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {start || "—"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> End Date
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {end || "—"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> Location
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Nashik, Maharashtra
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <IndianRupee className="h-3.5 w-3.5" /> Total Payable
              </p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                ₹6,300
              </p>
            </div>
          </div>

          {/* Status timeline */}
          <div className="space-y-3 border-t border-gray-100 pt-5 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              What happens next?
            </p>
            {[
              { step: "1", text: "Owner reviews your request", done: true },
              { step: "2", text: "Owner confirms (usually within 1 hour)", done: false },
              { step: "3", text: "Pay securely via UPI / Card", done: false },
              { step: "4", text: "Get equipment on your farm!", done: false },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    s.done
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  {s.done ? <CheckCircle2 className="h-4 w-4" /> : s.step}
                </div>
                <p
                  className={`text-sm ${
                    s.done
                      ? "text-emerald-700 font-medium dark:text-emerald-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 flex gap-3 text-sm text-amber-800 mb-6 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-400">
          <Info className="h-5 w-5 shrink-0 mt-0.5" />
          <p>
            Payment will only be collected after the owner confirms your
            booking. Your money is protected by KisanRent&apos;s secure escrow.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/dashboard/bookings" className="flex-1">
            <Button className="w-full" size="lg" id="view-bookings-btn">
              View My Bookings
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            id="message-owner-btn"
          >
            <MessageCircle className="h-4 w-4" />
            Message Owner
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/equipment"
            className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
          >
            Browse more equipment →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BookingConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
