'use client';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function ResumePage() {
  return (
    <div>
      <Document file='/en/cv-en.pdf' className='overflow-hidden'>
        <Page
          pageNumber={1}
          scale={1}
          width={800}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          canvasBackground='transparent'
          className='-ml-[1px]'
        />
        <Page
          pageNumber={2}
          scale={1}
          width={800}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          canvasBackground='transparent'
        />
      </Document>
    </div>
  );
}

export default ResumePage;
