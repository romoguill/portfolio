interface NavLinkProps {
  text: string;
  href: string;
  active?: boolean;
}

function NavLink({ text, href, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-lg ${active ? 'text-cyan-300' : 'text-primary-100'}`}
    >
      {text}
    </a>
  );
}

export default NavLink;
