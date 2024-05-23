import HeadingSection from '@/src/components/HeadingSection';
import { getActiveLocale } from '@/src/utils/getActiveLocale';
import PdfViewer from './PdfViewer';

function ResumePage() {
  const locale = getActiveLocale();
  console.log(locale);
  return (
    <div>
      <div className='flex justify-between'>
        <HeadingSection title='Resume' />
        <a
          href='/en/cv-en.pdf'
          className='px-3 py-2 rounded-md grid place-items-center bg-green-600 hover:bg-green-500 text-white'
        >
          Download
        </a>
      </div>

      <PdfViewer />
    </div>
  );
}

export default ResumePage;
