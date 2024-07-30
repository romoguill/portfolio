'use client';

import { Dictionary } from '@/src/app/[lang]/dictionaries';
import * as Dialog from '@radix-ui/react-dialog';
import { SetStateAction, useState } from 'react';
import ProjectVideo from './ProjectVideo';
import { inter, robotoMono, rubik } from '@/src/app/fonts';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: Dictionary['projects']['items'][number];
}

function ProjectModal({ isOpen, setIsOpen, data }: ProjectModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-black/60 z-50' />
        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-1/2 h-[700px] bg-primary-950 z-50 p-6 text-neutral-100'>
          <Dialog.Title className='text-2xl tracking-wider'>
            {data.name}
          </Dialog.Title>
          <Dialog.Description>{data.card.description}</Dialog.Description>
          <div className='flex flex-col gap-5'>
            <ProjectVideo />

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProjectModal;
