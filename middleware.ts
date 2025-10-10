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
    const response = intlMiddleware(req);
    
    // Extract locale from pathname and add as header
    const pathname = req.nextUrl.pathname;
    const locale = pathname.split("/")[1] || "en";
    
    if (response) {
      response.headers.set("x-locale", locale);
      response.headers.set("x-pathname", pathname);
    }
    
    return response;
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
