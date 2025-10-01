import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { locales } from "./i18n";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export default withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect The Good Project routes
        if (req.nextUrl.pathname.includes("/the-good-project")) {
          return token?.role === "subscriber" || token?.role === "admin";
        }

        // Protect dashboard routes
        if (req.nextUrl.pathname.includes("/dashboard")) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
