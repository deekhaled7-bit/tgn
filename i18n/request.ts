import { getRequestConfig } from 'next-intl/server';
import { locales } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always one of our supported locales
  const resolvedLocale = locales.includes(locale as any) ? locale : 'en';
  
  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
    timeZone: 'UTC'
  };
});