import { Dictionary } from '@/src/app/[lang]/dictionaries';
import Image from 'next/image';
import profilePic from '../../../public/profile.jpg';
import BlobProfile from '../BlobProfile';
import Stack from '../About/Stack';
import { FaGithub, FaRegFilePdf } from 'react-icons/fa6';
import { githubURL } from '@/src/utils/links';
import { Locale } from '@/src/i18n-config';

interface HeroProps {
  data: Dictionary['hero'];
  lang: Locale;
}

function Hero({ data, lang }: HeroProps) {
  return (
    <section
      id='home'
      className='my-10 sm:my-20 text-primary-50 lg:flex lg:justify-between lg:items-center'
    >
      <div className='flex flex-col items-center sm:flex-row sm:items-center sm:gap-8 md:gap-10'>
        <div className='flex flex-col gap-2 text-center sm:text-start'>
          <h1 className='text-3xl sm:text-4xl'>Rodrigo Moguillanksy</h1>
          <h3 className='text-xl text-primary-100'>Full Stack Web Developer</h3>
          <p className='mx-auto max-w-[400px] sm:mx-0 sm:w-8/12 md:w-full pt-4'>
            {data.description}
          </p>
          <Stack />
        </div>

        <div className='relative shrink-0 w-[220px] h-[220px] md:w-[300px] md:h-[300px] grid place-items-center mt-6 mb-4 md:my-0 '>
          <div className='relative after:absolute after:rounded-full after:z-20 after:inset-0 after:shadow-[inset_0px_0px_5px_0px_#3D3D56]'>
            <Image
              src={profilePic}
              alt='Profile Picture'
              width={250}
              className='z-20 rounded-full aspect-square object-cover w-[200px] md:w-[250px] relative'
            />
          </div>

          <BlobProfile className='absolute z-10 -top-8 -right-10 w-[310px] h-[310px] md:w-[400px] md:h-[400px]' />
        </div>
      </div>
      <div className='md:w-[250px] lg:w-[150px]'>
        <ul className='flex items-center mt-16 justify-center gap-2 lg:block lg:mt-0 lg:space-y-8 lg:text-end lg:w-[160px]'>
          <li className='text-yellow-400 rounded-xl lg:rounded-l-xl lg:bg-gradient-to-r bg-primary-900 lg:from-primary-900 lg:to-primary-950 py-2 pl-2 w-[150px] lg:hover:w-[160px] lg:ml-auto transition-all'>
            <a
              href={`/${lang}/cv-${lang}.pdf`}
              className='flex items-center justify-center lg:justify-start gap-2'
              download='Rodrigo Moguillansky - Resume.pdf'
            >
              Resume{' '}
              <span>
                <FaRegFilePdf />
              </span>
            </a>
          </li>
          <li className='text-yellow-400 rounded-xl lg:rounded-l-xl lg:bg-gradient-to-r bg-primary-900 lg:from-primary-900 lg:to-primary-950 py-2 pl-2 w-[150px] lg:hover:w-[160px] lg:ml-auto transition-all'>
            <a
              href={githubURL}
              className='flex items-center justify-center lg:justify-start gap-2'
              target='_blank'
            >
              GitHub{' '}
              <span>
                <FaGithub />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
