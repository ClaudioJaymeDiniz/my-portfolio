import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './router/Router'
import bgImage from './assets/images/bg.jpg' 

export default function App() {
  return (
    <div className="pt-10 relative min-h-screen w-full bg-brand-dark text-brand-text font-body antialiased">
      
     
      <div 
        className="fixed inset-0 z-0 opacity-5 mix-blend-lighten pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'hue-rotate(180deg) brightness(0.8)'
        }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Router>
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

// export default function App() {
//   return (
//     <div className="relative min-h-screen w-full bg-brand-dark text-brand-text font-body antialiased">
      
//       {/* Camada de Background fixa */}
//       <div 
//         className="fixed inset-0 z-0 pointer-events-none"
//         style={{
//           // Gradiente que vai do azul escuro para um azul levemente mais "neon" na base
//           backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(153, 204, 255, 0.1)), url(${bgImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           mixBlendMode: 'overlay', // Faz a imagem "entrar" na cor de fundo
//           opacity: 0.2 // Controle aqui o quanto a imagem aparece (0.1 a 0.3 é o ideal)
//         }}
//       ></div>

//       {/* Conteúdo */}
//       <div className="relative z-10">
//         <Router>
//           <Header />
//           <AppRoutes />
//           <Footer />
//         </Router>
//       </div>
//     </div>
//   )
// }