import React from "react";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";

function Experiences() {
  const experienceData = [
    {
      company: "Smart Software Solutions, Nagpur",
      role: "React Native & React.js Developer",
      duration: "Sep 2021 – 2023",
    },
    {
      company: "Sanicon IT Services Pvt. Ltd., Pune",
      role: "React Native & React.js Developer",
      duration: "Aug 2023 – 2025",
    },
    {
      company: "All Indian IT Services LLP, Nagpur",
      role: "React Native & React.js Developer",
      duration: "Jun 2025 – Present",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center px-6 py-20">
      {/* Title Animation */}
      <SplitText
        text={"<My Experiences />"}
        className="text-4xl p-2 sm:text-5xl font-bold mb-16 text-cyan-400"
        delay={80}
      />

      {/* Timeline Container */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Line (glow animation) */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyan-400 via-cyan-200 to-transparent shadow-[0_0_25px_rgba(0,255,255,0.6)]"
        />

        {/* Timeline Items */}
        <div className="space-y-16 relative z-10">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col sm:flex-row ${
                i % 2 === 0 ? "sm:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Content Card */}
              <div className="bg-neutral-800/60 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition-all w-full sm:w-[45%] text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  {exp.company}
                </h3>
                <p className="text-gray-300 font-medium mt-1">{exp.role}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
              </div>

              {/* Connector Dot */}
              <div className="relative flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse" />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden sm:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
