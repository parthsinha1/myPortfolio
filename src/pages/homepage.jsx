import React, { useEffect, useState } from "react";
import parth from "../assets/psin.jpg";

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, 0);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setFadeIn(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main
      className={`${
        fadeIn ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 text-[var(--text-main)] flex flex-col justify-center min-h-screen pt-0 w-3/4 sm:w-1/2 mx-auto font-josefin`}
      style={{ backgroundColor: 'var(--cream)' }}
    >
      {/* Wrap img inside img-container */}
      <div className="img-container justify-center flex">
        <img
          src={parth}
          alt="Parth Sinha"
          className="w-[150px] sm:w-[200px] h-auto rounded-full mb-8 shadow-2xl "
        />
      </div>

      <h1 className="font-semibold text-2xl sm:text-4xl -mb-0.5 flex justify-center">Parth Sinha</h1>
      <h3 className="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4 flex justify-center">
        Rutgers University New Brunswick, 2025
      </h3>

      <p className="text-md sm:text-xl mb-4 sm:mb-8 max-w-xl mx-auto text-center">
        I'm a CS student based in Somerset, NJ with hands-on experience in web
        development and a keen interest in mastering full-stack development
      </p>

      <ul className="pl-2 font-semibold text-md sm:text-xl max-w-xl mx-auto text-center">
        <li className="home-page-li hover:text-matcha-green">
          <a href="/projects">projects</a>
        </li>
        <li className="home-page-li hover:text-matcha-green">
          <a href="/contacts">contacts</a>
        </li>
        <li className="home-page-li hover:text-matcha-green">
          <a href="/about">about</a>
        </li>
        <li className="home-page-li hover:text-matcha-green">
          <a href="/resume">resume</a>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
