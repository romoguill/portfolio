interface NavLinkProps {
  text: string;
  href: string;
  active?: boolean;
}

function NavLink({ text, href, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-lg p-1 ${active ? 'text-cyan-300' : 'text-primary-50'}`}
    >
      {text}
    </a>
  );
}

export default NavLink;
