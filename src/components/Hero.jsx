import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/laptop-animation.json";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[80vh] py-10 md:py-20 flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-200"
    >
      { }
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.5 },
            },
          },
          particles: {
            color: { value: "#60a5fa" },
            links: {
              color: "#60a5fa",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50,
            },
            opacity: { value: 0.3 },
            shape: { type: "rectangle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left - Animated Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[60%] w-full max-w-[600px] bg-white/30 backdrop-blur-xl border border-white/40 p-8 md:p-12 rounded-2xl shadow-2xl text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight"
          >
            Laptop & Computer Repair Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-gray-800 mb-6"
          >
            Fast, reliable, and affordable repair services for all your devices.
            Book a service through our form.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSceA3tbOrBfQlfgWg-aaoKpUwaIFnstXy9O23QutUiqdcgJYA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            Book Now
          </motion.a>
        </motion.div>

        {/* Right - Lottie Animation with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[40%] w-full flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-blue-300 blur-3xl opacity-30 animate-pulse"></div>
            <Player
              autoplay
              loop
              src={animationData}
              className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
