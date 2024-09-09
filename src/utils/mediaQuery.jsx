"use client";
import React, { useEffect, useState } from "react";

export const mediaQuery = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    // Set the initial size when the component mounts
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If size is still null, the component hasn't hydrated yet
  if (size === null) {
    return {
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
      isXXl: false,
      customLg: false,
      customMd: false,
      isLgDown: false,
      isXlDown: false,
      isMdDown: false,
      isSmDown: false,
      isXsDown: false,
      isMdUp: false,
      isSmUp: false,
    };
  }

  return {
    isXs: size < 768,
    isSm: size < 992 && size >= 768,
    isMd: size < 1200 && size >= 992,
    isLg: size < 1500 && size >= 1200,
    isXl: size < 1800 && size >= 1500,
    isXXl: size >= 1800,
    customLg: size < 1540 && size >= 1346,
    customMd: size < 1347 && size >= 1184,

    isXlDown: size < 1800,
    isLgDown: size < 1500,
    isMdDown: size < 1200,
    isSmDown: size < 992,
    isXsDown: size < 768,

    isMdUp: size >= 1200,
    isSmUp: size >= 992,
  };
};
