import Image from 'next/image';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';
import { getDictionary } from './dictionaries';
import { Locale } from '@/src/i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero data={dictionary.hero} />
      <About data={dictionary.about} />
      <Resume />
      <Projects data={dictionary.projects} />
    </>
  );
}
