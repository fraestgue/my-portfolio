import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeContext } from '../context/theme.context'

const ParticlesComponent = (props) => {
  const { darkTheme } = useContext(ThemeContext);

  // const [init, setInit] = useState(false);

  
  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    };
  
    initializeParticles();
  }, []);
  
 
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = 
      {
      background: {
        color: {
          value: darkTheme ? "#000000" : "#F4ECEC",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
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
          value: darkTheme ? "#FFFFFF" : "#000000",
        },
        links: {
          color: darkTheme ? "#FFFFFF" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
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
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }
 

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
