import React from "react";
import Hyperspeed from "@/components/Hyperspeed";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import {
  FaReact,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Home() {
  return (
    <div
      id="home"
      className="relative w-screen h-auto overflow-hidden bg-neutral-900 text-neutral-100 sm:justify-center h-full text-center px-4 sm:px-8 pt-16 sm:pt-0 "
    >
      {/* Hyperspeed Background */}
      <div className="absolute inset-0">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 300,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-16 pb-10 mt-[0px] sm:mt-[60px] md:mt-[40px] lg:mt-[60px]">
        {/* Heading */}
        <SplitText
          text="Hi there, I am Shadab Ansari"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        {/* Role Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8 text-lg sm:text-2xl text-gray-300">
          <FaLaptopCode className="text-cyan-400 text-2xl sm:text-3xl animate-pulse flex-shrink-0" />
          <BlurText
            text="Front-end Developer | React.js & React Native Developer"
            delay={160}
            animateBy="words"
            direction="top"
            className="text-center sm:text-left font-medium leading-snug max-w-[90vw] sm:max-w-3xl sm: flex justify-center items-center"
          />
          <FaReact className="text-sky-400 text-2xl sm:text-3xl animate-spin-slow flex-shrink-0" />
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex flex-col items-center">
          <SplitText
            text="Follow me here"
            className="text-[18px] sm:text-[20px] font-semibold text-center mb-3 font-[Poppins]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl text-gray-300">
            {/* GitHub */}
            <a
              href="https://github.com/shadab-ansari11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shadab-ansari-361a23216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shadab____11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919325775992?text=Hello%20I%20am%20React%20JS%20and%20React%20Native%20Developer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="relative mt-10">
            <button
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
      text-white font-semibold 
      overflow-hidden shadow-lg 
      transition-all duration-500 
      hover:scale-105 hover:shadow-cyan-400/50
    "
            >
              <SplitText
                text="Download My CV"
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide group-hover:text-white"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />

              {/* subtle glowing border animation */}
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-400 animate-pulse" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
