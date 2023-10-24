import { getActiveLocale } from '@/src/utils/getActiveLocale';
import LanguageSelect from '../LanguageSelect';
import Navbar from '../Navbar/Navbar';
import Logo from './Logo';
import { Locale } from '@/src/i18n-config';
import { getDictionary } from '@/src/app/[lang]/dictionaries';

type HeaderProps = {
  lang: Locale;
};

async function Header({ lang }: HeaderProps) {
  const data = await getDictionary(lang);

  return (
    <header className='flex justify-between items-center h-20'>
      <Logo />
      <Navbar navLinks={data.header.navLinks} />
      <LanguageSelect lang={lang} />
    </header>
  );
}

export default Header;
