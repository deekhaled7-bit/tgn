import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";

import { ThemeProvider } from "@/components/theme-provider";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Good News - Modern News & Blogging Platform",
  description:
    "Discover stories that matter, insights that inspire. Join our community of readers sharing positive stories.",
  keywords: "news, blog, articles, community, subscription, exclusive content",
  authors: [{ name: "The Good News Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "The Good News",
    description: "Discover stories that matter, insights that inspire",
    type: "website",
    locale: "en_US",
  },
};

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
