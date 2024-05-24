import { FaCode, FaChevronRight } from 'react-icons/fa';

function Stack() {
  return (
    <ul className='grid grid-cols-2 my-2 ml-3'>
      <li className='flex flex-row gap-1 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        Javascript
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        Typescript
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        React/NextJs
      </li>

      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        NodeJs
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        Express
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        Tailwind
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        MongoDB
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        PostgreSQL
      </li>
      <li className='flex flex-row gap-2 items-center font-mono text-sm text-primary-200'>
        <FaChevronRight className='text-yellow-400' size={10} />
        Git
      </li>
    </ul>
  );
}
export default Stack;
