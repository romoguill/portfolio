import { robotoMono } from '@/src/app/fonts';
import { links } from '@/src/utils/links';
import NavLink from './NavLink';

function Navbar() {
  return (
    <nav>
      <ul className='flex items-center gap-16 font-mono'>
        {links.map((link) => (
          <li key={link.text} className='inline-block'>
            <NavLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
