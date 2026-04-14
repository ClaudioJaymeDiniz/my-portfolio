import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
   <footer className="w-full h-20 border-t border-brand-white/10 bg-brand-dark/50 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
    
    {/* Lado Esquerdo */}
    <div className="text-brand-text/50 font-body text-[10px] tracking-widest uppercase">
      © {new Date().getFullYear()} Claudio <span className="text-brand-neon/50">Jayme</span>
    </div>

    {/* Lado Direito */}
    <div className="flex items-center gap-5">
      <SocialLink href="https://github.com/ClaudioJaymeDiniz" Icon={FaGithub} label="GitHub" />
      <SocialLink href="https://www.linkedin.com/in/claudio-jayme/" Icon={FaLinkedin} label="LinkedIn" />
      <SocialLink href="https://wa.me/5512983198823" Icon={FaWhatsapp} label="WhatsApp" />
    </div>

  </div>
</footer>
  )
}

interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

function SocialLink({ href, Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative p-2 flex items-center justify-center"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-brand-neon/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Ícone do React Icons */}
      <Icon 
        className="relative text-2xl text-brand-text/60 group-hover:text-brand-neon group-hover:scale-110 transition-all duration-300 ease-out" 
      />
    </a>
  )
}