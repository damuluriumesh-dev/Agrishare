"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  IndianRupee,
  User,
  Truck,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface Equipment {
  id: string;
  title: string;
  pricePerHour: number;
  pricePerDay: number;
  pricePerAcre: number;
  deposit: number;
  operatorIncluded: boolean;
  operatorExtraPerDay: number;
  deliveryAvailable: boolean;
  deliveryFee: number;
  minDuration: number;
}

interface BookingPanelProps {
  equipment: Equipment;
}

const PLATFORM_FEE_PERCENT = 5;

export function BookingPanel({ equipment: eq }: BookingPanelProps) {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("17:00");
  const [pricingMode, setPricingMode] = useState<"hourly" | "daily">("daily");
  const [withOperator, setWithOperator] = useState(false);
  const [withDelivery, setWithDelivery] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate durations
  function getDays() {
    if (!startDate || !endDate) return 0;
    const s = new Date(startDate);
    const e = new Date(endDate);
    const diff = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  }

  function getHours() {
    if (!startTime || !endTime) return 0;
    const [sh, sm] = startTime.split(":").map(Number);
    const [eh, em] = endTime.split(":").map(Number);
    const diff = (eh * 60 + em - (sh * 60 + sm)) / 60;
    return Math.max(0, diff);
  }

  const days = getDays();
  const hours = getHours();

  // Compute price breakdown
  const basePrice =
    pricingMode === "daily"
      ? days * eq.pricePerDay
      : days > 0
      ? days * hours * eq.pricePerHour
      : hours * eq.pricePerHour;

  const operatorCost = withOperator && !eq.operatorIncluded ? days * eq.operatorExtraPerDay : 0;
  const deliveryCost = withDelivery && eq.deliveryAvailable ? eq.deliveryFee : 0;
  const subtotal = basePrice + operatorCost + deliveryCost;
  const platformFee = Math.round(subtotal * (PLATFORM_FEE_PERCENT / 100));
  const total = subtotal + platformFee + eq.deposit;

  const hasValidDates = startDate && endDate && new Date(startDate) < new Date(endDate);
  const hasValidPricing = basePrice > 0;

  async function handleBook() {
    setBookingError(null);
    if (!hasValidDates) {
      setBookingError("Please select valid start and end dates.");
      return;
    }
    if (!hasValidPricing) {
      setBookingError("Please check your booking dates and time.");
      return;
    }
    setIsLoading(true);
    // TODO: Create booking via Server Action and redirect to payment
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/booking/confirm?equipment=${eq.id}&start=${startDate}&end=${endDate}`);
    }, 800);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 space-y-5">
      {/* Price header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
            <IndianRupee className="h-5 w-5" />
            <span className="text-2xl font-bold">
              {eq.pricePerDay.toLocaleString("en-IN")}
            </span>
          </div>
          <p className="text-sm text-gray-500">per day</p>
        </div>
        {/* Pricing mode toggle */}
        <div className="flex rounded-xl border border-gray-200 overflow-hidden text-xs font-medium dark:border-gray-600">
          {(["daily", "hourly"] as const).map((mode) => (
            <button
              key={mode}
              id={`pricing-mode-${mode}`}
              onClick={() => setPricingMode(mode)}
              className={`px-3 py-2 transition-colors capitalize ${
                pricingMode === mode
                  ? "bg-emerald-600 text-white"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-400"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Date & Time pickers */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Start Date
            </label>
            <input
              id="booking-start-date"
              type="date"
              value={startDate}
              onFocus={(e) => {
                if (!e.currentTarget.min) {
                  e.currentTarget.min = new Date().toISOString().split("T")[0];
                }
              }}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> End Date
            </label>
            <input
              id="booking-end-date"
              type="date"
              value={endDate}
              min={startDate || undefined}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        {pricingMode === "hourly" && (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Start Time
              </label>
              <input
                id="booking-start-time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <Clock className="h-3 w-3" /> End Time
              </label>
              <input
                id="booking-end-time"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Add-ons */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Add-ons
        </p>
        {!eq.operatorIncluded && (
          <label
            id="addon-operator"
            className={`flex items-center justify-between rounded-xl border-2 p-3 cursor-pointer transition-all ${
              withOperator
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                : "border-gray-200 hover:border-gray-300 dark:border-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  With Operator
                </p>
                <p className="text-xs text-gray-500">
                  +₹{eq.operatorExtraPerDay}/day
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={withOperator}
              onChange={(e) => setWithOperator(e.target.checked)}
              className="rounded text-emerald-600"
            />
          </label>
        )}
        {eq.deliveryAvailable && (
          <label
            id="addon-delivery"
            className={`flex items-center justify-between rounded-xl border-2 p-3 cursor-pointer transition-all ${
              withDelivery
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                : "border-gray-200 hover:border-gray-300 dark:border-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Delivery to Farm
                </p>
                <p className="text-xs text-gray-500">+₹{eq.deliveryFee} flat</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={withDelivery}
              onChange={(e) => setWithDelivery(e.target.checked)}
              className="rounded text-emerald-600"
            />
          </label>
        )}
      </div>

      {/* Price breakdown */}
      {hasValidPricing && (
        <div className="rounded-xl bg-gray-50 p-4 space-y-2 text-sm dark:bg-gray-700/50">
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>
              Base ({pricingMode === "daily" ? `${days} day${days !== 1 ? "s" : ""}` : `${hours} hrs`})
            </span>
            <span>₹{basePrice.toLocaleString("en-IN")}</span>
          </div>
          {operatorCost > 0 && (
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Operator</span>
              <span>₹{operatorCost.toLocaleString("en-IN")}</span>
            </div>
          )}
          {deliveryCost > 0 && (
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Delivery</span>
              <span>₹{deliveryCost.toLocaleString("en-IN")}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Platform fee ({PLATFORM_FEE_PERCENT}%)</span>
            <span>₹{platformFee.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Security deposit (refundable)</span>
            <span>₹{eq.deposit.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-gray-900 dark:border-gray-600 dark:text-white">
            <span>Total payable</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}

      {/* Error */}
      {bookingError && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {bookingError}
        </div>
      )}

      {/* Book CTA */}
      <Button
        id="book-now-btn"
        className="w-full"
        size="lg"
        onClick={handleBook}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <IndianRupee className="h-4 w-4" />
        )}
        {isLoading ? "Processing…" : "Book Now"}
      </Button>

      <p className="text-center text-xs text-gray-400 dark:text-gray-500">
        You won&apos;t be charged yet · Free cancellation before confirmation
      </p>
    </div>
  );
}
