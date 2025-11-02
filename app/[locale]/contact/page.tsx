"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contactform");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`px-6 md:px-10 lg:px-16 pb-12 md:pb-16 pt-20 md:pt-28 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold ${
              isRTL ? "font-arabic-header" : "font-english-heading"
            } text-carbon`}
          >
            {t("title")}
          </div>
          <div
            className={`text-2xl md:text-3xl font-bold mt-3 ${
              isRTL ? "font-arabic-subheading" : "font-english-body"
            } text-carbon`}
          >
            {t("subtitle")}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              placeholder={t("form.name")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder={t("form.email")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Subject */}
          <div className="form-group">
            <input
              type="text"
              placeholder={t("form.subject")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              placeholder={t("form.message")}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink h-48"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-hot-pink hover:bg-hot-pink/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("form.sendMessage")}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
