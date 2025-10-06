"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { sampleArticles } from "@/lib/articles-data";

export default function ArticlesPage() {
  const t = useTranslations("articles");
  const locale = useLocale();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const isRTL = locale === "ar";

  // In a real app, these would come from authentication context and API
  const isLoggedIn = false;
  const userRole = "user" as const;

  return (
    <div className="min-h-screen bg-cream">
      <Navigation isLoggedIn={isLoggedIn} userRole={userRole} />

      <main className="pt-20">
        {/* Page Header */}
        <section className="pt-16 pb-8 bg-mint-green">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 ${
                  isRTL ? "font-header-ar" : "font-header-en"
                }`}
              >
                {t("title")}
              </h1>
              <p
                className={`text-gray-600 text-xl max-w-3xl mx-auto ${
                  isRTL ? "font-arabic-subheading" : "font-english-subheading"
                }`}
              >
                Explore our collection of inspiring stories, exclusive
                interviews, and thought-provoking articles that celebrate the
                beauty of life
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sampleArticles.map((article, index) => (
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
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-8 bg-mint-green">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p
                className={`text-gray-600 text-lg mb-4 ${
                  isRTL ? "font-body-ar" : "font-body-en"
                }`}
              >
                More inspiring stories coming soon...
              </p>
              <div className="w-16 h-1 bg-black mx-auto"></div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
