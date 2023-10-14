'use client';

import argFlag from '../assets/argFlag.svg';
import usaFlag from '../assets/usaFlag.svg';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import { Locale } from '../i18n-config';
import { getActiveLocale } from '../utils/getActiveLocale';

type LanguageOption = {
  language: string;
  locale: Locale;
  icon: any;
};

const languages: LanguageOption[] = [
  {
    language: 'Español',
    locale: 'en',
    icon: usaFlag,
  },
  {
    language: 'English',
    locale: 'es',
    icon: argFlag,
  },
];

function LanguageSelect() {
  // const { pathname } = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-2'>
            {/* <Image src={selectedLanguage.icon} alt='language flag' width={25} />
            <p className='font-mono'>{selectedLanguage.locale}</p> */}
          </div>
          <FaChevronDown className='h-3' />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='bg-primary-200 rounded-md text-primary-950 font-medium mt-2 p-1'
          align='start'
        >
          {languages.map((language) => (
            <DropdownMenu.Item key={language.locale}>
              <Link
                href={`/${language.locale}`}
                className='flex items-center gap-2 pl-1 pr-3'
              >
                <Image src={language.icon} alt='language flag' width={25} />
                <p className='font-mono uppercase'>{language.locale}</p>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSelect;
