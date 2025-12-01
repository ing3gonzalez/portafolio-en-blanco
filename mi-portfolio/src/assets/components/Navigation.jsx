/*
Navigation.jsx - Menú de navegación con React Router
FUNCIONALIDAD:
- 3 enlaces: Home / Experiencia / Contacto
- Highlight automático en página activa (NavLink)
- Responsive (hamburger en mobile)
CONEXIONES:
- Se usa dentro de Header.jsx
- Enlaces conectan con rutas de App.jsx
*/
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';  // ← Estilos separados

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
            end  // ← Exact match para home
          >
            Presentación
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experiencia" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Experiencia
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacto" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
