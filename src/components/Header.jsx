import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";




export default function Header(props) {
    const { toggleMenu, isMobileMenuOpen } = props;
  
    return (
        <header className="header-container flex flex-row justify-between font-josefin-slab mt-4 absolute w-full">
          <div className="ml-4 sm:ml-16 font-semibold text-base sm:text-xl psin">
            <a href="/">p.sin</a>
          </div>
          <ul className="hidden sm:flex font-semibold text-base sm:text-xl">
            <li className="mr-16">
              <a href="/projects">projects</a>
            </li>
            <li className="mr-16">
              <a href="/contacts">contacts</a>
            </li>
            <li className="mr-16">
              <a href="/about">about</a>
            </li>
            <li className="mr-16">
              <a href="/resume">resume</a>
            </li>
          </ul>
          <button className="sm:hidden mx-4" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <>
              <button
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              ></button>
              <motion.div
                className="fixed top-0 right-0 h-full w-2/3 bg-[var(--card-bg)] shadow-lg z-50"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <button
                  className="absolute top-2 right-4 text-4xl"
                  onClick={toggleMenu}
                >
                  &times;
                </button>
                <div className="flex flex-col justify-start mt-16 px-8">
                  <p className="text-xl font-semibold">p.sin</p>
                  <hr className="border-[var(--text-main)] w-full mb-2" />
                  <ul className="ml-2 font-semibold text-base space-y-8">
                    <li>
                      <a href="/projects">projects</a>
                    </li>
                    <li>
                      <a href="/contacts">contacts</a>
                    </li>
                    <li>
                      <a href="/about">about</a>
                    </li>
                    <li>
                      <a href="/resume">resume</a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </header>
      );
  }






/* import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-row justify-between font-josefin-slab mt-4 absolute w-full">
      <div className="ml-4 sm:ml-16 font-semibold text-base sm:text-xl skarokin">
        <a href="/">skarokin</a>
      </div>
      <ul className="hidden sm:flex font-semibold text-base sm:text-xl">
        <li className="mr-16">
          <a href="/projects">projects</a>
        </li>
        <li className="mr-16">
          <a href="/contacts">contacts</a>
        </li>
        <li className="mr-16">
          <a href="/about">about</a>
        </li>
        <li className="mr-16">
          <a href="/resume">resume</a>
        </li>
      </ul>
      <button className="sm:hidden mx-4" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isMobileMenuOpen && (
        <>
          <button
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          ></button>
          <motion.div
            className="fixed top-0 right-0 h-full w-2/3 bg-[var(--card-bg)] shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              className="absolute top-2 right-4 text-4xl"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <div className="flex flex-col justify-start mt-16 px-8">
              <p className="text-xl font-semibold">skarokin</p>
              <hr className="border-[var(--text-main)] w-full mb-2" />
              <ul className="ml-2 font-semibold text-base space-y-8">
                <li>
                  <a href="/projects">projects</a>
                </li>
                <li>
                  <a href="/contacts">contacts</a>
                </li>
                <li>
                  <a href="/about">about</a>
                </li>
                <li>
                  <a href="/resume">resume</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
} */