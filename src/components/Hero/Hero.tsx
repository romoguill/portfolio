import Image from 'next/image';

function Hero() {
  return (
    <div id='home' className='my-20 text-primary-50 flex items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Rodrigo Moguillanksy</h1>
        <h3 className='text-xl text-primary-100'>Full Stack Web Developer</h3>
        <p className='w-8/12 pt-4'>
          I&apos;m a software developer passionate about Web Technologies and
          bringing business ideas to life.
        </p>
      </div>

      <Image
        src='/profilePic.jpg'
        alt='Profile Picture'
        width={300}
        height={300}
        className='rounded-full aspect-square object-cover'
      />
    </div>
  );
}

export default Hero;
