import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useMemo, useState } from "react";

import { loadSlim } from "@tsparticles/slim"; 
import { ThemeContext } from "../context/theme.context";


const ParticlesComponent = (props) => {
  const { darkTheme } = useContext(ThemeContext);
  // let backgroundPage;
  // let particlesColor;
  // if (darkTheme) {
  //   backgroundPage = "#000000"
  //   particlesColor = "#FFFFFF"
  // } else {
  //   backgroundPage = "#F4ECEC"
  //   particlesColor = "#000000"
  // }

  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
     
      await loadSlim(engine);
      
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value:  "#000000",
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
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
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
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
