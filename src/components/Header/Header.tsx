import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/i18n-config';
import LanguageSelect from '../LanguageSelect';
import Navbar from '../Navbar/Navbar';
import MobileSidebar from '../Sidebar/MobileSidebar';
import Logo from './Logo';

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
      <MobileSidebar />
    </header>
  );
}

export default Header;
