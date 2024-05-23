import HeadingSection from '@/src/components/HeadingSection';
import PdfViewer from './PdfViewer';
import { Locale } from '@/src/i18n-config';
import { getDictionary } from '../dictionaries';

async function ResumePage({ params: { lang } }: { params: { lang: Locale } }) {
  const data = await getDictionary(lang);

  return (
    <div>
      <div className='grid grid-cols-2 place-items-start mb-4'>
        <HeadingSection title={data.resume.title} />
        <a
          href={`/${lang}/cv-${lang}.pdf`}
          className='px-2 py-1 rounded-md grid place-items-center bg-green-600 hover:bg-green-500 text-white'
          download='Rodrigo Moguillansky - Resume.pdf'
        >
          {data.resume.downloadButton}
        </a>
      </div>

      <PdfViewer lang={lang} />
    </div>
  );
}

export default ResumePage;
