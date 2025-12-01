// App.jsx - Componente raíz con routing y layout global
// Configura BrowserRouter y rutas para las 3 vistas
// Renderiza Header fijo + contenido dinámico via Outlet
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './assets/components/Header';
import Presentacion from './assets/pages/Presentacion';
import Experiencia from './assets/pages/Experiencia';
import Contacto from './assets/pages/Contacto';
import './assets/styles/global.css';

function Layout() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que incorpora el layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Presentacion />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;