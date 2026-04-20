"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Github } from "@/components/ui/github";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // scrolling down
      setShowNav(false);
    } else {
      // scrolling up
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <motion.nav
            key="navbar"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 flex justify-center z-50"
          >
            <motion.div
              className="backdrop-blur-2xl bg-white/7 mt-2.5 px-4 py-2.5 rounded-full flex gap-3 sm:gap-6 shadow-lg sm:px-6 sm:py-3"
              style={{fontFamily: "var(--font-miracle)"}}
            >
              <a href="#hero" className="text-xs sm:text-sm">Home</a>
              <a href="#projects" className="text-xs sm:text-sm">Projects</a>
              <a href="#techstack" className="text-xs sm:text-sm">Stack</a>
              <a href="#footer" className="text-xs sm:text-sm">Contact</a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="fixed top-3 right-3 z-50 flex flex-row-reverse gap-3 sm:top-5 sm:right-5 sm:gap-5">
        <AnimatedThemeToggler />
        <div >
           <Github/>
        </div>
       
      </div>
    </>
  );
}

export default Navbar;
