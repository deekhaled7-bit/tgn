"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const headingFont = isArabic ? "font-header-ar" : "font-header-en";
  const bodyFont = isArabic ? "font-body-ar" : "font-body-en";

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-cream">
      <section className="text-center p-6 md:p-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image
            src="/assets/notFound.png"
            alt="Sun"
            width={280}
            height={280}
            className="animate-spin-slow"
            priority
          />
          <span className={`${headingFont} text-hot-pink text-6xl md:text-7xl`}>
            404
          </span>
        </div>

        <h1 className={`${headingFont} text-carbon text-3xl md:text-4xl mb-3`}>
          {t("title")}
        </h1>
        <p
          className={`${bodyFont} text-carbon/80 text-lg md:text-xl mb-8 max-w-xl mx-auto`}
        >
          {t("subtitle")}
        </p>

        <Link
          href={`/${locale}`}
          className="inline-block bg-hot-pink text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          {t("goHome")}
        </Link>
      </section>
    </main>
  );
}