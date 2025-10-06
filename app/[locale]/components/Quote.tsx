"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";

const Quote = () => {
  const t = useTranslations("quote");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex items-center bg-hot-pink justify-center md:py-16 py-10 p-8 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          ref={ref}
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-relaxed ${
            isRTL ? "font-arabic-header" : "font-english-heading"
          }`}
        >
          {t("inspirational")}
        </motion.blockquote>
      </div>
    </div>
  );
};

export default Quote;
