"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function JoinTeamPage() {
  const t = useTranslations("team.joinForm");
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
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${
              isRTL ? "font-arabic-header" : "font-english-heading"
            } text-carbon`}
          >
            {t("title")}
          </div>
          <div
            className={`text-xl md:text-2xl font-bold mt-3 ${
              isRTL ? "font-arabic-subheading" : "font-english-subheading"
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
          {/* Full Name */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("fullName")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("email")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("phoneNumber")}
              <span className="text-hot-pink">*</span>
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
              required
            />
          </div>

          {/* Interested Fields */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("interestedFields")}
              <span className="text-hot-pink">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="scriptwriting"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="scriptwriting"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.scriptwriting")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="graphicDesign"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="graphicDesign"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.graphicDesign")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="contentCreation"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="contentCreation"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.contentCreation")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="videoEditing"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="videoEditing"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.videoEditing")}
                </label>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="socialMedia" className="mt-1 mr-2" />
                <label
                  htmlFor="socialMedia"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.socialMedia")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="businessDevelopment"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="businessDevelopment"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.businessDevelopment")}
                </label>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="finance" className="mt-1 mr-2" />
                <label
                  htmlFor="finance"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.finance")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="editorialWriting"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="editorialWriting"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.editorialWriting")}
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="communityManagement"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="communityManagement"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("fields.communityManagement")}
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t("fields.selectMax")}</p>
          </div>

          {/* Experience */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("experience")}
              <span className="text-hot-pink">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="exp0-1"
                  name="experience"
                  className="mr-2"
                />
                <label
                  htmlFor="exp0-1"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("experienceOptions.option1")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="exp2-3"
                  name="experience"
                  className="mr-2"
                />
                <label
                  htmlFor="exp2-3"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("experienceOptions.option2")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="exp4-5"
                  name="experience"
                  className="mr-2"
                />
                <label
                  htmlFor="exp4-5"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("experienceOptions.option3")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="exp6plus"
                  name="experience"
                  className="mr-2"
                />
                <label
                  htmlFor="exp6plus"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("experienceOptions.option4")}
                </label>
              </div>
            </div>
          </div>

          {/* Work Style */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("workStyle")}
              <span className="text-hot-pink">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="fullTime"
                  className="mr-2"
                />
                <label
                  htmlFor="fullTime"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("workStyleOptions.fullTime")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="partTime"
                  className="mr-2"
                />
                <label
                  htmlFor="partTime"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("workStyleOptions.partTime")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="freelance"
                  className="mr-2"
                />
                <label
                  htmlFor="freelance"
                  className={`${
                    isRTL ? "font-arabic-body" : "font-english-body"
                  }`}
                >
                  {t("workStyleOptions.freelance")}
                </label>
              </div>
            </div>
          </div>

          {/* Upload CV */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("uploadCV")}
              <span className="text-hot-pink">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-gray-400 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600">
                  {t("uploadInstructions")}
                </p>
                <input
                  type="file"
                  className="hidden"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="cv-upload"
                  className="mt-4 px-4 py-2 bg-hot-pink text-white rounded-md cursor-pointer hover:bg-hot-pink/90 transition-colors"
                >
                  Browse Files
                </label>
              </div>
            </div>
            <input
              type="text"
              placeholder={t("resumeAs")}
              className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink"
            />
          </div>

          {/* Notes */}
          <div className="form-group">
            <label
              className={`block text-carbon font-bold mb-2 ${
                isRTL ? "font-arabic-subheading" : "font-english-subheading"
              }`}
            >
              {t("notes")}
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink h-32"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-hot-pink hover:bg-hot-pink/90 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("submit")}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}