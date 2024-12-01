import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";removeEventListener
const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // Run once to load the engine with the slim package
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim();
      setInit(true);
    };

    initParticles();
  }, []);

  // Particle options configuration
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1E2F97", // Background color
        },
      },
      fpsLimit: 120, // Limit FPS for performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // On click repulse effect
          },
          onHover: {
            enable: true,
            mode: "grab", // On hover grab effect
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Particles color
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true, // Enable links between particles
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Particles bounce off edges
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle", // Particle shape
        },
        size: {
          value: { min: 1, max: 3 }, // Particle size
        },
      },
      detectRetina: true, // Enable retina detection for clearer particles
    }),
    []
  );

  return init ? <Particles id={props.id} options={options} /> : null; // Render only after particles are initialized
};

export default ParticlesComponent;
