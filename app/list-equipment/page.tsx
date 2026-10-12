"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tractor,
  Camera,
  MapPin,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Info,
} from "lucide-react";

const CATEGORIES = [
  { name: "Tractor", emoji: "🚜" },
  { name: "Harvester", emoji: "🌾" },
  { name: "Water Pump", emoji: "💧" },
  { name: "Seeder", emoji: "🌱" },
  { name: "Sprayer", emoji: "🧴" },
  { name: "Rotavator", emoji: "🔄" },
  { name: "Plough", emoji: "🛠" },
  { name: "Trailer", emoji: "🚚" },
  { name: "Drone", emoji: "🛸" },
  { name: "Other", emoji: "⚙" },
];

const listSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.coerce.number().min(2000).max(2026).optional(),
  description: z.string().min(20, "Description must be at least 20 characters"),
  address: z.string().min(5, "Please enter a valid address"),
  pricePerDay: z.coerce.number().min(1, "Daily price is required"),
  pricePerHour: z.coerce.number().optional(),
  deposit: z.coerce.number().min(0),
  deliveryAvailable: z.boolean(),
  deliveryFee: z.coerce.number().optional(),
  operatorIncluded: z.boolean(),
});

type ListFormData = z.infer<typeof listSchema>;

const STEPS = ["Basic Info", "Details & Pricing", "Location", "Review & Submit"];

