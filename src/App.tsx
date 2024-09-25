import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes from './routes/Router';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Header />  {/* O Header permanece aqui, presente em todas as páginas */}
      <AppRoutes /> {/* Definição de rotas separada */}
      <Footer />
    </Router>
  );
};

export default App;
