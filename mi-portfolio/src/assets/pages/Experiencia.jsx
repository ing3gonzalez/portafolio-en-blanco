/*
Experiencia.jsx - Timeline laboral cronológica
FUNCIONALIDAD: Muestra experiencia con logros cuantificables
CONEXIONES:
- Datos hardcodeados (escalable a API)
- Navegación desde Header
- Estilos desde Experiencia.css
*/
import '../styles/Experiencia.css';

const Experiencia = () => {
  const jobs = [
    {
      empresa: 'TechCorp',
      cargo: 'Data Quality Analyst',
      periodo: '2023 - Presente',
      logros: ['+40% calidad datos', 'Testing automatizado', 'SQL optimization']
    },
    {
      empresa: 'DevSolutions',
      cargo: 'QA Engineer',
      periodo: '2020 - 2023',
      logros: ['8 años black/white box', 'Performance testing', 'Requirements IEEE']
    }
  ];

  return (
    <section className="experiencia-section">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{job.cargo}</h3>
              <span className="empresa">{job.empresa}</span>
              <span className="periodo">{job.periodo}</span>
              <ul className="logros">
                {job.logros.map((logro, i) => <li key={i}>{logro}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
