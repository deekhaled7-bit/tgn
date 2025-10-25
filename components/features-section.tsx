"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Globe, Zap, Heart, BookOpen } from "lucide-react";
import { useLocale } from "next-intl";
export function FeaturesSection() {
  const locale = useLocale();
  const t = useTranslations("home.features");

  const features = [
    {
      icon: Shield,
      title: t("exclusive.title"),
      description: t("exclusive.description"),
      color: "from-hot-pink to-pink-600",
      badge: "Premium",
    },
    {
      icon: Users,
      title: t("community.title"),
      description: t("community.description"),
      color: "from-bright-yellow to-yellow-600",
      badge: "Community",
    },
    {
      icon: Globe,
      title: t("multilingual.title"),
      description: t("multilingual.description"),
      color: "from-cream to-orange-400",
      badge: "Global",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with modern web technologies",
      color: "from-blue-500 to-purple-600",
      badge: "Performance",
    },
    {
      icon: Heart,
      title: "Ad-Free Experience",
      description: "Clean, distraction-free reading for our subscribers",
      color: "from-red-500 to-pink-600",
      badge: "Premium",
    },
    {
      icon: BookOpen,
      title: "Rich Content",
      description: "In-depth articles, videos, and interactive content",
      color: "from-green-500 to-emerald-600",
      badge: "Content",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`${
              locale === "ar" ? "font-arabic-heading" : "font-english-heading"
            } text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6`}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover what makes THE GOOD NEWS the perfect platform for modern
            readers who want quality content and meaningful connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group card-hover border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-muted/50"
                    >
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-hot-pink transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-hot-pink to-bright-yellow rounded-full transition-all duration-500 group-hover:w-full" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-hot-pink/10 to-bright-yellow/10 border border-hot-pink/20">
            <Heart className="w-5 h-5 text-hot-pink mr-2 rtl:mr-0 rtl:ml-2" />
            <span className="text-foreground font-medium">
              Join 50,000+ readers who love THE GOOD NEWS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
