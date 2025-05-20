import Image from 'next/image';

type ProjectDisplayType = 'video' | 'image';

interface ProjectDisplayProps {
  type: ProjectDisplayType;
  url: string;
}

function ProjectDisplay({ type, url }: ProjectDisplayProps) {
  return (
    <div className='bg-neutral-600 border-white w-full aspect-video h-[200px] relative my-3'>
      {type === 'video' ? (
        <video src={url} autoPlay muted loop />
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
