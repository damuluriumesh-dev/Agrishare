import Link from "next/link";
import {
  Tractor,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Heart,
  Globe,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Trust Badges Strip */}
      <div className="border-b border-stone-800/80 bg-stone-950/60 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">100% Verified Owners</p>
                <p className="text-[11px] text-stone-400">RC & KYC validated</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Fair Transparent Pricing</p>
                <p className="text-[11px] text-stone-400">No hidden fees per day/hr</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">On-Time Farm Delivery</p>
                <p className="text-[11px] text-stone-400">Trained local operators</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">24/7 Farmer Helpline</p>
                <p className="text-[11px] text-stone-400">1800-120-FARM (Free)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white">
                <Tractor className="h-5 w-5" />
              </div>
              <span className="text-xl font-black text-white font-heading">
                KisanRent
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Empowering India&apos;s agrarian heartbeat. We connect farmers with
              nearby equipment owners to make modern farming tools affordable,
              accessible, and dependable.
            </p>
            <div className="pt-2 space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Pan-India Agricultural Hubs & Panchayats</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>kisan-support@kisanrent.in</span>
              </div>
            </div>
          </div>

          {/* Column 1: Rent Equipment */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Machinery
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/equipment" className="hover:text-emerald-400 transition-colors">
                  Tractor Rentals
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-emerald-400 transition-colors">
                  Harvesters & Threshers
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-emerald-400 transition-colors">
                  Solar & Diesel Pumps
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-emerald-400 transition-colors">
                  Rotavators & Tillers
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-emerald-400 transition-colors">
                  Agri-Drones & Sprayers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Owners */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              For Machinery Owners
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/list-equipment" className="hover:text-emerald-400 transition-colors font-semibold text-amber-400">
                  + List Your Equipment
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Owner Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Earnings & Payouts
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-emerald-400 transition-colors">
                  Equipment Insurance Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/styleguide" className="hover:text-emerald-400 transition-colors">
                  Design System & Tokens
                </Link>
              </li>
              <li>
                <span className="text-stone-400">Help Center (1800-120-FARM)</span>
              </li>
              <li>
                <span className="text-stone-400">Security & Deposit Safety</span>
              </li>
              <li>
                <span className="text-stone-400">Terms of Service</span>
              </li>
              <li>
                <span className="text-stone-400">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2024 KisanRent Platform. Built for Indian Farmers.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            <span>for rural prosperity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
