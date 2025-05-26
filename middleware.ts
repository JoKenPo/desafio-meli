import { i18nConfig } from '@/config/i18next';
import { acceptedLanguages } from '@/services/i18n.config';
import { i18nRouter } from 'next-i18n-router';
import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl
  const pathnameHasLocale = acceptedLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return i18nRouter(request, i18nConfig)

  return NextResponse.redirect(request.nextUrl)
}
