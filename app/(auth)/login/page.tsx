"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tractor, Eye, EyeOff, ArrowRight, Loader2, ShieldCheck, X } from "lucide-react";
import { useAuth, ADMIN_EMAIL } from "@/context/auth-context";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setServerError(null);
    try {
      const res = await login(data.email, data.password);
      if (res.success) {
        if (data.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      } else {
        setServerError(res.error || "Login failed. Please check credentials.");
      }
    } catch (err: any) {
      setServerError(err?.message || "An unexpected error occurred.");
    }
  }

  async function handleGoogleSignIn(selectedEmail: string) {
    setIsGoogleLoading(true);
    try {
      const res = await loginWithGoogle(selectedEmail);
      setShowGoogleModal(false);
      if (selectedEmail.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setServerError("Google authentication failed.");
    } finally {
      setIsGoogleLoading(false);
    }
  }

  async function handleQuickAdminLogin() {
    setValue("email", ADMIN_EMAIL);
    setValue("password", "admin123456");
    await login(ADMIN_EMAIL, "admin123456");
    router.push("/admin");
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 hero-gradient relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Floating icons */}
        <div className="absolute top-24 left-16 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float">
          <span className="text-3xl">🚜</span>
        </div>
        <div className="absolute top-40 right-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float-delay">
          <span className="text-2xl">🌾</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float">
          <span className="text-2xl">💧</span>
        </div>

        <div className="relative text-center space-y-6 max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Tractor className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">KisanRent</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Welcome back, Kisan!
          </h2>
          <p className="text-emerald-100/80 leading-relaxed">
            Log in to browse available equipment, manage your bookings, and
            connect with equipment owners near you.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { v: "10K+", l: "Farmers" },
              { v: "5K+", l: "Equipment" },
              { v: "500+", l: "Villages" },
              { v: "4.8★", l: "Rating" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
              >
                <p className="text-xl font-bold text-white">{s.v}</p>
                <p className="text-xs text-emerald-200/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-7">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
              <Tractor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-emerald-600">KisanRent</span>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-3xl font-black text-gray-900 dark:text-white font-heading tracking-tight">
              Sign in to KisanRent
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>

          {/* ================= GOOGLE SIGN IN BUTTON ================= */}
          <div className="space-y-4">
            <button
              type="button"
              id="google-login-btn"
              onClick={() => setShowGoogleModal(true)}
              disabled={isGoogleLoading}
              className="w-full flex items-center justify-center gap-3 h-12 px-4 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 hover:border-stone-400 font-bold text-sm shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              {/* Official Google G Logo SVG */}
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isGoogleLoading ? "Connecting to Google…" : "Log in with Google"}</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-stone-200 dark:border-stone-800" />
              </div>
              <span className="relative bg-gray-50 dark:bg-gray-950 px-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                Or continue with email
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            id="login-form"
          >
            {serverError && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                {serverError}
              </div>
            )}

            <Input
              id="login-email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <div className="space-y-1.5">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="flex h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 pr-11 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600" />
                <span className="text-gray-600 dark:text-gray-400 text-xs">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 text-xs font-semibold"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-11 font-bold"
              size="lg"
              disabled={isSubmitting}
              id="login-submit"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
              {isSubmitting ? "Signing in…" : "Sign in with Email"}
            </Button>

            {/* Quick Admin Access Button */}
            <div className="relative pt-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-gray-50 dark:bg-gray-950 px-2 text-gray-400 font-bold tracking-wider">
                  Admin One-Click
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleQuickAdminLogin}
              className="w-full border-amber-300 bg-amber-500/10 text-amber-800 dark:text-amber-300 dark:border-amber-700/60 font-bold text-xs hover:bg-amber-500/20 rounded-xl h-11"
              id="quick-admin-login-btn"
            >
              <ShieldCheck className="h-4 w-4 mr-2 text-amber-600" />
              Sign in as Admin ({ADMIN_EMAIL})
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
            >
              Create one free
            </Link>
          </p>
        </div>
      </div>

      {/* ================= GOOGLE ACCOUNT CHOOSER MODAL ================= */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="text-sm font-bold text-stone-800 dark:text-stone-200">
                  Choose a Google account
                </span>
              </div>
              <button
                onClick={() => setShowGoogleModal(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-xs text-stone-500">
              to continue to <strong className="text-emerald-700 dark:text-emerald-400">KisanRent</strong>
            </p>

            <div className="space-y-2">
              {/* Account 1: Master Admin chowdaryu24@gmail.com */}
              <button
                type="button"
                onClick={() => handleGoogleSignIn(ADMIN_EMAIL)}
                className="w-full flex items-center justify-between p-3 rounded-2xl border border-amber-300 bg-amber-50/60 dark:bg-amber-950/30 hover:bg-amber-100/80 dark:hover:bg-amber-900/50 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-sm shadow-sm">
                    U
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <span>Umesh Chowdary</span>
                      <span className="text-[9px] bg-amber-500 text-white px-1.5 py-0.2 rounded font-black">
                        ADMIN
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      {ADMIN_EMAIL}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-amber-700 dark:text-amber-400" />
              </button>

              {/* Account 2: Demo Farmer Account */}
              <button
                type="button"
                onClick={() => handleGoogleSignIn("farmer.patil@gmail.com")}
                className="w-full flex items-center justify-between p-3 rounded-2xl border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
                    F
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      Farmer Patil
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      farmer.patil@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-stone-400" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  const input = prompt("Enter your Google email address:");
                  if (input) handleGoogleSignIn(input);
                }}
                className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
              >
                + Use another Google account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
