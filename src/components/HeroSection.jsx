"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/bg1.webp",
  "/images/bg2.webp",
  "/images/bg3.webp",
  "/images/bg4.webp",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Determine zoom direction based on image index (even indices zoom in, odd indices zoom out)
  const shouldZoomIn = currentIndex % 2 === 0;

  return (
    <div className=" h-[85vh] w-full overflow-hidden relative">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{
            opacity: 0,
            scale: index % 2 === 0 ? 1 : 1.2, // Start scale based on even/odd index
          }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale:
              index === currentIndex
                ? index % 2 === 0
                  ? 1.2
                  : 1 // End scale based on even/odd index
                : index % 2 === 0
                ? 1
                : 1.2, // Maintain initial state when not active
          }}
          transition={{ duration: 5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-head">
          Raising Voices, Restoring Rights
        </h1>
        <p className="text-lg md:text-xl max-w-4xl font-body">
          At Federico & Co, we are devoted to advocating for the most vulnerable
          — children and women. Through education, legal reform, community
          engagement, and tireless activism, we champion justice and lasting
          change in the fight against trafficking and abuse.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/get-involved"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-3xl text-white font-semibold transition-all hover:-translate-y-1 font-head"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 font-head border border-white hover:bg-white hover:text-black rounded-3xl text-white font-semibold transition-all hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
