"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X.com (new Twitter logo)
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
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again later.");
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-2 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Launching Soon!
        </span>

        <h1 className="max-w-5xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl">
          Stop Losing Great Candidates to Outdated Interviews
        </h1>

        <p className="my-6 max-w-xl text-center text-base md:text-lg text-gray-300">
          AI-powered interviews that evaluate, engage, and hire the right talent
          75% faster than traditional screening.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-2xl mt-4 flex flex-col items-center gap-6">
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
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
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
                <FaXTwitter className="w-5 h-5" /> {/* ✅ New X logo */}
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
