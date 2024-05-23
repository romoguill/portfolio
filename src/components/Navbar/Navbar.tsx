import { robotoMono } from '@/src/app/fonts';
import { links } from '@/src/utils/links';
import NavLink from './NavLink';
import Link from 'next/link';

type NavbarProps = {
  navLinks: {
    text: string;
    href: string;
    external?: boolean;
  }[];
};

function Navbar({ navLinks }: NavbarProps) {
  return (
    <nav>
      <ul className='flex items-center gap-16 font-mono'>
        {navLinks.map((link) => (
          <li key={link.text} className='inline-block'>
            <NavLink
              href={link.href}
              text={link.text}
              external={link.external}
            />
          </li>
        ))}
        <li>
          <Link href='/en/resume' target='_blank' rel='noopener noreferrer'>
            Click
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
