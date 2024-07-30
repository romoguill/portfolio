'use client';

import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import ProjectsCard from './ProjectsCard';
import ProjectModal from './ProjectModal';
import { useState } from 'react';

interface ProjectsProps {
  data: Dictionary['projects'];
}

function Projects({ data }: ProjectsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectData, setProjectData] = useState<
    Dictionary['projects']['items'][number] | undefined
  >(undefined);

  const handleProjectClick = (project: string) => {
    setProjectData(data.items.find((el) => el.name === project));
    setIsOpen(true);
  };

  return (
    <section id='projects' className='mb-6'>
      <HeadingSection title={data.sectionTitle} />
      <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2 no-flicker'>
        {data.items.map((item) => (
          <ProjectsCard
            key={item.name}
            item={item}
            onClick={() => handleProjectClick(item.name)}
          />
        ))}
      </div>
      {projectData && (
        <ProjectModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={projectData}
        />
      )}
    </section>
  );
}

export default Projects;
