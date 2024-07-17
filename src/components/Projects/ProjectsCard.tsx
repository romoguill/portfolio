import Image from 'next/image';

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
    <article className='rounded-xl overflow-hidden w-80 bg-sky-950 relative shadow-md'>
      <div className='p-3'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='text-lg'>{title}</h3>
          <div>
            <a href={githubLink}>Github</a>
            <a href={deployedLink}>Live</a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProjectsCard;
