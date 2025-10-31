import React from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import FootballImage from "@/assets/football.jpeg";
import BookReading from "@/assets/book-reading.jpeg";
import GoaBeache from "@/assets/goa-beache.jpeg";
import GoaParaRoad from "@/assets/goa-para-road.jpeg";
import SelfieMirror from "@/assets/selfie-mirror - Copy.jpeg";
import GoaDonaPaula from "@/assets/shadab-photo - Copy.jpg";

const galleryData = [
  { img: FootballImage, title: "Football" },
  { img: BookReading, title: "Book Reading" },
  { img: GoaBeache, title: "Goa Beache" },
  { img: GoaParaRoad, title: "Goa Para Road" },
  { img: SelfieMirror, title: "Selfie Mirror" },
  { img: GoaDonaPaula, title: "Goa Dona Paula" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 py-20">
      <SplitText
        text={"<Gallery />"}
        className="text-4xl sm:text-5xl font-bold mb-12 text-cyan-400"
        delay={80}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {galleryData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotateY: 6,
              boxShadow: "0 0 25px rgba(34,211,238,0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative overflow-hidden rounded-2xl border border-cyan-500/40 
                       bg-neutral-800/40 shadow-lg backdrop-blur-md group"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 max-h-72 sm:max-h-80 md:max-h-96 
                         object-contain sm:object-cover rounded-2xl 
                         transition-transform duration-700 group-hover:scale-110"
            />

            {/* Title overlay on hover (desktop only) */}
            <div
              className="hidden sm:flex absolute inset-0 items-end justify-center
                         bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <p className="text-lg font-semibold text-cyan-300 mb-4">
                {item.title}
              </p>
            </div>

            {/* Always visible title (for mobile) */}
            <div className="sm:hidden p-3 text-center">
              <p className="text-base font-medium text-cyan-300 mt-2">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
