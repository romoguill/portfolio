import { Dictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '../../i18n-config';
import HeadingSection from '../HeadingSection';

interface ResumeProps {
  data: Dictionary['resume'];
  lang: Locale;
}

function Resume({ data, lang }: ResumeProps) {
  return (
    <section id='resume'>
      <HeadingSection title={data.sectionTitle} />
      <a
        href={`/${lang}/cv-${lang}.pdf`}
        download='Rodrigo Moguillansky - Resume.pdf'
        className='italic text-sm mb-3 block text-blue-300 hover:text-primary-300'
      >
        {`>> ${data.sideNote} <<`}
      </a>
      <article className='space-y-2 leading-relaxed'>
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
