import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

export function NavLinks({ href, children, ...props }: NavLinksProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link 
      to={href} 
      {...props} 
      className={`font-body text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:text-brand-neon ${
        isActive ? 'text-brand-neon' : 'text-brand-white/70'
      }`}
    >
      {children}
    </Link>
  );
}