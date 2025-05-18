import { Dictionary } from '@/src/app/[lang]/dictionaries';
import { robotoMono } from '@/src/app/fonts';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectsCardProps {
  item: Dictionary['projects']['items'][number];
  onClick: () => void;
}

function ProjectsCard({ item, onClick }: ProjectsCardProps) {
  const hasLive = Boolean(item.deployedLink);
  return (
    <article
      className='rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg transition-transform cursor-pointer hover:scale-105 hover:shadow-2xl no-flicker flex flex-col min-h-[320px]'
      onClick={onClick}
    >
      {/* Optional Project Image */}
      {item.imageUrl && (
        <div className='w-full h-36 bg-black/10 relative'>
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className='object-cover object-top'
            sizes='400px'
            priority={false}
          />
        </div>
      )}
      <div className='flex-1 flex flex-col p-5 gap-3'>
        {/* Header: Name & Live Badge */}
        <div className='flex items-center justify-between mb-1'>
          <h3
            className={`text-xl font-bold text-yellow-300 ${robotoMono.className}`}
          >
            {item.name}
          </h3>
          <span
            className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${
              hasLive
                ? 'bg-green-700 text-green-200'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {hasLive ? 'Live' : 'Offline'}
          </span>
        </div>
        {/* Description */}
        <p className='text-gray-200 text-sm leading-relaxed mb-2'>
          {item.card.description}
        </p>
        {/* Tech Badges */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          <span className='bg-blue-900/60 text-blue-200 px-2 py-1 rounded text-xs font-mono'>
            {item.card.type}
          </span>
          {item.card.languages.map((lang) => (
            <span
              key={lang}
              className='bg-purple-900/60 text-purple-200 px-2 py-1 rounded text-xs font-mono'
            >
              {lang}
            </span>
          ))}
          {item.card.technologies.map((tech) => (
            <span
              key={tech}
              className='bg-pink-900/60 text-pink-200 px-2 py-1 rounded text-xs font-mono'
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Action Buttons */}
        <div className='flex gap-3 mt-4'>
          {item.githubLink && (
            <a
              href={item.githubLink}
              className='text-gray-300 hover:text-yellow-300 transition-colors p-2 rounded-full bg-black/30 hover:bg-yellow-900/30'
              target='_blank'
              onClick={(e) => e.stopPropagation()}
              title='GitHub'
            >
              <FaGithub size={20} />
            </a>
          )}
          {item.deployedLink && (
            <a
              href={item.deployedLink}
              className='text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full bg-black/30 hover:bg-green-900/30'
              target='_blank'
              onClick={(e) => e.stopPropagation()}
              title='Live Demo'
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectsCard;
