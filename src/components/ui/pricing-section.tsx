"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { Phone, Mail, User, Zap, Check, Clock } from "lucide-react";

type BillingCycle = "monthly" | "yearly";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const starterData = {
    monthly: {
      price: 3999,
      period: "/seat/ month",
      views: "5,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 70 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 700 verified contacts" },
      ],
      note: null,
      badge: null,
      yearlyBilled: null,
      yearlySave: null,
    },
    yearly: {
      price: 3300,
      period: "/seat/ month",
      views: "5,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 70 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 700 verified contacts" },
      ],
      note: null,
      badge: null,
      yearlyBilled: 39600,
      yearlySave: 8388,
    }
  };

  const growthData = {
    monthly: {
      price: 7999,
      period: "/seat/ month",
      views: "10,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 150 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 1,500 verified contacts" },
      ],
      note: null,
      badge: null,
      isStartingAt: false,
      hidePrice: false,
      yearlyBilled: null,
      yearlySave: null,
    },
    yearly: {
      price: 6600,
      period: "/seat/ month",
      views: "10,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 150 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 1,500 verified contacts" },
      ],
      note: null,
      badge: null,
      isStartingAt: false,
      hidePrice: false,
      yearlyBilled: 79200,
      yearlySave: 16788,
    }
  };

  const proData = {
    monthly: {
      price: 13999,
      period: "/seat/ month",
      views: "20,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 300 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 3,000 verified contacts" },
      ],
      note: null,
      badge: null,
      isStartingAt: false,
      hidePrice: false,
      yearlyBilled: null,
      yearlySave: null,
    },
    yearly: {
      price: 11500,
      period: "/seat/ month",
      views: "20,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Call up to 300 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Bulk-email up to 3,000 verified contacts" },
      ],
      note: null,
      badge: null,
      isStartingAt: false,
      hidePrice: false,
      yearlyBilled: 138000,
      yearlySave: 29988,
    }
  };

  const currentStarter = starterData[billingCycle];
  const currentGrowth = growthData[billingCycle];
  const currentPro = proData[billingCycle];

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-100 text-gray-900 min-h-screen">
      {/* Background gradients */}
      <div className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(circle at center, #206ce8 0%, transparent 70%)",
             opacity: 0.6,
             mixBlendMode: "multiply",
           }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="md:text-6xl sm:text-4xl text-3xl font-medium text-gray-900 mb-4">
            Plans that works best for your{" "}
            <span className="border border-dashed border-blue-500 px-2 py-1 rounded-xl bg-blue-100 capitalize inline-block">
              business
            </span>
          </h2>
          
          <p className="sm:text-base text-sm text-gray-600 sm:w-[70%] w-[80%] mx-auto mt-6">
            Trusted by modern recruiters, we help teams source the best passive talent. Explore which option is right for you.
          </p>

          {/* Top Toggle (styled like image) */}
          <div className="flex justify-center mt-10">
            <div className="relative z-50 flex w-fit rounded-full bg-neutral-50 border border-gray-200 p-1">
              {(["monthly", "yearly"] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
                    billingCycle === cycle ? "text-white" : "text-muted-foreground hover:text-black"
                  }`}
                >
                  {billingCycle === cycle && (
                    <motion.div
                      layoutId="switch"
                      className="absolute inset-0 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 capitalize flex items-center gap-2">
                    {cycle}
                    {cycle === "yearly" && (
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-black border border-blue-100">
                        Save 18%
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid (4 Tier) */}
        <div className="grid md:grid-cols-4 gap-4 max-w-full mx-auto items-stretch mb-20">
          {/* STARTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[24px] border border-neutral-200 p-6 shadow-sm flex flex-col h-full relative overflow-hidden"
          >
            <div className="flex-grow flex flex-col">
              <div className="mb-6 min-h-[340px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 uppercase mb-2">
                  STARTER
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  For solo recruiters. One tool to source, call and close.
                </p>

                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-center gap-2">
                    {currentStarter.badge && (
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                        {currentStarter.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-semibold text-gray-900">
                        ₹<NumberFlow value={currentStarter.price} format={{ useGrouping: true }} />
                      </span>
                      <span className="text-gray-600 font-medium text-sm">
                        {currentStarter.period}
                      </span>
                    </div>
                    {billingCycle === "yearly" && currentStarter.yearlyBilled && (
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        Billed ₹{currentStarter.yearlyBilled.toLocaleString('en-IN')}/yr · Save ₹{currentStarter.yearlySave.toLocaleString('en-IN')}/yr
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-sm font-medium text-gray-700 flex-grow">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Up to {currentStarter.views} public profile views
                  </p>
                  {currentStarter.outcomes.map((item: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <p className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span>{item.text}</span>
                      </p>
                      {idx === 0 && (
                        <div className="flex items-center gap-2 px-4">
                          <div className="h-[1px] flex-grow bg-neutral-100" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
                          <div className="h-[1px] flex-grow bg-neutral-100" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 px-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 mb-6">
                Start Now →
              </button>
            </div>

            <hr className="border-neutral-100 mb-5" />

            <div className="space-y-2">
              {[
                "AI-ranked shortlist — unlock only the contacts worth calling",
                "Direct mobile numbers — call people nobody else has called",
                "Phone unlock includes verified email — free",
                "Weekly verified data refresh",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-2 border-b border-dashed border-neutral-100 last:border-0">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-white border border-blue-400">
                    <Check className="h-3 w-3 text-blue-500" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-gray-600 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GROWTH CARD (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 rounded-[24px] border-2 border-blue-500 p-6 shadow-xl shadow-blue-500/10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                Popular
              </span>
            </div>

            <div className="flex-grow flex flex-col">
              <div className="mb-6 min-h-[340px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 uppercase mb-2">
                  GROWTH
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  For agencies closing 4–6 roles a month.
                </p>

                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-center gap-2">
                    {currentGrowth.badge && (
                      <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                        {currentGrowth.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-semibold text-gray-900">
                        ₹<NumberFlow value={currentGrowth.price} format={{ useGrouping: true }} />
                      </span>
                      <span className="text-gray-600 font-medium text-sm">
                        {currentGrowth.period}
                      </span>
                    </div>
                    {billingCycle === "yearly" && currentGrowth.yearlyBilled && (
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        Billed ₹{currentGrowth.yearlyBilled.toLocaleString('en-IN')}/yr · Save ₹{currentGrowth.yearlySave.toLocaleString('en-IN')}/yr
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-sm font-medium text-gray-700 flex-grow">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Up to {currentGrowth.views} public profile views
                  </p>
                  {currentGrowth.outcomes.map((item: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <p className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span>{item.text}</span>
                      </p>
                      {idx === 0 && (
                        <div className="flex items-center gap-2 px-4">
                          <div className="h-[1px] flex-grow bg-blue-100" />
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">OR</span>
                          <div className="h-[1px] flex-grow bg-blue-100" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 mb-6 bg-gradient-to-t from-blue-500 to-blue-600 border border-blue-400 text-white`}>
                Upgrade to Growth →
              </button>
            </div>

            <hr className="border-blue-200 mb-5" />

            <div className="space-y-2">
              {[
                "AI-ranked shortlist — unlock only the contacts worth calling",
                "Direct mobile numbers — call people nobody else has called",
                "Phone unlock includes verified email — free",
                "Weekly verified data refresh",
                "Email sequence automation",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-2 border-b border-dashed border-blue-200 last:border-0">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-white border border-blue-600">
                    <Check className="h-3 w-3 text-blue-600" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-gray-700 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PRO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-[24px] border border-neutral-200 p-6 shadow-sm flex flex-col h-full relative overflow-hidden"
          >
            <div className="flex-grow flex flex-col">
              <div className="mb-6 min-h-[340px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 uppercase mb-2">
                  PRO
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  For agencies running 8–12 mandates. Your full sourcing machine.
                </p>

                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-semibold text-gray-900">
                        ₹<NumberFlow value={currentPro.price} format={{ useGrouping: true }} />
                      </span>
                      <span className="text-gray-600 font-medium text-sm">
                        {currentPro.period}
                      </span>
                    </div>
                    {billingCycle === "yearly" && currentPro.yearlyBilled && (
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        Billed ₹{currentPro.yearlyBilled.toLocaleString('en-IN')}/yr · Save ₹{currentPro.yearlySave.toLocaleString('en-IN')}/yr
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-sm font-medium text-gray-700 flex-grow">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Up to {currentPro.views} public profile views
                  </p>
                  {currentPro.outcomes.map((item: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <p className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span>{item.text}</span>
                      </p>
                      {idx === 0 && (
                        <div className="flex items-center gap-2 px-4">
                          <div className="h-[1px] flex-grow bg-neutral-100" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
                          <div className="h-[1px] flex-grow bg-neutral-100" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 px-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 mb-6">
                Start with Pro →
              </button>
            </div>

            <hr className="border-neutral-100 mb-5" />

            <div className="space-y-2">
              {[
                "AI-ranked shortlist — unlock only the contacts worth calling",
                "Direct mobile numbers — call people nobody else has called",
                "Phone unlock includes verified email — free",
                "Weekly verified data refresh",
                "Email sequence automation",
                "Priority support",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-2 border-b border-dashed border-neutral-100 last:border-0">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-white border border-blue-400">
                    <Check className="h-3 w-3 text-blue-500" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-gray-600 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BUSINESS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[24px] border border-neutral-200 p-6 shadow-sm flex flex-col h-full relative overflow-hidden"
          >
            <div className="flex-grow flex flex-col">
              <div className="mb-6 min-h-[340px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 uppercase mb-2">
                  BUSINESS
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  For large teams needing custom limits, API access and dedicated support.
                </p>

                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-gray-900">Business / Custom</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm font-medium text-gray-700 flex-grow">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Custom search volume
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gray-400" />
                    Custom contact credits
                  </p>
                </div>
              </div>

              <button className="w-full py-3 px-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 mb-6">
                Contact Sales →
              </button>
            </div>

            <hr className="border-neutral-100 mb-5" />

            <div className="space-y-2">
              {[
                "Custom search volume",
                "Custom contact credits",
                "Dedicated account manager",
                "Custom ATS integrations",
                "Team collaboration tools",
                "Priority support (email, chat, WhatsApp)",
                "SLA guarantee",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-2 border-b border-dashed border-neutral-100 last:border-0">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-white border border-blue-400">
                    <Check className="h-3 w-3 text-blue-500" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-gray-600 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CREDIT EXPLAINER */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white border border-neutral-200 rounded-[32px] p-8 md:p-12 shadow-sm overflow-hidden relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">How credits work</h3>
              <p className="text-sm text-gray-500 font-medium">Unlock only the contacts you choose — zero waste.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12 relative">
              {/* Divider lines for desktop */}
              <div className="hidden md:block absolute left-1/3 top-1/4 bottom-1/4 w-px bg-neutral-100" />
              <div className="hidden md:block absolute left-2/3 top-1/4 bottom-1/4 w-px bg-neutral-100" />

              <div className="flex flex-col items-center text-center px-4">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-100 mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">Email only</p>
                <p className="text-sm font-bold text-blue-600 mb-1">0.1 credit</p>
                <p className="text-xs text-gray-400 font-medium">10 emails = 1 credit</p>
              </div>

              <div className="flex flex-col items-center text-center px-4 relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight flex items-center gap-1 shadow-sm">
                    🔥 Best reply
                  </span>
                </div>
                <div className="flex items-center justify-center -space-x-3 mb-6">
                  <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-100 relative z-10 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center text-gray-500 border border-neutral-200 relative z-0">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">Phone + email</p>
                <p className="text-sm font-bold text-blue-600 mb-1">1 credit</p>
                <p className="text-xs text-gray-400 font-medium">Verified email included free</p>
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-100 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">Data freshness</p>
                <p className="text-sm font-bold text-blue-600 mb-1">Weekly</p>
                <p className="text-xs text-gray-400 font-medium">Contacts re-verified every 7 days</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-neutral-50">
              <p className="text-sm text-gray-400 font-medium italic">
                "Credits are only deducted for verified results. If we can't find the contact, you pay nothing."
              </p>
            </div>
          </div>
        </div>

        {/* Value Strip */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-8"
        >
          <div className="flex justify-center">
            <Link 
              href="/comparison"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 border border-neutral-200 shadow-sm rounded-full text-gray-900 transition-all duration-200 font-medium"
            >
              View full comparison
              <span className="text-blue-500">→</span>
            </Link>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto font-medium">
            One extra placement on a ₹10L role = ₹83,000 fee. Nexire costs as low as ₹3,300. Keep 100% of your fee.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
