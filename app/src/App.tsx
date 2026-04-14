import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './router/Router'
import bgImage from './assets/images/bg.jpg' 


export default function App() {
  return (
    // 'h-screen' e 'overflow-hidden' no nível mais alto garantem que o corpo do site nunca role, 
    // apenas a área de conteúdo (main).
    <div className="relative h-screen w-full bg-brand-dark text-brand-text font-body antialiased overflow-hidden">
      
      {/* Background - Camada Fixa */}
      <div 
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
      ></div>

      {/* Container Principal em Flex Column */}
      <div className="relative z-10 flex flex-col h-full w-full">
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          
          <Header />
          
          {/* - flex-grow: ocupa todo o espaço entre header e footer.
            - pt-20: compensa a altura do Header h-20.
            - overflow-y-auto: permite scroll apenas aqui dentro se a página for longa.
          */}
          <main className="flex-grow pt-20 overflow-y-auto overflow-x-hidden flex flex-col">
            <div className="flex-grow">
              <AppRoutes />
            </div>
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