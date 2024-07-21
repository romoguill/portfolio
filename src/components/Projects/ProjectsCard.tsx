import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';

interface ProjectsCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  deployedLink: string;
}

function ProjectsCard({
  title,
  description,
  image,
  githubLink,
  deployedLink,
}: ProjectsCardProps) {
  return (
    <article className='rounded-xl overflow-hidden w-80 bg-secondary-900 relative shadow-md'>
      <div className='p-3'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='text-lg'>{title}</h3>
          <div className='flex gap-1 items-stretch justify-between'>
            <a
              href={githubLink}
              className='rounded-tl-md rounded-bl-md bg-black p-2 hover:bg-neutral-900'
              target='_blank'
            >
              <FaGithub size={22} />
            </a>

            <a
              href={deployedLink}
              className='rounded-tr-md rounded-br-md bg-accent-secondary p-2 hover:bg-accent-secondary/80'
              target='_blank'
            >
              Live
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProjectsCard;
