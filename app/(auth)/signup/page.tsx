"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tractor, Eye, EyeOff, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    role: z.enum(["farmer", "owner"], {
      required_error: "Please select your role",
    }),
    agreedToTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms to continue" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { role: "farmer" },
  });

  const selectedRole = watch("role");

  async function onSubmit(data: SignupFormData) {
    setServerError(null);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          phone: data.phone,
          role: data.role,
        },
      },
    });
    if (error) {
      setServerError(error.message);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Check your email!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            We&apos;ve sent a confirmation link to your email address. Click it
            to verify your account and start using KisanRent.
          </p>
          <Link href="/login">
            <Button className="w-full" size="lg">
              Go to Login
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-2/5 hero-gradient relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative text-center space-y-6 max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Tractor className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">KisanRent</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Join 10,000+ farmers
          </h2>
          <p className="text-emerald-100/80 leading-relaxed">
            Create your free account and access affordable farm equipment near
            you — or list your equipment and start earning today.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Free to sign up",
              "Access 5,000+ equipment listings",
              "Secure payments via UPI & cards",
              "24/7 customer support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-emerald-100"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-start justify-center overflow-y-auto p-6 lg:p-12 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-lg space-y-6 py-4">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
              <Tractor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-emerald-600">KisanRent</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Create account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Start renting or listing equipment in minutes
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            id="signup-form"
          >
            {serverError && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                {serverError}
              </div>
            )}

            {/* Role selector */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                I want to
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "farmer", label: "Rent Equipment", emoji: "🧑‍🌾" },
                  { val: "owner", label: "List My Equipment", emoji: "🚜" },
                ].map((opt) => (
                  <label
                    key={opt.val}
                    className={`flex items-center gap-3 cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                      selectedRole === opt.val
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                        : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      value={opt.val}
                      className="sr-only"
                      {...register("role")}
                    />
                    <span className="text-2xl">{opt.emoji}</span>
                    <span
                      className={`text-sm font-semibold ${
                        selectedRole === opt.val
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.role && (
                <p className="text-xs text-red-500">{errors.role.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="signup-name"
                label="Full Name"
                type="text"
                placeholder="Rajesh Kumar"
                autoComplete="name"
                error={errors.fullName?.message}
                {...register("fullName")}
              />
              <Input
                id="signup-phone"
                label="Mobile Number"
                type="tel"
                placeholder="9876543210"
                autoComplete="tel"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <Input
              id="signup-email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min 8 characters"
                    autoComplete="new-password"
                    className="flex h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 pr-11 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Input
                id="signup-confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="Repeat password"
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="signup-terms"
                className="mt-0.5 rounded border-gray-300 text-emerald-600"
                {...register("agreedToTerms")}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to KisanRent&apos;s{" "}
                <Link
                  href="/terms"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.agreedToTerms && (
              <p className="text-xs text-red-500 -mt-3">
                {errors.agreedToTerms.message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
              id="signup-submit"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
              {isSubmitting ? "Creating account…" : "Create free account"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
