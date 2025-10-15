"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function StoryPage() {
  const t = useTranslations("about.story");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`px-6 md:px-10 lg:px-16 pb-12 md:pb-16 pt-20 md:pt-28 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold ${
              isRTL ? "font-arabic-header" : "font-english-heading"
            } text-carbon mb-6 text-center`}
          >
            {t("title")}
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <Image
                src="/pictures/TGN_Profilepicture2.png"
                alt="The Good News Profile"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </motion.div>

            <div className="w-full md:w-2/3 space-y-8 text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${isRTL ? "font-arabic" : "font-english"}`}
              >
                {t("content1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${isRTL ? "font-arabic" : "font-english"}`}
              >
                {t("content2")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`${isRTL ? "font-arabic" : "font-english"} italic`}
              >
                {t("content3")}
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isRTL ? "font-arabic-header" : "font-english-heading"
            } text-carbon mb-4 text-center`}
          >
            {t("missionTitle")}
          </h2>

          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className={`w-full md:w-1/2 `}>
              <p
                className={`text-lg ${
                  isRTL ? "font-arabic" : "font-english"
                } text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
              >
                {t("missionContent")}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`w-full md:w-1/2 flex justify-center ${
                isRTL ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src="/wiig/mission4.gif"
                alt="Our Mission"
                width={300}
                height={200}
                className=""
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
