import Link from 'next/link';

interface NavLinkProps {
  text: string;
  href: string;
  active?: boolean;
}

function NavLink({ text, href, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-lg ${active ? 'text-cyan-300' : 'text-primary-100'}`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
