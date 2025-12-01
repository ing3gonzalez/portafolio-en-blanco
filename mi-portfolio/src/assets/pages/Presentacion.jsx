/*
Presentacion.jsx - Vista Hero principal
FUNCIONALIDAD: Muestra bio profesional, stats y skills
CONEXIONES: 
- Recibe layout de App.jsx via Outlet
- Navegación via Header → /experiencia, /contacto
- Estilos importados desde Presentacion.css
*/
import '../styles/Presentacion.css';

const Presentacion = () => {
  const stats = [
    { value: '8+', label: 'Años Exp.', icon: '🚀' },
    { value: '50+', label: 'Proyectos', icon: '💻' },
    { value: '100%', label: 'Satisfacción', icon: '⭐' }
  ];

  return (
    <section className="presentacion-hero">
      <div className="hero-content">
        <div className="badge">Full Stack Developer</div>
        <h1 className="hero-title">[Tu Nombre Completo]</h1>
        <p className="hero-subtitle">
          Especialista React, Node.js, SQL Server y QA Engineering
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
