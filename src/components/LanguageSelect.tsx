'use client';

import { useState } from 'react';
import argFlag from '../assets/argFlag.svg';
import usaFlag from '../assets/usaFlag.svg';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaChevronDown } from 'react-icons/fa6';

type LanguageCode = 'EN' | 'ES';

type LanguageOption = {
  language: string;
  code: LanguageCode;
  icon: any;
};

const languages: LanguageOption[] = [
  {
    language: 'Español',
    code: 'ES',
    icon: argFlag,
  },
  {
    language: 'English',
    code: 'EN',
    icon: usaFlag,
  },
];

function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);

  const handleSelect = (code: LanguageCode) => {
    setSelectedLanguage(languages.find((language) => language.code === code)!);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-2'>
            <Image src={selectedLanguage.icon} alt='language flag' width={25} />
            <p className='font-mono'>{selectedLanguage.code}</p>
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
            <DropdownMenu.Item
              key={language.code}
              onSelect={() => handleSelect(language.code)}
            >
              <div className='flex items-center gap-2 pl-1 pr-3'>
                <Image src={language.icon} alt='language flag' width={25} />
                <p className='font-mono'>{language.code}</p>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSelect;
