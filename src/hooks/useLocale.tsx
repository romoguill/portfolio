import { usePathname } from 'next/navigation';
import { Locale } from '../i18n-config';

function useLocale(): Locale {
  const pathname = usePathname();

  if (pathname.startsWith('/es')) {
    return 'es';
  } else {
    return 'en';
  }
}
export default useLocale;
