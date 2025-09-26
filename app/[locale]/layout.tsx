import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isRTL = params.locale === 'ar';
  
  return {
    title: 'The Good News - Modern News & Blogging Platform',
    description: 'Discover stories that matter, insights that inspire',
    other: {
      'dir': isRTL ? 'rtl' : 'ltr',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  if (!locales.includes(params.locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = params.locale === 'ar';

  return (
    <html lang={params.locale} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}