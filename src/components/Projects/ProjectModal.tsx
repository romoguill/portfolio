'use client';

import { Dictionary } from '@/src/app/[lang]/dictionaries';
import * as Dialog from '@radix-ui/react-dialog';
import { SetStateAction, useState } from 'react';
import ProjectVideo from './ProjectVideo';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: Dictionary['projects']['items'][number] | undefined;
}

function ProjectModal({ isOpen, setIsOpen }: ProjectModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-black/60 z-50' />
        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-1/3 h-[700px] bg-primary-950 z-50 p-6'>
          <Dialog.Title>Project name</Dialog.Title>
          <Dialog.Description>some desc</Dialog.Description>
          <div className='flex flex-col'>
            <ProjectVideo />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProjectModal;
