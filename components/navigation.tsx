"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Menu,
  X,
  Globe,
  User,
  LogOut,
  Settings,
} from "lucide-react";

interface NavigationProps {
  isLoggedIn?: boolean;
  userRole?: "user" | "subscriber" | "admin";
}

export function Navigation({
  isLoggedIn = false,
  userRole = "user",
}: NavigationProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isRTL = locale === "ar";
  const otherLocale = locale === "en" ? "ar" : "en";

  // Simplified navigation for pixel-inspired design

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/articles`, label: t("articles") },
    ...(isLoggedIn && userRole === "subscriber"
      ? [{ href: `/${locale}/the-good-project`, label: t("theGoodProject") }]
      : []),
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full  transition-all duration-500 ease-in-out ${
        scrolled ? "backdrop-blur-md bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                scrolled
                  ? "w-16 h-16 md:h-20 md:w-24 lg:h-24 lg:w-28"
                  : "w-24 h-20 md:h-32 md:w-36 lg:h-40 lg:w-44"
              }`}
            >
              <Image
                alt="The Good News Logo"
                fill
                className="object-cover"
                src={"/logos/TGN_LOGOS_PNG-03.png"}
              ></Image>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-sm w-full mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder={t("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rtl:pl-4 rtl:pr-10 bg-muted/50 border-0 focus:bg-background transition-colors"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <Link href={`/${otherLocale}`}>
                <Globe className="h-4 w-4" />
                <span className="sr-only">Change language</span>
              </Link>
            </Button>

            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRTL ? "start" : "end"}>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${locale}/dashboard`}
                      className="flex items-center"
                    >
                      <Settings className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                      {t("dashboard")}
                    </Link>
                  </DropdownMenuItem>
                  {userRole === "user" && (
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/${locale}/subscribe`}
                        className="flex items-center"
                      >
                        <span className="mr-2 rtl:mr-0 rtl:ml-2">⭐</span>
                        {t("subscribe")}
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="flex items-center text-red-600">
                    <LogOut className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {t("logout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                <Button variant="ghost" asChild>
                  <Link href={`/${locale}/login`}>{t("login")}</Link>
                </Button>
                <Button
                  asChild
                  className="button-glow bg-gradient-to-r from-hot-pink to-bright-yellow hover:shadow-lg"
                >
                  <Link href={`/${locale}/signup`}>{t("signup")}</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-cream border-t py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder={t("search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rtl:pl-4 rtl:pr-10"
                />
              </div>

              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              {!isLoggedIn && (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" asChild className="justify-start">
                    <Link href={`/${locale}/login`}>{t("login")}</Link>
                  </Button>
                  <Button
                    asChild
                    className="button-glow bg-gradient-to-r from-hot-pink to-bright-yellow"
                  >
                    <Link href={`/${locale}/signup`}>{t("signup")}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
