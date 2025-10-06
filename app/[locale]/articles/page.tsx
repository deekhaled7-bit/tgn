"use client";

import React, { Suspense } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArticlesGrid } from "@/components/articles-grid";
import { sampleArticles } from "@/lib/articles-data";
import { ARTICLE_CATEGORIES } from "@/lib/constants";
import { useSearchParams } from "next/navigation";

export default function ArticlesPage() {
  const t = useTranslations("articles");
  const locale = useLocale();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const isRTL = locale === "ar";
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const categoryDisplay = React.useMemo(() => {
    // No category provided or explicit 'all' => use default title
    if (!categoryParam || categoryParam === "all") return null;

    // Prefer configured categories for accurate, localized names
    const categories = ARTICLE_CATEGORIES[locale as "en" | "ar"];
    const normalized = slugify(categoryParam);
    const match = categories.find((c) => c.slug === normalized);

    if (match) return match.name;

    // Fallback: humanize the provided slug
    return humanizeSlug(categoryParam);
  }, [categoryParam, locale]);

  // In a real app, these would come from authentication context and API
  const isLoggedIn = false;
  const userRole = "user" as const;

  return (
    <div className="bg-cream">
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
                {categoryDisplay ?? t("title")}
              </h1>
              <p
                className={`text-gray-600 text-xl max-w-3xl mx-auto ${
                  isRTL ? "font-arabic-subheading" : "font-english-subheading"
                }`}
              >
                {t("headerSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid (filtered by category via searchParams) */}
        <section className="">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="py-12 text-center">Loading articles...</div>}>
              <ArticlesByCategory isInView={isInView} />
            </Suspense>
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
                {t("moreComing")}
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

function slugify(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function humanizeSlug(slug: string) {
  return slug
    .toString()
    .trim()
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

function ArticlesByCategory({ isInView }: { isInView: boolean }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const filteredArticles =
    categoryParam === "all"
      ? sampleArticles
      : sampleArticles.filter((a) => {
          const en = typeof a.category === "string" ? a.category : a.category.en;
          const ar = typeof a.category === "string" ? a.category : a.category.ar;
          const enSlug = slugify(en);
          const arSlug = slugify(ar);
          return enSlug === categoryParam || arSlug === categoryParam;
        });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <ArticlesGrid key={categoryParam} articles={filteredArticles} />
    </motion.div>
  );
}
