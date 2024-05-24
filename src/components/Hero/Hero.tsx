import { Dictionary } from '@/src/app/[lang]/dictionaries';
import Image from 'next/image';
import profilePic from '../../../public/profile.jpg';
import BlobProfile from '../BlobProfile';

interface HeroProps {
  data: Dictionary['hero'];
}

function Hero({ data }: HeroProps) {
  return (
    <div
      id='home'
      className='my-10 sm:my-20 text-primary-50 flex flex-col items-center sm:flex-row sm:items-center sm:gap-8 md:gap-20'
    >
      <div className='flex flex-col gap-2 text-center sm:text-start'>
        <h1 className='text-3xl sm:text-4xl'>Rodrigo Moguillanksy</h1>
        <h3 className='text-xl text-primary-100'>Full Stack Web Developer</h3>
        <p className='mx-auto max-w-[320px] sm:mx-0 sm:w-8/12 md:w-full pt-4'>
          {data.description}
        </p>
      </div>

      <div className='relative shrink-0 w-[220px] h-[220px] md:w-[300px] md:h-[300px] grid place-items-center mt-6 mb-4 md:my-0'>
        <Image
          src={profilePic}
          alt='Profile Picture'
          width={250}
          className='z-20 rounded-full aspect-square object-cover w-[200px] md:w-[250px]'
        />
        <BlobProfile className='absolute z-10 -top-8 -right-10 w-[310px] h-[310px] md:w-[400px] md:h-[400px]' />
      </div>
    </div>
  );
}

export default Hero;
