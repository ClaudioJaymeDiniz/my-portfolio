import { Routes, Route } from 'react-router-dom';
import Carreira from '../pages/carreira';
import Hobbies from '../pages/hobbies';
import Projetos from '../pages/projetos';
import Home from '../pages/home';

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carreira" element={<Carreira />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/hobbies" element={<Hobbies  />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} /> {/* Rota para página 404 */}
    </Routes>
  );
};


