'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa6';
import argFlag from '../assets/argFlag.svg';
import usaFlag from '../assets/usaFlag.svg';
import { Locale } from '../i18n-config';

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

type LanguageSelectProps = {
  lang: Locale;
};

function LanguageSelect({ lang }: LanguageSelectProps) {
  const pathname = usePathname();
  const selectedLanguage = languages.find((option) => {
    return option.locale === lang;
  });

  const stripLocaleFromCurrentUrl = () => {
    console.log(pathname);
    if (pathname.startsWith('/en') || pathname.startsWith('/es')) {
      return pathname.slice(3);
    }
    return pathname;
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-2'>
            <Image
              src={selectedLanguage?.icon}
              alt='language flag'
              width={25}
              className='w-[22px] md:w-[25px]'
            />
            <p className='font-mono text-sm md:text-base uppercase'>
              {selectedLanguage?.locale}
            </p>
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
                href={`/${language.locale}/${stripLocaleFromCurrentUrl()}`}
                className='flex items-center gap-2 pl-1 pr-3'
              >
                <Image
                  src={language.icon}
                  alt='language flag'
                  width={25}
                  className='w-22 md:w-25'
                />
                <p className='font-mono text-sm md:text-base uppercase'>
                  {language.locale}
                </p>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSelect;
