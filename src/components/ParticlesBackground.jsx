import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: "#050816",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          links: {
            enable: true,
            color: "#52e3a5",
            opacity: 0.15,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}