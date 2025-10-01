"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-hot-pink/20 to-bright-yellow/30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-hot-pink/10 rounded-full animate-bounce-slow" />
        <div className="absolute top-20 right-20 w-48 h-48 bg-bright-yellow/10 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cream/20 rounded-full animate-bounce-soft" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-bright-yellow mr-2 rtl:mr-0 rtl:ml-2" />
            <span>Trusted by 50,000+ readers worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in text-shadow">
            <span className="bg-gradient-to-r from-hot-pink to-bright-yellow bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              asChild
              className="button-glow bg-gradient-to-r from-hot-pink to-bright-yellow hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-black font-semibold px-8 py-4 text-lg"
            >
              <Link
                href={`/${locale}/articles`}
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('cta')}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-background/50 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '50K+', label: 'Active Readers' },
              { number: '1K+', label: 'Articles Published' },
              { number: '25+', label: 'Countries Reached' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}