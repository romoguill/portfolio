import { Dictionary } from '@/src/app/[lang]/dictionaries';
import Image from 'next/image';
import profilePic from '../../../public/profile.jpg';
import BlobProfile from '../BlobProfile';

interface HeroProps {
  data: Dictionary['hero'];
}

function Hero({ data }: HeroProps) {
  return (
    <div id='home' className='my-20 text-primary-50 flex items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Rodrigo Moguillanksy</h1>
        <h3 className='text-xl text-primary-100'>Full Stack Web Developer</h3>
        <p className='w-8/12 pt-4'>{data.description}</p>
      </div>

      <div className='relative shrink-0 w-[300px] h-[300px] grid place-items-center'>
        <Image
          src={profilePic}
          alt='Profile Picture'
          width={250}
          className='z-20 rounded-full aspect-square object-cover w-[250px]'
        />
        <BlobProfile className='absolute z-10 -top-8 -right-10 w-[400px] h-[400px]' />
      </div>
    </div>
  );
}

export default Hero;
