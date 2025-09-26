"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  Lock,
  Star
} from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    author: string;
    publishedAt: string;
    featuredImage?: string;
    isExclusive: boolean;
    readTime: string;
  };
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <Card 
      className="group card-hover border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-2xl animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {article.featuredImage ? (
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-hot-pink/20 to-bright-yellow/20 flex items-center justify-center">
            <span className="text-4xl">📰</span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex gap-2">
          <Badge 
            variant="secondary" 
            className="bg-background/90 backdrop-blur-sm text-xs font-medium"
          >
            {article.category}
          </Badge>
          {article.isExclusive && (
            <Badge className="bg-gradient-to-r from-hot-pink to-bright-yellow text-black text-xs font-medium">
              <Lock className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
              Exclusive
            </Badge>
          )}
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Article Info */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Calendar className="w-3 h-3" />
            <span>{new Date(article.publishedAt).toLocaleDateString(locale)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-hot-pink transition-colors leading-tight">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>

        {/* Action Button */}
        <Button
          variant="ghost"
          asChild
          className="w-full justify-between group/btn hover:bg-gradient-to-r hover:from-hot-pink/10 hover:to-bright-yellow/10 transition-all duration-300"
        >
          <Link
            href={`/${locale}/articles/${article.slug}`}
            className="flex items-center justify-between w-full"
          >
            <span className="font-medium">Read More</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
          </Link>
        </Button>

        {/* Premium Indicator */}
        {article.isExclusive && (
          <div className="mt-4 p-3 bg-gradient-to-r from-hot-pink/10 to-bright-yellow/10 rounded-lg border border-hot-pink/20">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
              <Star className="w-4 h-4 text-bright-yellow" />
              <span className="text-foreground font-medium">
                Premium Content - Subscribe to access
              </span>
            </div>
          </div>
        )}

        {/* Hover Effect Line */}
        <div className="mt-6 h-1 w-0 bg-gradient-to-r from-hot-pink to-bright-yellow rounded-full transition-all duration-500 group-hover:w-full" />
      </CardContent>
    </Card>
  );
}