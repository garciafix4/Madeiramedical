import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGS = ["es", "en"];
const DEFAULT_LANG = "es";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already on a language path or static assets
  const pathnameHasLang = SUPPORTED_LANGS.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  if (pathnameHasLang) return NextResponse.next();

  const lang = DEFAULT_LANG;

  // Redirect / to /es or /en
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|logo.png|.*\\..*).*)"],
};
