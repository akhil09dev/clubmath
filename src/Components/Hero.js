import React from "react"
import Particles from "react-tsparticles";
import '../App.css'
import './styles/hero.css'

import { motion } from "framer-motion";
const Hero = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      
      return(<div>
           <div className="background">
        <Particles 
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 60,
        interactivity: {
            detect_on: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "attract", parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
            }
        },
        particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
          collisions: {
            enable: false,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 2
          }
        },
        polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
          },
        detectRetina: true,
      }
    
        }
        />

       </div>
       <div className="title-block"><h1 className="title"><span className="flick-1">C</span><span className="flick-2">LUB</span><span className="flick-1">M</span><span className="flick-2">ATHEMATICA</span></h1></div>
        <div className="base">
        <a>KNOW MORE</a>
        </div>
        </div>

      )
}
 
export default Hero;