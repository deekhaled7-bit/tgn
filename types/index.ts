export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'subscriber' | 'admin';
  subscription?: Subscription;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'monthly' | 'yearly';
  status: 'active' | 'inactive' | 'cancelled';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  published: boolean;
  category: Category;
  tags: Tag[];
  author: Author;
  featuredImage?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  locale: 'en' | 'ar';
  isExclusive: boolean; // For The Good Project content
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  locale: 'en' | 'ar';
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  locale: 'en' | 'ar';
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface VideoPlaylist {
  id: string;
  title: string;
  description: string;
  videos: Video[];
  thumbnail?: string;
  isExclusive: boolean;
  createdAt: Date;
  locale: 'en' | 'ar';
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  duration: number;
  thumbnail?: string;
  createdAt: Date;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tag?: string;
  author?: string;
  dateFrom?: Date;
  dateTo?: Date;
  featured?: boolean;
}