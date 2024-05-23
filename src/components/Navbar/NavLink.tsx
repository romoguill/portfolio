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
      className={`text-lg relative after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 after:bg-yellow-400 after:rounded-xl hover:after:w-full after:transition-all after:duration-300 ${
        active ? 'text-cyan-300' : 'text-primary-100'
      }`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
