import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import mboto from "../../../public/assets/kl.jpg";
import fisa from "../../../public/assets/ks.png";
import task from "../../../public/assets/fj.jpg";
import safi from "../../../public/assets/kkk.jpg";
import car from "../../../public/assets/kf.jpg";
import buby from "../../../public/assets/kb.jpg";
import babi from "../../../public/assets/kd.jpg";

const slides = [
  {
    image: mboto,
    text: "Futuristic Design",
  },
  {
    image: fisa,
    text: "Live / Earn",
  },
  {
    image: safi,
    text: "Energy Efficient",
  },
  {
    image: car,
    text: "Luxury Lighting",
  },
  {
    image: buby,
    text: "Portable Structures",
  },
  {
    image: task,
    text: "Built with Design",
  },
  {
    image: babi,
    text: "Any Location",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };



  return (
    <div className="relative w-inherit h-[500px] overflow-hidden rounded-2xl">
      
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt="carousel"
          initial={{ x: 300, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1.08 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full object-cover mandamano"
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* ANIMATED TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute bottom-20 left-10 z-20"
        >
          <div className="lurk text-white text-5xl font-bold ">
            {slides[index].text}
          </div>
        </motion.div>
      </AnimatePresence>


      {/* DOTS */}
      <div className="absolute  left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;