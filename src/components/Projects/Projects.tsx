import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import ProjectsCard from './ProjectsCard';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  data: Dictionary['projects'];
}

function Projects({ data }: ProjectsProps) {
  return (
    <section id='projects' className='mb-6'>
      <HeadingSection title={data.sectionTitle} />
      <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2 no-flicker'>
        {data.items.map((item) => (
          <ProjectsCard key={item.name} item={item} />
        ))}
      </div>
      <ProjectModal />
    </section>
  );
}

export default Projects;
