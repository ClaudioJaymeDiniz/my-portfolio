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
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-6xl font-heading text-brand-neon mb-4">404</h1>
          <p className="text-brand-text/60 font-body uppercase tracking-widest">
            Sistemas fora de rota. Esta página não existe.
          </p>
        </div>
      } />
    </Routes>
  );
};


