export const SUBSCRIPTION_PLANS = {
  monthly: {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 9.99,
    interval: 'month',
    features: [
      'Access to exclusive articles',
      'Premium video content',
      'Community access',
      'Priority support'
    ]
  },
  yearly: {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 99.99,
    interval: 'year',
    features: [
      'Access to exclusive articles',
      'Premium video content',
      'Community access',
      'Priority support',
      'Save 20% compared to monthly'
    ]
  }
} as const;

export const ARTICLE_CATEGORIES = {
  en: [
    { id: '1', name: 'Technology', slug: 'technology', color: '#3B82F6' },
    { id: '2', name: 'Health & Wellness', slug: 'health-wellness', color: '#10B981' },
    { id: '3', name: 'Environment', slug: 'environment', color: '#059669' },
    { id: '4', name: 'Education', slug: 'education', color: '#7C3AED' },
    { id: '5', name: 'Community', slug: 'community', color: '#F59E0B' },
    { id: '6', name: 'Innovation', slug: 'innovation', color: '#EF4444' },
  ],
  ar: [
    { id: '1', name: 'التكنولوجيا', slug: 'technology', color: '#3B82F6' },
    { id: '2', name: 'الصحة والعافية', slug: 'health-wellness', color: '#10B981' },
    { id: '3', name: 'البيئة', slug: 'environment', color: '#059669' },
    { id: '4', name: 'التعليم', slug: 'education', color: '#7C3AED' },
    { id: '5', name: 'المجتمع', slug: 'community', color: '#F59E0B' },
    { id: '6', name: 'الابتكار', slug: 'innovation', color: '#EF4444' },
  ]
} as const;

export const SAMPLE_ARTICLES = {
  en: [
    {
      id: '1',
      title: 'The Future of Sustainable Technology',
      slug: 'future-sustainable-technology',
      excerpt: 'Exploring how green technology is reshaping our world for the better.',
      category: 'Technology',
      author: 'Dr. Sarah Johnson',
      publishedAt: '2024-01-15',
      featuredImage: 'https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg',
      isExclusive: false,
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Community Gardens: Growing Together',
      slug: 'community-gardens-growing-together',
      excerpt: 'How neighborhood gardens are bringing communities closer and promoting healthy living.',
      category: 'Community',
      author: 'Maria Rodriguez',
      publishedAt: '2024-01-12',
      featuredImage: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
      isExclusive: false,
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Mental Health in the Digital Age',
      slug: 'mental-health-digital-age',
      excerpt: 'Understanding and maintaining mental wellness in our connected world.',
      category: 'Health & Wellness',
      author: 'Dr. Michael Chen',
      publishedAt: '2024-01-10',
      featuredImage: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      isExclusive: true,
      readTime: '10 min read'
    }
  ],
  ar: [
    {
      id: '4',
      title: 'مستقبل التكنولوجيا المستدامة',
      slug: 'future-sustainable-technology-ar',
      excerpt: 'استكشاف كيف تعيد التكنولوجيا الخضراء تشكيل عالمنا نحو الأفضل.',
      category: 'التكنولوجيا',
      author: 'د. سارة جونسون',
      publishedAt: '2024-01-15',
      featuredImage: 'https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg',
      isExclusive: false,
      readTime: 'قراءة 5 دقائق'
    },
    {
      id: '5',
      title: 'حدائق المجتمع: النمو معاً',
      slug: 'community-gardens-ar',
      excerpt: 'كيف تقرب حدائق الأحياء المجتمعات وتعزز الحياة الصحية.',
      category: 'المجتمع',
      author: 'ماريا رودريغيز',
      publishedAt: '2024-01-12',
      featuredImage: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
      isExclusive: false,
      readTime: 'قراءة 7 دقائق'
    }
  ]
} as const;

export const SUPPORTED_LOCALES = ['en', 'ar'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];