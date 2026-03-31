"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { Phone, Mail, User, Zap, Sparkles, CheckCheck, Shuffle, Users } from "lucide-react";

type BillingCycle = "monthly" | "quarterly" | "semiannual" | "yearly";
type StarterInnerCycle = "15days" | "1month";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [starterInnerCycle, setStarterInnerCycle] = useState<StarterInnerCycle>("15days");

  const starterData = {
    monthly: {
      "15days": {
        price: 3999,
        period: "/ 15 days",
        views: "5,000",
        outcomes: [
          { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 80 passive candidates" },
          { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 320 verified contacts in one sequence" },
          { icon: <Shuffle className="w-4 h-4 text-gray-400" />, text: "Mix both for the best response rate" }
        ],
        note: null,
        strikethrough: null,
        badge: null,
      },
      "1month": {
        price: 6999,
        period: "/ month",
        views: "10,000",
        outcomes: [
          { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 200 passive candidates" },
          { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 800 verified contacts in one sequence" },
          { icon: <Shuffle className="w-4 h-4 text-gray-400" />, text: "Mix both for the best response rate" }
        ],
        note: null,
        strikethrough: null,
        badge: null,
      }
    },
    quarterly: {
      price: 18500,
      period: "/ 3 months",
      views: "30,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 600 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 2,400 verified contacts in one sequence" },
        { icon: <Shuffle className="w-4 h-4 text-gray-400" />, text: "Mix both for the best response rate" }
      ],
      note: "All 600 credits given upfront on purchase",
      strikethrough: 20997,
      badge: "Save 12%",
    },
    semiannual: {
      price: 34400,
      period: "/ 6 months",
      views: "60,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 1,200 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 4,800 verified contacts in one sequence" },
        { icon: <Shuffle className="w-4 h-4 text-gray-400" />, text: "Mix both for the best response rate" }
      ],
      note: "All 1,200 credits given upfront on purchase",
      strikethrough: 41994,
      badge: "Save 18%",
    },
    yearly: {
      price: 60500,
      period: "/ year",
      views: "1,20,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 2,400 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 9,600 verified contacts in one sequence" },
        { icon: <Shuffle className="w-4 h-4 text-gray-400" />, text: "Mix both for the best response rate" }
      ],
      note: "All 2,400 credits given upfront on purchase",
      strikethrough: 83988,
      badge: "⭐ Save 28% — Best Value",
    }
  };

  const growthData = {
    monthly: {
      price: 12999,
      period: "/ month",
      views: "20,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 500 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 2,000 verified contacts in one sequence" },
        { icon: <Users className="w-4 h-4 text-gray-400" />, text: "Split outreach across 2 team members simultaneously" }
      ],
      note: null,
      strikethrough: null,
      badge: null,
      isStartingAt: false,
      hidePrice: false,
    },
    quarterly: {
      price: 37999,
      period: "/ 3 months",
      views: "60,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 1,600 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 6,400 verified contacts in one sequence" },
        { icon: <Users className="w-4 h-4 text-gray-400" />, text: "Split outreach across 2 team members simultaneously" }
      ],
      note: "All 1,600 credits given upfront on purchase",
      strikethrough: 38997,
      badge: "Save ₹998 + 100 Bonus Credits",
      isStartingAt: false,
      hidePrice: false,
    },
    semiannual: {
      price: 71999,
      period: "/ 6 months",
      views: "1,20,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 3,000 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 12,000 verified contacts in one sequence" },
        { icon: <Users className="w-4 h-4 text-gray-400" />, text: "Split outreach across 2 team members simultaneously" }
      ],
      note: "All 3,000 credits given upfront on purchase",
      strikethrough: null,
      badge: "Save 15%",
      isStartingAt: true,
      hidePrice: true,
    },
    yearly: {
      price: 129999,
      period: "/ year",
      views: "2,40,000",
      outcomes: [
        { icon: <Phone className="w-4 h-4 text-gray-400" />, text: "Directly call up to 6,000 passive candidates" },
        { icon: <Mail className="w-4 h-4 text-gray-400" />, text: "Or bulk-email up to 24,000 verified contacts in one sequence" },
        { icon: <Users className="w-4 h-4 text-gray-400" />, text: "Split outreach across 2 team members simultaneously" }
      ],
      note: "All 6,000 credits given upfront on purchase",
      strikethrough: null,
      badge: "⭐ Save 23% — Best Value",
      isStartingAt: true,
      hidePrice: true,
    }
  };

  const currentStarter = billingCycle === "monthly" 
    ? starterData.monthly[starterInnerCycle] 
    : starterData[billingCycle as keyof typeof starterData] as any;

  const currentGrowth = growthData[billingCycle];

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
              {(["monthly", "quarterly", "semiannual", "yearly"] as const).map((cycle) => (
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
                    {cycle === "semiannual" ? "Semiannual" : cycle}
                    {cycle === "yearly" && (
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-black border border-blue-100">
                        Save 23%
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid (3 Tier as requested) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch mb-20">
          {/* STARTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[24px] border border-neutral-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 uppercase mb-2">
                STARTER
              </h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                For solo recruiters closing roles fast, without the fluff.
              </p>
              
              {/* Starter Inner Toggle (Only on Monthly) */}
              <div className="h-10 mb-6">
                <AnimatePresence mode="wait">
                  {billingCycle === "monthly" ? (
                    <motion.div
                      key="inner-toggle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-flex p-1 bg-neutral-50 border border-neutral-200 rounded-lg"
                    >
                      <button
                        onClick={() => setStarterInnerCycle("15days")}
                        className={`px-4 py-1 text-xs font-bold transition-all rounded-md ${
                          starterInnerCycle === "15days" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                        }`}
                      >
                        15 Days
                      </button>
                      <button
                        onClick={() => setStarterInnerCycle("1month")}
                        className={`px-4 py-1 text-xs font-bold transition-all rounded-md ${
                          starterInnerCycle === "1month" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                        }`}
                      >
                        1 Month
                      </button>
                    </motion.div>
                  ) : (
                    <div className="h-full" />
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <div className="flex items-center gap-2">
                  {currentStarter.strikethrough && (
                    <span className="text-gray-400 line-through text-lg font-medium">
                      ₹{currentStarter.strikethrough.toLocaleString('en-IN')}
                    </span>
                  )}
                  {currentStarter.badge && (
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                      {currentStarter.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-gray-900">
                    ₹<NumberFlow value={currentStarter.price} format={{ useGrouping: true }} />
                  </span>
                  <span className="text-gray-600 font-medium text-sm">
                    {currentStarter.period}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm font-medium text-gray-700">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Up to {currentStarter.views} profile views
                </p>
                {currentStarter.outcomes.map((item: any, idx: number) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </p>
                ))}
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  1 seat
                </p>
                {currentStarter.note && (
                  <p className="text-xs text-gray-400 mt-2 font-normal italic">
                    "{currentStarter.note}"
                  </p>
                )}
              </div>
            </div>

            <button className="w-full py-4 px-6 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 mb-8">
              Start Now →
            </button>

            <hr className="border-neutral-100 mb-8" />

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "**Direct mobile numbers** — call people nobody else has called this week",
                "**Work + personal emails** — higher reply rate when work inbox is silent",
                "AI match ranking + insights",
                "CSV export",
                "**Bulk email sequences** — send to 100s of candidates in one click",
                "1 login seat",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group relative">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-blue-50 border border-blue-500">
                    <CheckCheck className="h-3 w-3 text-blue-500" strokeWidth={3} />
                  </span>
                  <div className="flex flex-col relative w-full">
                    <span className="text-sm text-gray-700 border-b border-dashed border-gray-300 pb-0.5 w-fit">
                      {feature.includes('**') ? (
                        <>
                          <strong>{feature.split('**')[1]}</strong>
                          {feature.split('**')[2]}
                        </>
                      ) : feature}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GROWTH CARD (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 rounded-[24px] border-2 border-blue-500 p-8 shadow-xl shadow-blue-500/10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                Popular
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 uppercase mb-2">
                GROWTH
              </h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                For agencies and teams hiring at scale, every month.
              </p>
              
              <div className="h-10 mb-6 flex items-center">
                <span className="text-xs font-bold text-blue-600/60 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Scale your agency
                </span>
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <div className="flex items-center gap-2">
                  {currentGrowth.strikethrough && (
                    <span className="text-gray-400 line-through text-lg font-medium">
                      ₹{currentGrowth.strikethrough.toLocaleString('en-IN')}
                    </span>
                  )}
                  {currentGrowth.badge && (
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                      {currentGrowth.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  {currentGrowth.hidePrice ? (
                    <span className="text-4xl font-semibold text-gray-900">Contact Us</span>
                  ) : (
                    <>
                      {currentGrowth.isStartingAt && (
                        <span className="text-gray-500 font-bold text-lg mr-1">Starting at</span>
                      )}
                      <span className="text-4xl font-semibold text-gray-900">
                        ₹<NumberFlow value={currentGrowth.price} format={{ useGrouping: true }} />
                      </span>
                      <span className="text-gray-600 font-medium text-sm">
                        {currentGrowth.period}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-3 text-sm font-medium text-gray-700">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Up to {currentGrowth.views} profile views
                </p>
                {currentGrowth.outcomes.map((item: any, idx: number) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </p>
                ))}
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  2 seats
                </p>
                {currentGrowth.note && (
                  <p className="text-xs text-gray-400 mt-2 font-normal italic">
                    "{currentGrowth.note}"
                  </p>
                )}
              </div>
            </div>

            <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 mb-8 ${
              billingCycle === "semiannual" || billingCycle === "yearly"
                ? "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                : "bg-gradient-to-t from-blue-500 to-blue-600 border border-blue-400 text-white"
            }`}>
              {billingCycle === "semiannual" || billingCycle === "yearly"
                ? "Contact Us →"
                : "Upgrade to Growth →"}
            </button>

            <hr className="border-blue-200 mb-8" />

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "**Direct mobile numbers** — call people nobody else has called this week",
                "**Work + personal emails** — higher reply rate when work inbox is silent",
                "AI match ranking + insights",
                "Unlimited exports (CSV + PDF)",
                "**Bulk email sequences** — send to 100s of candidates in one click",
                "2 login seats",
                "Priority support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group relative">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-blue-100 border border-blue-600">
                    <CheckCheck className="h-3 w-3 text-blue-600" strokeWidth={3} />
                  </span>
                  <div className="flex flex-col relative w-full">
                    <span className="text-sm text-gray-700 border-b border-dashed border-gray-300 pb-0.5 w-fit">
                      {feature.includes('**') ? (
                        <>
                          <strong>{feature.split('**')[1]}</strong>
                          {feature.split('**')[2]}
                        </>
                      ) : feature}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* BUSINESS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[24px] border border-neutral-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 uppercase mb-2">
                BUSINESS
              </h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                For large enterprise teams needing custom limits and API access.
              </p>
              
              <div className="h-10 mb-6" />

              <div className="flex flex-col gap-1 mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-gray-900">Business</span>
                </div>
              </div>

              <div className="space-y-3 text-sm font-medium text-gray-700">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Custom search volume
                </p>
                <p className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gray-400" />
                  Custom contact credits
                </p>
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Custom seats
                </p>
              </div>
            </div>

            <button className="w-full py-4 px-6 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 mb-8">
              Contact sales →
            </button>

            <hr className="border-neutral-100 mb-8" />

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Custom search volume",
                "Custom contact credits",
                "Dedicated account manager",
                "Custom ATS integrations",
                "Team collaboration — Custom seats",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group relative">
                  <span className="mt-0.5 flex-shrink-0 grid place-content-center h-5 w-5 rounded-full bg-blue-50 border border-blue-500">
                    <CheckCheck className="h-3 w-3 text-blue-500" strokeWidth={3} />
                  </span>
                  <div className="flex flex-col relative w-full">
                    <span className="text-sm text-gray-700 border-b border-dashed border-gray-300 pb-0.5 w-fit">
                      {feature}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CREDIT EXPLAINER */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white border border-neutral-200 rounded-[32px] p-8 md:p-10 shadow-sm overflow-hidden relative">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How credits work</h3>
              <p className="text-sm text-gray-500">Simple, predictable consumption model</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">Phone only</p>
                  <p className="text-xs font-bold text-blue-600">1 credit</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-neutral-100" />

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">Work email only</p>
                  <p className="text-xs font-bold text-blue-600">0.25 credit</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-neutral-100" />

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-gray-600 border border-neutral-200">
                  <Mail className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">Personal email</p>
                  <p className="text-xs font-bold text-blue-600">0.25 credit</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-neutral-100" />

              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center text-gray-600 border border-neutral-200 relative z-10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-gray-600 border border-neutral-100 relative z-0">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">Both emails</p>
                  <p className="text-xs font-bold text-blue-600">0.5 credit</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-neutral-100" />

              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                    🔥 Best reply
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">Phone + both</p>
                  <p className="text-xs font-bold text-blue-600">1.5 credits</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 font-medium">
                "Credits unlock only the profiles you choose — zero waste."
              </p>
            </div>
          </div>
        </div>

        {/* Value Strip */}
        <motion.div 
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
            One extra placement on a ₹10L role = ₹83,000 fee. Nexire Growth costs ₹11,999. Keep 100% of your fee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
