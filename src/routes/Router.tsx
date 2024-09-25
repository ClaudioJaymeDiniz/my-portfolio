import { Routes, Route } from 'react-router-dom';
import Carreira from '../pages/Carreira/Carreira';
import Hobbies from '../pages/Hobbies/Hobbies';
import Home from '../pages/Home/Home';
import Projetos from '../pages/Projects/Projetos';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carreira" element={<Carreira />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} /> {/* Rota para página 404 */}
    </Routes>
  );
};

export default AppRoutes;
