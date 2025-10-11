"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize Cal.com once
  useEffect(() => {
    (async () => {
      await getCalApi({ namespace: "30min" });
    })();
  }, []);

  return (
    <nav
      className={`fixed z-50 flex items-center justify-between py-4 transition-all duration-300 ${
        scrolled
          ? "top-4 left-4 right-4 px-6 rounded-full bg-[#0a0a1e]/90 backdrop-blur-md border border-white/10 mx-auto max-w-7xl"
          : "top-0 left-0 right-0 px-6 bg-[#0a0a1e]/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="flex items-center pl-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={30}
            className="h-8 w-auto -ml-1"
          />
        </Link>
      </div>

      {/* <div className="hidden md:flex items-center space-x-8">
        <Link href="/consumer" className="text-white/80 hover:text-white transition-colors">Consumer</Link>
        <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
        <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
        <Link href="/docs" className="text-white/80 hover:text-white transition-colors">Docs</Link>
      </div> */}

      <div className="flex items-center space-x-4">
        {/* <Link
          href="https://www.linkedin.com/in/bipulsikder16"
          target="_blank"
          className="text-white/80 hover:text-white transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </Link> */}

        {/* ✅ Cal.com "Try for Free" button using data attributes */}
        <button
          data-cal-namespace="30min"
          data-cal-link="nexire/30min"
          data-cal-config='{"layout":"month_view"}'
          className="flex items-center space-x-1 bg-transparent border border-white/20 rounded-full px-4 py-2 text-white hover:bg-white/10 transition-colors"
        >
          <span>Get Free Demo</span>
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
