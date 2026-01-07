"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, BarChart3, Layout, ChevronDown } from "lucide-react";
import { formatIDR } from "@/utils/format";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tighter">Link-Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block">
                Log in
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                    New Launch
                  </span>
                  <span className="ml-2 text-xs text-zinc-400 dark:text-zinc-500">|</span>
                  <span className="ml-2 text-xs font-medium text-zinc-900 dark:text-white">
                    Say goodbye to subscriptions
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  Your All-in-One Link Hub. <br className="hidden lg:block" />
                  <span className="text-zinc-500 dark:text-zinc-400">One Payment, Forever.</span>
                </h1>
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Stop renting your bio link. Create a stunning, customizable page to showcase everything you do. Pay once, own it for life.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/register"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-black rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Claim Your Hub
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="#features"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-zinc-700 bg-zinc-100 rounded-full hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all"
                  >
                    View Demo
                  </Link>
                </div>
                <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    No monthly fees
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Free updates
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative w-full max-w-md lg:max-w-full"
            >
              {/* Abstract decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50" />

              {/* Phone Mockup Placeholder */}
              <div className="relative z-10 mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-black">
                  {/* Mock Content */}
                  <div className="flex flex-col items-center pt-10 px-4 h-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
                    <div className="w-20 h-20 rounded-full bg-zinc-300 dark:bg-zinc-800 mb-4 animate-pulse" />
                    <div className="w-32 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 mb-2" />
                    <div className="w-48 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800/50 mb-8" />

                    <div className="w-full space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center px-4">
                          <div className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-700 mr-3" />
                          <div className="w-24 h-3 rounded bg-zinc-100 dark:bg-zinc-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to grow</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Powerful features to help you connect with your audience, built for creators and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Unlimited Links",
                desc: "Add as many links as you want. Socials, videos, music, products - organize them your way."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "In-Depth Analytics",
                desc: "Track clicks, views, and engagement. Understand your audience with privacy-first analytics."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Custom Themes",
                desc: "Match your brand with custom colors, fonts, and backgrounds. Stand out from the crowd."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-black dark:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Stop bleeding money on monthly subscriptions. Pay once and it's yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            {/* Competitor Card */}
            <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 opacity-70 scale-95">
              <h3 className="text-xl font-semibold mb-2">The "Other" Guys</h3>
              <div className="text-3xl font-bold text-zinc-500 mb-6">{formatIDR(1100000)}<span className="text-lg font-normal text-zinc-400">/year</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-500">
                  <Check className="w-5 h-5 mr-3" /> Monthly recurring fees
                </li>
                <li className="flex items-center text-zinc-500">
                  <Check className="w-5 h-5 mr-3" /> Locked features
                </li>
                <li className="flex items-center text-zinc-500">
                  <Check className="w-5 h-5 mr-3" /> Upsells everywhere
                </li>
              </ul>
              <button disabled className="w-full py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-500 font-medium cursor-not-allowed">
                Subscribe Monthly
              </button>
            </div>

            {/* Our Card */}
            <div className="p-8 rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-2xl relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide transform rotate-12 shadow-md">
                Best Value
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold tracking-tight">{formatIDR(450000)}</span>
                <span className="ml-2 text-xl font-medium text-zinc-500 dark:text-zinc-400">one-time</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
                Get full access to all features, forever. No hidden fees.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited Links & Clicks",
                  "Advanced Analytics",
                  "Custom SEO Metadata",
                  "Priority Support",
                  "Future Updates Included"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="w-full block text-center py-4 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-lg transition-all"
              >
                Get Included For {formatIDR(450000)}
              </Link>
              <p className="text-center text-xs text-zinc-400 mt-4">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is it really a one-time payment?", a: "Yes. You pay once and have access to the platform forever. No monthly subscriptions, no hidden billing." },
              { q: "Can I use my own domain?", a: "Currently we support link-hub.com/yourname, but custom domain support is on our roadmap for the next quarter for free." },
              { q: "What happens if I'm not satisfied?", a: "We offer a 30-day money-back guarantee. If you don't love it, just email us and we'll refund complete amount." }
            ].map((item, i) => (
              <details key={i} className="group bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-lg">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-zinc-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-bold tracking-tighter">Link-Hub</span>
              <p className="text-sm text-zinc-500 mt-1">© {new Date().getFullYear()} Link-Hub. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
