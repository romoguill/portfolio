import { Dictionary } from '@/src/app/[lang]/dictionaries';
import { indieFlower, inter, robotoMono, rubik } from '@/src/app/fonts';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';

interface ProjectsCardProps {
  item: Dictionary['projects']['items'][number];
  onClick: () => void;
}

function ProjectsCard({ item, onClick }: ProjectsCardProps) {
  return (
    <article
      className='rounded-xl overflow-hidden bg-secondary-900 relative shadow-xl transition-transform cursor-pointer hover:scale-[1.028] no-flicker'
      onClick={onClick}
    >
      <div className='p-3'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className={`text-2xl tracking-wide ${robotoMono.className}`}>
            {item.name}
          </h3>
          <div className='flex gap-1 items-stretch justify-between'>
            <a
              href={item.githubLink}
              className='rounded-tl-md rounded-bl-md bg-black p-2 hover:bg-accent-secondary/60 transition'
              target='_blank'
            >
              <FaGithub size={22} />
            </a>

            <a
              href={item.deployedLink}
              className='rounded-tr-md rounded-br-md bg-[#234845] p-2 hover:bg-accent-secondary/60 transition'
              target='_blank'
            >
              Live
            </a>
          </div>
        </div>
        <p>{item.card.description}</p>

        <section className='mt-2'>
          <p>
            <span className='text-neutral-200 italic pr-2'>type: </span>
            {item.card.type}
          </p>
          <p>
            <span className='text-neutral-200 italic pr-2'>lang: </span>
            {item.card.languages.join(', ')}
          </p>
          <p>
            <span className='text-neutral-200 italic pr-2'>tech: </span>
            {item.card.technologies.join(', ')}
          </p>
        </section>
      </div>
    </article>
  );
}

export default ProjectsCard;
