import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArticlesGrid } from '@/components/articles-grid';
import { ArticleFilters } from '@/components/article-filters';

export const metadata: Metadata = {
  title: 'Articles - The Good News',
  description: 'Browse our latest articles covering technology, health, environment, community, and more positive stories from around the world.',
};

export default function ArticlesPage() {
  // In a real app, these would come from authentication context and API
  const isLoggedIn = false;
  const userRole = 'user' as const;

  return (
    <div className="min-h-screen bg-background">
      <Navigation isLoggedIn={isLoggedIn} userRole={userRole} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Latest Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover inspiring stories, insights, and positive news from our community of writers and contributors.
            </p>
          </div>

          {/* Filters and Search */}
          <ArticleFilters />

          {/* Articles Grid */}
          <ArticlesGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}