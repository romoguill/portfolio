import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';
import ProjectsCard from './ProjectsCard';

interface ProjectsProps {
  data: Dictionary['projects'];
}

function Projects({ data }: ProjectsProps) {
  return (
    <section id='projects'>
      <HeadingSection title={data.sectionTitle} />
      <article>
        {data.items.map((item) => (
          <ProjectsCard
            key={item.name}
            title={item.name}
            description={item.description}
            image={item.imageUrl}
          />
        ))}
      </article>
    </section>
  );
}

export default Projects;
