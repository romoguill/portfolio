import NavLink from './NavLink';

type NavbarProps = {
  navLinks: {
    text: string;
    href: string;
  }[];
};

function Navbar({ navLinks }: NavbarProps) {
  return (
    <nav className='hidden md:block'>
      <ul className='flex items-center gap-16 font-mono'>
        {navLinks.map((link) => (
          <li key={link.text} className='inline-block'>
            <NavLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
