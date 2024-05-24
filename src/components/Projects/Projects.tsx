import { Dictionary } from '@/src/app/[lang]/dictionaries';
import HeadingSection from '../HeadingSection';

interface ProjectsProps {
  data: Dictionary['projects'];
}

function Projects({ data }: ProjectsProps) {
  return (
    <section>
      <HeadingSection title={data.sectionTitle} />
      <article>
        <h5>Technologies</h5>
      </article>
    </section>
  );
}

export default Projects;
