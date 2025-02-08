"use client";

import React, { useEffect, useRef, useState } from "react";

const ParticleLoader: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numParticles = 150; // Increased particle count
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      targetX: number;
      targetY: number;
    }[] = [];

    // Define a center cluster formation
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const clusterRadius = Math.min(canvas.width, canvas.height) / 6;

    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      particles.push({
        x: Math.random() * canvas.width, // More randomness in initial position
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2, // Slightly smaller particle size
        speedX: (Math.random() - 0.5) * 1.5, // Further reduced speed
        speedY: (Math.random() - 0.5) * 1.5,
        targetX: centerX + Math.cos(angle) * clusterRadius,
        targetY: centerY + Math.sin(angle) * clusterRadius,
      });
    }

    let elapsedTime = 0;
    const duration = 7000; // Slower animation (7 seconds)
    let animationFrameId: number;

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      particles.forEach((p) => {
        // Even slower movement towards target
        p.x += (p.targetX - p.x) * 0.01; // Slower attraction
        p.y += (p.targetY - p.y) * 0.01;

        // Gradual slowdown effect
        p.speedX *= 0.92;
        p.speedY *= 0.92;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      elapsedTime += 16; // Approximate frame duration
      if (elapsedTime < duration) {
        animationFrameId = requestAnimationFrame(animateParticles);
      } else {
        setIsAnimating(false);
        onComplete();
      }
    };

    animateParticles();

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default ParticleLoader;
