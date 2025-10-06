"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ArticleCard } from "@/components/article-card";
import { sampleArticles } from "@/lib/articles-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ArticlesSection = () => {
  const t = useTranslations("articles");
  const locale = useLocale();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const isRTL = locale === "ar";

  // Get first 3 articles for home page
  const featuredArticles = sampleArticles.slice(0, 3);

  return (
    <section className="py-16 bg-mint-green">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 ${
              isRTL ? "font-header-ar" : "font-header-en"
            }`}
          >
            {t("featured")}
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto ${
              isRTL ? "font-body-ar" : "font-body-en"
            }`}
          >
            Discover stories that inspire, inform, and transform your
            perspective on life
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12"
        >
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <ArticleCard article={article} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            className={`bg-hot-pink text-white hover:bg-hot-pink-dark transition-all duration-300 px-8 py-3 rounded-full text-lg font-medium ${
              isRTL ? "font-arabic-subheading" : "font-english-subheading"
            }`}
          >
            <Link href={`/${locale}/articles`}>{t("viewAll")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
