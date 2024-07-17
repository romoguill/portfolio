import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import ProjectsCard from './ProjectsCard';

interface ProjectsProps {
  data: Dictionary['projects'];
}

function Projects({ data }: ProjectsProps) {
  return (
    <section id='projects' className='mb-6'>
      <HeadingSection title={data.sectionTitle} />
      <div>
        {data.items.map((item) => (
          <ProjectsCard
            key={item.name}
            title={item.name}
            description={item.card.description}
            image={item.imageUrl}
            githubLink={item.githubLink}
            deployedLink={item.deployedLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
