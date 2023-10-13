import { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { i18n } from './i18n-config';

function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers);
  const headersObject = Object.fromEntries(headers.entries());

  const languages = new Negotiator({ headers: headersObject }).languages();

  return match(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const userLocale = getLocale(request);
  console.log(userLocale);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
