import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const particlesInit = async (main: Engine): Promise<void> => {
  await loadFull(main);
};

const particleOptions = {
  background: {
    color: {
      value: "#000000", // Background color
    },
  },
  fpsLimit: 120, // Limits FPS
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800, // Particle density
      },
    },
    color: {
      value: ["#ffffff", "#00ccff", "#ff66cc"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.3,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      animation: {
        enable: true,
        speed: 10,
        minimumValue: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none", // Random movement
      random: false,
      straight: false,
      outModes: {
        default: "out", // Corrected to use an object with 'default' property
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
};

export const ParticleMotion: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={particleOptions} // Updated options structure
      init={particlesInit} // Initialize particles
      className="absolute inset-0"
    />
  );
};

export default ParticleMotion;
