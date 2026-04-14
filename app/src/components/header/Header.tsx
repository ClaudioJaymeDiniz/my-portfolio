import { NavLinks } from "./Nav-Links"
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeMenu = () => setIsNavOpen(false);

  return (
    // 'fixed' garante que o Header acompanhe a rolagem
    <header className="fixed top-0 left-0 z-50 w-full border-b border-brand-white/10 bg-brand-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* LOGO */}
        <div className="font-heading text-xl font-bold text-brand-white">
          C<span className="text-brand-neon">J</span>
        </div>

        <nav>
          {/* MENU MOBILE */}
          <section className="flex lg:hidden">
            {/* Botão Hamburger - Z-index alto para ficar acima do menu aberto */}
            <button
              className="space-y-1.5 z-[60] relative p-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-8 bg-brand-neon transition-all duration-300 ${isNavOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 w-8 bg-brand-neon transition-all duration-300 ${isNavOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 w-8 bg-brand-neon transition-all duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            {/* Overlay do Menu Mobile */}
            <div className={`fixed inset-0 h-screen w-screen bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 ${
              isNavOpen ? "opacity-100 visible" : "opacity-0 invisible translate-x-full"
            }`}>
              <ul className="flex flex-col items-center gap-10">
                <li className="text-2xl"><NavLinks href="/" onClick={closeMenu}>Home</NavLinks></li>
                <li className="text-2xl"><NavLinks href="/carreira" onClick={closeMenu}>Carreira</NavLinks></li>
                <li className="text-2xl"><NavLinks href="/projetos" onClick={closeMenu}>Projetos</NavLinks></li>
                <li className="text-2xl"><NavLinks href="/hobbies" onClick={closeMenu}>Hobbies</NavLinks></li>
              </ul>
            </div>
          </section>

          {/* MENU DESKTOP */}
          <ul className="hidden lg:flex items-center space-x-10">
            <li><NavLinks href="/">Home</NavLinks></li>
            <li><NavLinks href="/carreira">Carreira</NavLinks></li>
            <li><NavLinks href="/projetos">Projetos</NavLinks></li>
            <li><NavLinks href="/hobbies">Hobbies</NavLinks></li>
          </ul>
        </nav>

        {/* Let's Build - Escondido no mobile para não poluir */}
        <div className="hidden lg:block">
           <a href="#contato" className="px-5 py-2 border border-brand-neon/50 text-brand-neon font-body text-xs font-bold uppercase tracking-tighter hover:bg-brand-neon/10 transition-all">
             Let's Build
           </a>
        </div>
      </div>
    </header>
  );
}