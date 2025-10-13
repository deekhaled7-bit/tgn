"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export default function ShareNewsPage() {
  const t = useTranslations("shareNews");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [formData, setFormData] = useState({
    story: "",
    name: "",
    email: "",
    files: null as FileList | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        files: e.target.files,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <div
      className={`px-6 md:px-10  lg:px-16 pb-12 md:pb-16 pt-20 md:pt-28 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <section className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white  rounded-xl shadow-lg p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="story" className="text-base font-medium">
                {t("form.story")}
              </Label>
              <Textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleInputChange}
                rows={5}
                className="w-full resize-y border border-gray-400"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="file-upload" className="text-base font-medium">
                {t("form.attachment")}
              </Label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  multiple
                  accept="image/*,video/*"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <Upload className="h-10 w-10 text-hot-pink mb-3" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {t("form.uploadInstructions")}
                  </span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base font-medium">
                  {t("form.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-400"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-medium">
                  {t("form.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="bg-hot-pink hover:bg-hot-pink/90 text-white font-medium py-2 px-6 rounded-md transition-colors w-full md:w-auto"
              >
                {t("form.submit")}
              </Button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