export default function ListEquipmentPage() {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<ListFormData>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      deliveryAvailable: false,
      operatorIncluded: false,
      deposit: 0,
    },
  });

  const deliveryAvailable = watch("deliveryAvailable");

  async function nextStep() {
    // Validate current step fields
    const fieldsToValidate: (keyof ListFormData)[][] = [
      ["title", "category"],
      ["description", "pricePerDay"],
      ["address"],
    ];
    if (step < 3) {
      const valid = await trigger(fieldsToValidate[step] ?? []);
      if (!valid) return;
      setStep((s) => s + 1);
    }
  }

  async function onSubmit(data: ListFormData) {
    // TODO: Submit via Server Action to Supabase
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6 px-4">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Listing Submitted!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Your equipment has been submitted for review. Once approved, it will
            appear on KisanRent and start receiving booking requests.
          </p>
          <div className="flex flex-col gap-3">
            <Button className="w-full" size="lg" onClick={() => window.location.href = "/dashboard"}>
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full" onClick={() => { setIsSubmitted(false); setStep(0); }}>
              List Another Equipment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
              <Tractor className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              List Your Equipment
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Start earning from your idle farm equipment in minutes.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      i < step
                        ? "bg-emerald-600 text-white"
                        : i === step
                        ? "bg-emerald-600 text-white ring-4 ring-emerald-100 dark:ring-emerald-900/50"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  <p className="mt-1.5 text-xs text-gray-500 whitespace-nowrap hidden sm:block dark:text-gray-400">
                    {s}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 rounded-full transition-all ${
                      i < step ? "bg-emerald-600" : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 space-y-5">
            {/* STEP 0 — Basic Info */}
            {step === 0 && (
              <>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Basic Information
                </h2>

                <Input
                  id="listing-title"
                  label="Equipment Title *"
                  placeholder="e.g., Mahindra 475 DI Tractor"
                  error={errors.title?.message}
                  {...register("title")}
                />

                {/* Category */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.name}
                        type="button"
                        id={`category-btn-${cat.name.toLowerCase()}`}
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setValue("category", cat.name, { shouldValidate: true });
                        }}
                        className={`flex flex-col items-center gap-1 rounded-xl border-2 p-2.5 text-xs font-medium transition-all ${
                          selectedCategory === cat.name
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                            : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400"
                        }`}
                      >
                        <span className="text-xl">{cat.emoji}</span>
                        {cat.name}
                      </button>
                    ))}
                  </div>
                  {errors.category && (
                    <p className="text-xs text-red-500">{errors.category.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Input id="listing-brand" label="Brand" placeholder="Mahindra" {...register("brand")} />
                  <Input id="listing-model" label="Model" placeholder="475 DI" {...register("model")} />
                  <Input id="listing-year" label="Year" type="number" placeholder="2021" {...register("year")} />
                </div>
              </>
            )}

            {/* STEP 1 — Details & Pricing */}
            {step === 1 && (
              <>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Details & Pricing
                </h2>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description *
                  </label>
                  <textarea
                    id="listing-description"
                    placeholder="Describe your equipment — condition, features, included accessories…"
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="text-xs text-red-500">{errors.description.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="listing-price-day"
                    label="Price per Day (₹) *"
                    type="number"
                    placeholder="1800"
                    error={errors.pricePerDay?.message}
                    {...register("pricePerDay")}
                  />
                  <Input
                    id="listing-price-hour"
                    label="Price per Hour (₹)"
                    type="number"
                    placeholder="300"
                    {...register("pricePerHour")}
                  />
                </div>

                <Input
                  id="listing-deposit"
                  label="Security Deposit (₹)"
                  type="number"
                  placeholder="3000"
                  {...register("deposit")}
                />

                <div className="space-y-3">
                  <label className="flex items-center justify-between rounded-xl border-2 border-gray-200 p-4 cursor-pointer hover:border-gray-300 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚚</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Offer Delivery
                        </p>
                        <p className="text-xs text-gray-500">
                          Deliver equipment to farmer&apos;s location
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      id="listing-delivery"
                      {...register("deliveryAvailable")}
                      className="rounded text-emerald-600"
                    />
                  </label>
                  {deliveryAvailable && (
                    <Input
                      id="listing-delivery-fee"
                      label="Delivery Fee (₹)"
                      type="number"
                      placeholder="500"
                      {...register("deliveryFee")}
                    />
                  )}

                  <label className="flex items-center justify-between rounded-xl border-2 border-gray-200 p-4 cursor-pointer hover:border-gray-300 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">👨‍🌾</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Operator Included
                        </p>
                        <p className="text-xs text-gray-500">
                          You or an operator comes with the equipment
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      id="listing-operator"
                      {...register("operatorIncluded")}
                      className="rounded text-emerald-600"
                    />
                  </label>
                </div>
              </>
            )}

            {/* STEP 2 — Location */}
            {step === 2 && (
              <>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Location
                </h2>

                <Input
                  id="listing-address"
                  label="Equipment Address *"
                  placeholder="Village, Taluka, District, State"
                  error={errors.address?.message}
                  {...register("address")}
                />

                {/* Map placeholder */}
                <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 h-48 flex flex-col items-center justify-center gap-2 text-gray-400 dark:border-gray-700 dark:bg-gray-700/30">
                  <MapPin className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  <p className="text-sm">Interactive map coming soon</p>
                  <p className="text-xs text-center px-4">
                    We&apos;ll use your address to show farmers nearby. Enter your
                    location above and we&apos;ll pin it on the map.
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 flex gap-3 text-sm text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                  <Info className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>
                    Your exact address is only shared with renters after booking
                    is confirmed. We display only the district/city to browse.
                  </p>
                </div>
              </>
            )}

            {/* STEP 3 — Review */}
            {step === 3 && (
              <>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Review & Submit
                </h2>

                <div className="space-y-3">
                  {[
                    { label: "Title", value: watch("title") },
                    { label: "Category", value: watch("category") },
                    { label: "Brand / Model", value: `${watch("brand") || "—"} / ${watch("model") || "—"}` },
                    { label: "Daily Price", value: `₹${watch("pricePerDay") || "—"}` },
                    { label: "Address", value: watch("address") },
                    { label: "Delivery", value: watch("deliveryAvailable") ? "Yes" : "No" },
                    { label: "Operator Included", value: watch("operatorIncluded") ? "Yes" : "No" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                      <span className="font-medium text-gray-900 dark:text-white text-right max-w-[60%]">
                        {item.value || "—"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">
                  <p className="font-medium mb-1">Before you submit:</p>
                  <ul className="space-y-1 text-emerald-700 dark:text-emerald-400">
                    <li>✓ Your listing will be reviewed within 24 hours</li>
                    <li>✓ You can add photos after approval</li>
                    <li>✓ You can edit or remove your listing anytime</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-5 flex gap-3">
            {step > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                id="prev-step-btn"
                className="flex-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            )}
            {step < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                id="next-step-btn"
                className="flex-1"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                id="submit-listing-btn"
                className="flex-1"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                {isSubmitting ? "Submitting…" : "Submit Listing"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
