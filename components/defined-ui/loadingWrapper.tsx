"use client";

import React, { useState, useEffect } from "react";
import ParticleLoader from "./partcileEffect";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate animation duration
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <ParticleLoader onComplete={() => setIsLoading(false)} />
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrapper;
