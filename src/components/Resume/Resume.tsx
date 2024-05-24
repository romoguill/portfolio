import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import Link from 'next/link';

interface ResumeProps {
  data: Dictionary['resume'];
}

function Resume({ data }: ResumeProps) {
  return (
    <section id='resume'>
      <HeadingSection title={data.sectionTitle} />
      <Link
        href='/resume'
        className='italic text-sm mb-3 block text-blue-300 hover:text-primary-300'
      >
        {`>> ${data.sideNote} <<`}
      </Link>
      <article className='space-y-2'>
        {data.content.map((item, i) => (
          <p key={i} className='max-w-prose'>
            {item}
          </p>
        ))}
      </article>
    </section>
  );
}

export default Resume;
