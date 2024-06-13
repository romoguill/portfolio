'use client';

import { Locale } from '@/src/i18n-config';
import { Document, Page, pdfjs } from 'react-pdf';
import { BiLoaderAlt } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import worker from 'pdfjs-dist/build/pdf.worker';

pdfjs.GlobalWorkerOptions.workerSrc = worker;

interface PdfViewerProps {
  lang: Locale;
}
function PdfViewer({ lang }: PdfViewerProps) {
  const [pdfCanvasWidth, setPdfCanvasWidth] = useState(0);

  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPdfCanvasWidth(docRef.current?.getBoundingClientRect().width || 0);
  }, []);

  return (
    <div>
      <Document
        file={`/${lang}/cv-${lang}.pdf`}
        loading={
          <BiLoaderAlt size={24} className='animate-spin mx-auto mt-20' />
        }
        inputRef={docRef}
        className='overflow-x-auto overflow-y-hidden'
      >
        <Page
          pageNumber={1}
          scale={1.3}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          canvasBackground='transparent'
          className='mb-4 flex justify-center'
        />
        <Page
          pageNumber={2}
          scale={1.3}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          canvasBackground='transparent'
          className='mb-4 flex justify-center'
        />
      </Document>
    </div>
  );
}

export default PdfViewer;
