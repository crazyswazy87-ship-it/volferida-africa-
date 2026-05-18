import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Topbar from "../components/shared/Topbar";

import mboto from "../../public/assets/k.jpg";
import task from "../../public/assets/kkkk.jpg";
import safi from "../../public/assets/kc.jpg";
import car from "../../public/assets/ks.jpg";
import fisa from "../../public/assets/hh.jpg";
import buby from "../../public/assets/kt.jpg";
import HomePage from "../components/shared/HomePage";

const images = [mboto, safi, task, car,  fisa, buby];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("contact");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <>
      <Topbar />

      <div className="home-con">
        <div className="bastad overflow-hidden rounded-xl relative w-full h-[400px]">
          
          <AnimatePresence mode="wait">
            <div className="onyi">

              {/* TAB HEADER BOX */}
              <div className="flex bg-black rounded-xl p-1 gap-1 shadow-lg">

                <button
                  onClick={() => setActive("contact")}
                  className={`gin ${
                    active === "contact"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Contact
                </button>

                <button
                  onClick={() => setActive("book")}
                  className={`px-6 py-2 rounded-lg transition-all gin ${
                    active === "book"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Book Now
                </button>

                <button
                  onClick={() => setActive("about")}
                  className={`px-6 py-2 rounded-lg transition-all gin ${
                    active === "about"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  About
                </button>

              </div>

              {/* TAB CONTENT */}
              <div className="mt-6 text-white text-center cman">

                {active === "contact" && (
                  <div>
                    <h2 className="text-xl font-bold m">Contact Us</h2>
                    <p>Get in touch with our team anytime.</p>
                  </div>
                )}

                {active === "book" && (
                  <div>
                    <h2 className="text-xl font-bold">Book Now</h2>
                    <p>Reserve your space quickly and easily.</p>
                  </div>
                )}

                {active === "about" && (
                  <div>
                    <h2 className="text-xl font-bold">About Us</h2>
                    <p>We build modern futuristic structures.</p>
                  </div>
                )}

              </div>

            </div>

            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Volfreda"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="mboto"
            />
            
          </AnimatePresence>

        </div>
        
        <HomePage />
      </div>
    </>
  );
};

export default Home;