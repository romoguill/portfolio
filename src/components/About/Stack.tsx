import { FaCode, FaChevronRight } from "react-icons/fa";

function Stack() {
  return (
    <ul className="grid grid-cols-2 my-2 ml-3 lg:min-w-[450px]">
      <li className="flex flex-row gap-1 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        JavaScript, TypeScript
      </li>
      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        React, Next
      </li>

      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        Node
      </li>
      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        Express, Hono, Nest
      </li>
      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        CSS, Tailwind
      </li>
      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        PostgreSQL, MongoDB
      </li>
      <li className="flex flex-row gap-2 items-center font-mono text-sm text-primary-200">
        <FaChevronRight className="text-yellow-400" size={10} />
        Git, CI/CD, Docker
      </li>
    </ul>
  );
}
export default Stack;
