// import React from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "@tsparticles/slim"; // Corrected import
// import type { Engine } from "@tsparticles/engine"; // Ensures correct typing
// import type { ISourceOptions } from "@tsparticles/engine"; // Corrected typing

// export const particlesInit = async (engine: Engine): Promise<void> => {
//   await loadSlim(engine);
// };

// export const particleOptions: ISourceOptions = {
//   background: {
//     color: {
//       value: "#000000",
//     },
//   },
//   fpsLimit: 120,
//   particles: {
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         value_area: 800, // Fixed incorrect property "area" to "value_area"
//       },
//     },
//     color: {
//       value: ["#ffffff", "#00ccff", "#ff66cc"],
//     },
//     shape: {
//       type: "circle",
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//       }, // Removed "minimumValue" as it's not valid
//     },
//     size: {
//       value: 4,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 10,
//       }, // Removed "minimumValue" as it's not valid
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none", // Fixed type issue
//       random: false,
//       straight: false,
//       outModes: {
//         default: "out",
//       },
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: { enable: true }, // Fixed "resize: true" issue by making it an object
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   detectRetina: true,
// };

// export const ParticleMotion: React.FC = () => {
//   return (
//     <Particles
//       id="tsparticles"
//       options={particleOptions} // Corrected options type
//       init={particlesInit} // Fixed parameter type mismatch
//       className="absolute inset-0"
//     />
//   );
// };
