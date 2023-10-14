import { headers } from 'next/headers';
import { i18n } from '../i18n-config';

export function getActiveLocale() {
  const headerUrl = headers().get('referer');
  if (!headerUrl) return i18n.defaultLocale;

  const url = new URL(headerUrl);

  return url.pathname.slice(1, 3);
}
