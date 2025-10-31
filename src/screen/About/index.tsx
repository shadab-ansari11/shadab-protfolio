
import { motion } from "framer-motion";
import MyPhoto from "@/assets/shadab-photo - Copy.jpg";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import ElectricBorder from "@/components/ElectricBorder";


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-100 flex flex-col items-center justify-center px-6 py-24">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <motion.img
          src={MyPhoto}
          alt="Shadab Ansari"
          className="w-44 h-auto rounded-full border-4 border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.4)] object-cover mb-8 hover:scale-110 transition-transform duration-700"
          whileHover={{ rotate: 3 }}
        />

        <SplitText
          text={"<About Me />"}
          className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400"
          delay={80}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-3xl p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-xl"
      >
        {/* Glassmorphism Inner Card */}
        <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <BlurText
            text="I'm Shadab Ansari, a passionate Frontend Developer with over 3 years of experience in React.js and React Native. 
I specialize in crafting fast, responsive, and visually engaging applications that deliver exceptional user experiences. 
With a strong focus on clean code, performance, and modern design principles, I aim to transform ideas into smooth, scalable, and impactful digital solutions."
            className="text-gray-300 leading-relaxed text-lg sm:text-xl font-light tracking-wide"
            delay={60}
            animateBy="words"
            direction="top"
          />
        </div>

        {/* Animated Glow Border Effect */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-xl -z-10"
        />
      </motion.div>

      {/* Info Cards Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Name", value: "Shadab Ansari" },
          { title: "Role", value: "React.js & React Native Developer" },
          { title: "Experience", value: "3+ Years" },
          { title: "Location", value: "Nagpur, India" },
          { title: "Email", value: "shadab.ansari.web11@gmail.com" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <ElectricBorder
              color="#00FFFF"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{
                borderRadius: 20,
                padding: "1.5rem",
                background: "rgba(15,15,15,0.6)",
                boxShadow:
                  "0 0 25px rgba(0,255,255,0.2), inset 0 0 15px rgba(0,255,255,0.1)",
              }}
            >
              <h3 className="text-cyan-400 text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.value}</p>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
