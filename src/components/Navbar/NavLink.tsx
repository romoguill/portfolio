import Link from 'next/link';

interface NavLinkProps {
  text: string;
  href: string;
  active?: boolean;
  external?: boolean;
}

function NavLink({
  text,
  href,
  active = false,
  external = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-lg ${active ? 'text-cyan-300' : 'text-primary-100'}`}
      // target={external ? '_blank' : '_self'}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </Link>
  );
}

export default NavLink;
