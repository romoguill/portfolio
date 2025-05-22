import Image from 'next/image';

type ProjectDisplayType = 'video' | 'image';

interface ProjectDisplayProps {
  type: ProjectDisplayType;
  url: string;
}

function ProjectDisplay({ type, url }: ProjectDisplayProps) {
  return (
    <div className='bg-neutral-600 border-white w-full aspect-video h-[300px] relative my-3'>
      {type === 'video' ? (
        <iframe
          className='w-full h-full'
          src='https://www.youtube.com/embed/ZlC0KORihfM?si=gU6UG4LfFg8oQDyz'
          title='PixMed Demo'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      ) : (
        <Image
          src={url}
          alt='Project Display'
          fill
          className='object-cover object-top'
        />
      )}
    </div>
  );
}

export default ProjectDisplay;
