"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const isMainPage = pathname === "/";

  return (
    <nav
      className={`z-50 flex items-center justify-between py-3 transition-all duration-300 ${
        scrolled
          ? "px-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] mx-auto max-w-7xl mt-4 text-gray-900"
          : isMainPage 
            ? "px-6 bg-transparent text-white py-4"
            : "px-6 bg-transparent text-gray-900 py-4"
      }`}
    >
      <div className="flex items-center pl-4">
        <Link href="/" className="flex items-center">
          <Image
            src={isMainPage ? "/logo_white.png" : "/logo_black.png"}
            alt="Nexire"
            width={100}
            height={25}
            className="h-6 w-auto -ml-1"
            priority
            sizes="120px"
            unoptimized
          />
        </Link>
      </div>

      {/* <div className="hidden md:flex items-center space-x-8">
        <Link href="/pricing" className={`${isMainPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm`}>Pricing</Link>
      </div> */}

      <div className="flex items-center space-x-4">
        <Link
          href="https://beta.nexire.in/"
          className={`${isMainPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm`}
        >
          Login
        </Link>

        {/* ✅ Cal.com "Book a Demo" button using data attributes */}
        <button
          data-cal-namespace="30min"
          data-cal-link="nexire/30min"
          data-cal-config='{"layout":"month_view"}'
          className="flex items-center space-x-1 bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 border border-blue-400 rounded-full px-4 py-2 text-white hover:opacity-90 transition-all text-sm font-medium"
        >
          <span>Book a Demo</span>
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
