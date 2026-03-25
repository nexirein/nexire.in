"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X.com (new Twitter logo)
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
  `;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submitEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.result === "success") {
        setIsSuccess(true);
        setEmail("");
      } else {
        throw new Error(data.message || "Failed to submit email");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error:", err);
      } else {
        setError("Something went wrong. Please try again later.");
        console.error("Unknown error:", err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-gray-950 px-4 py-12 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-indigo-500/20 uppercase"
        >
          ✦ NOW IN BETA
        </motion.span>

        <h1 className="max-w-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl leading-[1.1]">
          Describe who you need. <br className="hidden sm:block" /> Nexire finds them.
        </h1>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            <p className="max-w-4xl text-lg md:text-xl text-gray-200 font-medium leading-relaxed px-4">
              Describe the person you need in plain English. <br className="hidden md:block" />
              Nexire finds them from 300M+ fresh profiles, screens them, and delivers your shortlist in 48 hours — no stale job boards, no agency fees, no noise.
            </p>
            <p className="text-indigo-400 font-semibold tracking-wide text-sm md:text-base">
              Built for Indian startups. Priced for Indian budgets.
            </p>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-2xl mt-12 flex flex-col items-center gap-6 px-4">
          {isSuccess && (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center text-white w-full">
              <p className="text-lg font-medium">
                Thank you for joining our waitlist!
              </p>
              <p className="mt-1 text-sm text-gray-300">
                We&apos;ll notify you when we launch with exclusive early access.
              </p>
            </div>
          )}

          {!isSuccess && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full"
            >
              <div className="relative flex-grow w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="absolute text-sm text-red-400 mt-1 ml-6">
                    {error}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                style={{ border, boxShadow }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-4 bg-gray-950/20 backdrop-blur-md rounded-full text-white font-medium transition hover:bg-gray-950/50 disabled:opacity-70 whitespace-nowrap"
              >
                {isSubmitting ? "Submitting..." : "Try Beta Free"}
                {!isSubmitting && <FiArrowRight />}
              </motion.button>
            </form>
          )}

          {/* Connect with us */}
          <div className="mt-6 flex flex-col items-center gap-2 text-white text-sm font-medium">
            <span className="text-center">Connect with us</span>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/nexirein/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/nexirein/"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nexirein/"
                target="_blank"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
