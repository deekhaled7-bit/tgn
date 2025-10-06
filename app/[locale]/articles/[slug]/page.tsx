"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { sampleArticles } from "@/lib/articles-data";

export default function ArticlePage() {
  const params = useParams();
  const t = useTranslations();
  const locale = useLocale();
  const articleSlug = params.slug as string;

  // Find the article by slug
  const article = sampleArticles.find((article) => article.slug === articleSlug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-cream/20 to-hot-pink/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t("common.back")}</span>
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title[locale as keyof typeof article.title]}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <User className="h-4 w-4" />
                <span>
                  {article.author[locale as keyof typeof article.author]}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString(locale)}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>
                  {article.readTime[locale as keyof typeof article.readTime]}
                </span>
              </div>
              <button className="flex items-center space-x-2 rtl:space-x-reverse hover:text-hot-pink transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.featuredImage || "/assets/TGN_ELEMENTS_PNG-15.png"}
              alt={article.title[locale as keyof typeof article.title]}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt[locale as keyof typeof article.excerpt]}
            </div>

            {/* Article Body - You can expand this with actual content */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm text-muted-foreground">Category:</span>
                <span className="px-3 py-1 bg-hot-pink/10 text-hot-pink rounded-full text-sm font-medium">
                  {article.category[locale as keyof typeof article.category]}
                </span>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <button className="text-sm text-muted-foreground hover:text-hot-pink transition-colors">
                  Like
                </button>
                <button className="text-sm text-muted-foreground hover:text-hot-pink transition-colors">
                  Comment
                </button>
                <button className="text-sm text-muted-foreground hover:text-hot-pink transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}