"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const NotFoundPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speed: number }[] =
      [];
    const numParticles = 80;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl"
      >
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-lg text-gray-300 mt-2">
          Oops! This page is lost in the void.
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500"
          >
            Go Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
