/*
Contacto.jsx - Formulario FUNCIONAL con EmailJS
FUNCIONALIDAD: 
- Estado controlado con useState
- Validación client-side
- Envío real a Gmail via EmailJS
CONEXIONES:
- Header navegación
- EmailJS init en useEffect
- Feedback visual post-envío
*/
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '', email: '', mensaje: ''
  });
  const [status, setStatus] = useState('');
  const formRef = useRef();

  useEffect(() => {
    // REEMPLAZA CON TUS CLAVES EmailJS (ver setup abajo)
    emailjs.init('TU_PUBLIC_KEY');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'TU_SERVICE_ID',  // service_xxxx
        'TU_TEMPLATE_ID', // template_xxxx  
        formRef.current,
        'TU_PUBLIC_KEY'
      );
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      setStatus('Error al enviar. Intenta nuevamente.');
    }
  };

  return (
    <section className="contacto-section">
      <h2 className="section-title">Contáctame</h2>
      
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="6"
          required
        />
        <button type="submit">Enviar Mensaje</button>
      </form>

      {status && <div className={`status ${status.includes('correctamente') ? 'success' : 'error'}`}>{status}</div>}
      
      <div className="contact-info">
        <p>📧 tuemail@gmail.com</p>
        <p>📱 +57 300 XXX XXXX</p>
        <p>📍 Bogotá, Colombia</p>
      </div>
    </section>
  );
};

export default Contacto;
