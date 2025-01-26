import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const particlesInit = async (main: any) => {
  await loadFull(main);
};

export const particleOptions = {
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
      direction: undefined, // Random movement
      random: false,
      straight: false,
      outModes: "out", // Updated to a valid string literal
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

export const particleMotion = () => {
  return (
    <Particles
      id="tsparticles"
      //   options={particleOptions} // Updated options structure
      init={particlesInit} // Initialize particles
      className="absolute inset-0"
    />
  );
};
