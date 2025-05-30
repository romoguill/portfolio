'use client';

import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import * as Accordion from '@radix-ui/react-accordion';
import * as Collapsible from '@radix-ui/react-collapsible';
import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';

interface AboutProps {
  data: Dictionary['about'];
}

function About({ data }: AboutProps) {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <HeadingSection title={data.sectionTitle} />
      <p className='text-base max-w-prose leading-relaxed'>{data.main}</p>

      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger className='group mx-auto flex gap-2 items-center italic text-sm mt-6 py-1 px-2 bg-gray-50/5 rounded-lg text-yellow-400 data-[state=open]:text-red-300'>
          {!open ? data.option.expand : data.option.collapse}
          <FaChevronDown
            size={10}
            className='group-data-[state=open]:rotate-180 transition-transform duration-300'
          />
        </Collapsible.Trigger>
        <Collapsible.Content className='collapsible-content'>
          {data.expanded.map((item, i) => (
            <p key={i} className='max-w-prose mt-6'>
              {item}
            </p>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </section>
  );
}

export default About;
