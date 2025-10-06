"use client";

import React from "react";
import { motion } from "framer-motion";

type TeamMemberCardProps = {
  name: string;
  roleLines: string[];
  imageSrc: string;
  alt?: string;
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  roleLines,
  imageSrc,
  alt = name,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-hot-pink shadow-lg"
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="mt-4">
        <div className="font-extrabold text-xl md:text-2xl tracking-wide text-carbon font-english-heading">
          {name}
        </div>
        <div className="mt-2 text-sm md:text-base text-carbon/80 font-english-subheading">
          {roleLines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};