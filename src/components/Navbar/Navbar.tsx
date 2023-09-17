import { rubik } from '@/src/app/fonts';
import { links } from '@/src/utils/links';
import NavLink from './NavLink';

function Navbar() {
  return (
    <nav>
      <ul className='flex gap-16'>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
