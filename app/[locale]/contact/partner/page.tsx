"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function PartnerPage() {
  const t = useTranslations("partner");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

  const handleClearForm = () => {
    // Reset the form
    const form = document.getElementById("partnerForm") as HTMLFormElement;
    if (form) form.reset();
  };

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
              isRTL ? "font-arabic-subheading" : "font-english-subheading"
            } text-carbon`}
          >
            {t("subtitle")}
          </div>
        </motion.div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          >
            <p className="text-center">{t("form.successMessage")}</p>
          </motion.div>
        ) : formError ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
          >
            <p className="text-center">{t("form.errorMessage")}</p>
          </motion.div>
        ) : null}

        <motion.form
          id="partnerForm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Business Name */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.businessName")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Industry */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.industry")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* How do you think we can collaborate? */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.howCollaborate")}
              <span className="text-hot-pink">*</span>
            </label>
            <textarea
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink h-32 ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            ></textarea>
          </div>

          {/* Campaign Details */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.campaignDetails")}
            </label>
            <p className={`text-sm text-gray-500 mb-2 ${isRTL ? "text-right" : "text-left"}`}>{t("form.campaignDetailsHint")}</p>
            <textarea
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink h-32 ${isRTL ? "text-right" : "text-left"}`}
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            ></textarea>
          </div>

          {/* Social Media Accounts */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.socialMedia")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Contact Person Name */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.contactName")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Contact Person Number */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.contactNumber")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="tel"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Contact Person Email */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.contactEmail")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="email"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink ${isRTL ? "text-right" : "text-left"}`}
              required
              placeholder={t("form.placeholder")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Contact Method */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("form.contactMethod")}
              <span className="text-hot-pink">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contactEmail"
                  className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-hot-pink focus:ring-hot-pink"
                />
                <label htmlFor="contactEmail">{t("form.email")}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contactPhone"
                  className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-hot-pink focus:ring-hot-pink"
                />
                <label htmlFor="contactPhone">{t("form.phone")}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contactWhatsapp"
                  className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-hot-pink focus:ring-hot-pink"
                />
                <label htmlFor="contactWhatsapp">{t("form.whatsapp")}</label>
              </div>
            </div>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-hot-pink hover:bg-hot-pink/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("form.submit")}
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-md text-lg shadow-lg transition-all duration-300"
            >
              {t("form.clear")}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}