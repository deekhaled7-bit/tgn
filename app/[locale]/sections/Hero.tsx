"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <div className="relative flex md:pt-[10vh] flex-col justify-center items-center overflow-hidden bg-cream h-[70vh] md:min-h-[100vh]">
      {/* Floating elements from assets - BIGGER SIZES */}
      {/* movee */}
      <div className="absolute top-32 right-[1%] md:right-[20%] animate-bounce-soft">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-32.png"
          alt="Floating element"
          width={160}
          height={160}
          className="transform -rotate-6"
        />
      </div>
      {/* GoodNewsGoodMood */}
      <div className="hidden md:block absolute bottom-10 right-[15%] animate-float">
        <Image
          src="/stickers/stickers1.png"
          alt="Floating element"
          width={350}
          height={400}
          className="transform -rotate-12"
        />
      </div>
      {/* spin */}
      <div className="absolute max-md:bottom-[65%] left-[5%] md:bottom-40 md:left-[25%] animate-spin">
        <Image
          src="/assets/TGN_Sun.png"
          alt="Floating element"
          width={120}
          height={120}
          className="transform rotate-6"
          style={{ animation: "float-slow 5s ease-in-out infinite" }}
        />
      </div>
      {/* latestNews */}
      <div className="absolute max-md:-bottom-2 md:top-24 z-20 md:left-[10%] animate-float">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-40.png"
          alt="Floating element"
          width={350}
          height={300}
          className="transform rotate-3"
          style={{ animation: "float-slow 5s ease-in-out infinite" }}
        />
      </div>

      {/* Additional floating elements */}
      {/* <div className="absolute top-[35%] right-[10%] animate-float">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-25.png"
          alt="Floating element"
          width={140}
          height={140}
          className="transform rotate-12"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute bottom-[30%] left-[10%] animate-float">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-35.png"
          alt="Floating element"
          width={150}
          height={150}
          className="transform -rotate-9"
          style={{ animation: "float-slow 6s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute top-[60%] left-[20%] animate-float">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-45.png"
          alt="Floating element"
          width={120}
          height={120}
          className="transform rotate-6"
          style={{ animation: "float 3.5s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute top-[15%] right-[35%] animate-float">
        <Image
          src="/assets/TGN_ELEMENTS_PNG-52.png"
          alt="Floating element"
          width={130}
          height={130}
          className="transform -rotate-3"
          style={{ animation: "float-slow 4.5s ease-in-out infinite" }}
        />
      </div> */}

      <div className="container mx-auto px-4 h-full flex flex-col items-center">
        {/* Centered content */}
        <div className="flex flex-col h-full items-center justify-center">
          {/* Main image centered */}
          <motion.div
            className="relative mb-12 z-10"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/mounirWalking.png"
              alt="Digital Experience"
              width={600}
              height={600}
              className="object-contain"
            />

            {/* Growth percentage */}
          </motion.div>

          {/* Text content below image */}
        </div>

        {/* Pixel text at bottom */}
      </div>
    </div>
  );
};

export default Hero;
