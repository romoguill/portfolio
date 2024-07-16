'use client';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import useDictionary from '@/src/hooks/useDictionary';
import useLocale from '@/src/hooks/useLocale';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

function MobileSidebar() {
  const locale = useLocale();
  const dictionary = useDictionary();

  return (
    <Dialog.Root>
      <Dialog.Trigger className='p-1 rounded-xl hover:bg-primary-900 transition'>
        <HiMenuAlt2 size={30} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-white/10 z-50' />
        <Dialog.Content className='fixed top-0 bottom-0 right-0 w-56 py-28 px-6 bg-primary-950 z-50'>
          <Dialog.DialogClose className='text-white fixed top-5 right-5 hover:bg-primary-900 transition rounded-sm'>
            <IoClose size={32} className='' />
          </Dialog.DialogClose>
          <div className='w-full'>
            <ul className='space-y-6'>
              {dictionary?.header.navLinks.map((link) => (
                <li key={link.href} className='w-full text-right text-xl'>
                  {/* <Dialog.DialogClose>? */}
                  <Link
                    href={link.href}
                    className='relative after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:right-0 after:bg-yellow-400 after:rounded-xl hover:after:w-full after:transition-all after:duration-300'
                  >
                    {link.text}
                  </Link>
                  {/* </Dialog.DialogClose> */}
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileSidebar;
