import Image from 'next/image';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';

export default function Home() {
  return (
    <>
      <p>Hola</p>
      <Hero />
      <About />
      <Resume />
      <Projects />
    </>
  );
}
