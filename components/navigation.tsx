"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  ChevronDown,
} from "lucide-react";

interface NavigationProps {
  isLoggedIn?: boolean;
  userRole?: "user" | "subscriber" | "admin";
}

interface NavSubItem {
  href: string;
  label: string;
}

interface NavLinkItem {
  href: string;
  label: string;
  type: "link";
}

interface NavDropdownItem {
  label: string;
  type: "dropdown";
  items: NavSubItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;

export function Navigation({
  isLoggedIn = false,
  userRole = "user",
}: NavigationProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
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

  // Comprehensive navigation structure with dropdowns
  const navItems: NavItem[] = [
    {
      href: `/${locale}`,
      label: t("home"),
      type: "link",
    },
    {
      label: t("news"),
      type: "dropdown",
      items: [
        { href: `/${locale}/news/egypt`, label: t("newsSubItems.egyptNews") },
        { href: `/${locale}/news/uae`, label: t("newsSubItems.uaeNews") },
        { href: `/${locale}/news/saudi`, label: t("newsSubItems.saudiNews") },
        { href: `/${locale}/news/society`, label: t("newsSubItems.society") },
        { href: `/${locale}/news/business`, label: t("newsSubItems.business") },
        {
          href: `/${locale}/news/education`,
          label: t("newsSubItems.education"),
        },
        { href: `/${locale}/news/sports`, label: t("newsSubItems.sports") },
        {
          href: `/${locale}/news/entertainment`,
          label: t("newsSubItems.entertainment"),
        },
        {
          href: `/${locale}/news/lifestyle`,
          label: t("newsSubItems.lifestyle"),
        },
        {
          href: `/${locale}/news/sustainability`,
          label: t("newsSubItems.sustainability"),
        },
        { href: `/${locale}/news/events`, label: t("newsSubItems.events") },
      ],
    },
    {
      label: t("projects"),
      type: "dropdown",
      items: [
        {
          href: `/${locale}/projects/big-sister-talks`,
          label: t("projectsSubItems.bigSisterTalks"),
        },
        ...(isLoggedIn && userRole === "subscriber"
          ? [
              {
                href: `/${locale}/the-good-project`,
                label: t("projectsSubItems.theGoodProject"),
              },
            ]
          : []),
        {
          href: `/${locale}/projects/interviews`,
          label: t("projectsSubItems.interviews"),
        },
      ],
    },
    {
      label: t("opportunities"),
      type: "dropdown",
      items: [
        {
          href: `/${locale}/opportunities/intern`,
          label: t("opportunitiesSubItems.theGoodIntern"),
        },
        {
          href: `/${locale}/opportunities/workshops`,
          label: t("opportunitiesSubItems.workshops"),
        },
        {
          href: `/${locale}/opportunities/programs`,
          label: t("opportunitiesSubItems.programs"),
        },
        {
          href: `/${locale}/opportunities/scholarships`,
          label: t("opportunitiesSubItems.scholarships"),
        },
      ],
    },
    {
      label: t("about"),
      type: "dropdown",
      items: [
        { href: `/${locale}/about/story`, label: t("aboutSubItems.ourStory") },
        { href: `/${locale}/about/team`, label: t("aboutSubItems.team") },
        {
          href: `/${locale}/about/partners`,
          label: t("aboutSubItems.partners"),
        },
        {
          href: `/${locale}/about/media`,
          label: t("aboutSubItems.mediaPresence"),
        },
      ],
    },
    {
      label: t("contact"),
      type: "dropdown",
      items: [
        { href: `/${locale}/contact`, label: t("contact") },
        {
          href: `/${locale}/contact/partner`,
          label: t("contactSubItems.beOurPartner"),
        },
        {
          href: `/${locale}/contact/share-news`,
          label: t("contactSubItems.shareGoodNews"),
        },
      ],
    },
    {
      label: t("multimedia"),
      type: "dropdown",
      items: [
        {
          href: `/${locale}/multimedia/mariam-videos`,
          label: t("multimediaSubItems.mariamVideos"),
        },
      ],
    },
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
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group ${
                      locale === "ar" ? "font-header-ar" : "font-header-en"
                    } ${pathname === item.href ? "text-foreground" : ""}`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <>
                    <button
                      className={`text-sm font-medium transition-colors hover:text-foreground flex items-center gap-1 ${
                        locale === "ar" ? "font-header-ar" : "font-header-en"
                      } ${
                        item.type === "dropdown" &&
                        item.items.some((subItem) => pathname === subItem.href)
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                              locale === "ar"
                                ? "font-body-ar text-right"
                                : "font-body-en text-left"
                            } ${
                              pathname === subItem.href
                                ? "text-foreground bg-muted"
                                : "text-muted-foreground"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          {/* <div className="hidden lg:flex items-center max-w-sm w-full mx-6">
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
          </div> */}

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
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium py-2 block transition-colors ${
                        locale === "ar"
                          ? "font-header-ar text-right"
                          : "font-header-en text-left"
                      } ${
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className={`text-sm font-medium py-2 flex items-center justify-between w-full transition-colors ${
                          locale === "ar"
                            ? "font-header-ar text-right"
                            : "font-header-en text-left"
                        } ${
                          item.type === "dropdown" &&
                          item.items.some(
                            (subItem) => pathname === subItem.href
                          )
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => {
                          const element = document.getElementById(
                            `mobile-dropdown-${index}`
                          );
                          if (element) {
                            element.classList.toggle("hidden");
                          }
                        }}
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      <div
                        id={`mobile-dropdown-${index}`}
                        className="hidden pl-4 rtl:pl-0 rtl:pr-4 space-y-2 mt-2"
                      >
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={`text-sm py-1 block transition-colors ${
                              locale === "ar"
                                ? "font-body-ar text-right"
                                : "font-body-en text-left"
                            } ${
                              pathname === subItem.href
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
