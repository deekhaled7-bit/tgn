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
      className={`flex items-center bg-hot-pink justify-center w-full md:py-16 py-10 p-8 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-[860px] 2xl:max-w-6xl mx-auto text-center"
      >
        <motion.blockquote
          ref={ref}
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          style={{ lineHeight: "1.5em" }}
          className={` font-bold text-cream tracking-wide ${
            isRTL
              ? "font-arabic-header text-3xl md:text-4xl lg:text-5xl"
              : "font-english-heading text-2xl md:text-3xl lg:text-4xl"
          }`}
        >
          {t("inspirational")}
        </motion.blockquote>
      </div>
    </div>
  );
};

export default Quote;
