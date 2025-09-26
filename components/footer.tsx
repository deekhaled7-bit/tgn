"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart 
} from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { href: `/${locale}`, label: 'Home' },
    { href: `/${locale}/articles`, label: 'Articles' },
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/contact`, label: 'Contact' },
    { href: `/${locale}/privacy`, label: 'Privacy Policy' },
    { href: `/${locale}/terms`, label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-gradient-to-br from-cream/20 to-hot-pink/10 dark:from-cream-dark/20 dark:to-hot-pink-dark/10 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-hot-pink to-bright-yellow animate-pulse-slow" />
              <span className="text-xl font-bold text-foreground">
                The Good News
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover stories that matter, insights that inspire. Join our community 
              of readers sharing positive stories from around the world.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-hot-pink transition-colors transform hover:scale-110 duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 rtl:hover:-translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-hot-pink" />
                <span>hello@thegoodnews.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-hot-pink" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-hot-pink" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest articles and exclusive content.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-hot-pink/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-hot-pink to-bright-yellow text-black text-sm font-medium rounded-md hover:shadow-lg transition-all duration-300 button-glow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Good News. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by The Good News Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}