/*
Header.jsx - Barra de navegación fija en TODAS las vistas
FUNCIONALIDAD:
- Logo a la izquierda
- Menú de navegación a la derecha (3 enlaces)
- Fija en scroll (position: sticky)
CONEXIONES:
- Importa Navigation.jsx (subcomponente)
- Se renderiza en App.jsx dentro del Layout
- Estilos desde Header.css
*/
import Navigation from './Navigation';
import '../styles/Header.css';  // ← Estilos separados

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">[Tu Nombre 05 Completo]</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
