'use client';

import { Dictionary } from '@/src/app/[lang]/dictionaries';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { SetStateAction, useState } from 'react';
import ProjectVideo from './ProjectDisplay';
import { inter, robotoMono, rubik } from '@/src/app/fonts';
import { IoCloseCircle } from 'react-icons/io5';
import ProjectDisplay from './ProjectDisplay';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: Dictionary['projects']['items'][number];
}

function ProjectModal({ isOpen, setIsOpen, data }: ProjectModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-black/60 z-40' />
        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]  w-full max-w-lg md:max-w-2xl bg-primary-950 z-50 p-3 text-neutral-100'>
          <button
            className='absolute top-3 right-3 text-neutral-100 text-2xl cursor-pointer z-50'
            onClick={() => setIsOpen(false)}
          >
            <IoCloseCircle size={40} className='fill-red-500' />
          </button>

          <ScrollArea.Root className='h-[700px] overflow-hidden'>
            <ScrollArea.Viewport className='h-full w-full p-5'>
              <Dialog.Title className='text-2xl tracking-wider'>
                {data.name}
              </Dialog.Title>
              <Dialog.Description>{data.card.description}</Dialog.Description>
              <div className='flex flex-col gap-5'>
                <ProjectDisplay type='image' url={data.imageUrl} />

                <article>
                  <p>{data.description}</p>
                  <h3 className={`text-lg uppercase ${robotoMono.className}`}>
                    Features
                  </h3>
                  <p></p>
                </article>
                <article>
                  <h3 className={`text-lg uppercase ${robotoMono.className}`}>
                    Tech Stack
                  </h3>
                  <p></p>
                </article>
              </div>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
              className='flex select-none touch-none p-0.5 bg-slate-950 transition-colors duration-[160ms] ease-out hover:bg-black data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
              orientation='vertical'
            >
              <ScrollArea.Thumb className="flex-1 bg-amber-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProjectModal;
