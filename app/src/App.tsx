import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './router/Router'

export default function App() {
 
    return (
      <>
      <Router>
        <div className="page sm">
          <Header />  {/* O Header permanece aqui, presente em todas as páginas */}
            <AppRoutes /> {/* Definição de rotas separada */}
          <Footer />
        </div>
      </Router>
      </>
    )
}


