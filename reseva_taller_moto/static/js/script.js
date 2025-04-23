import { submitReserva, loadServicios } from './formHandler.js';

document.addEventListener("DOMContentLoaded", async function() {
  const reservaForm = document.getElementById("reservaForm");
  
  // Cargar servicios dinámicamente
  try {
    const servicios = await loadServicios();
    const select = document.getElementById("tipoServicio");
    
    select.innerHTML = '<option value="">Seleccione</option>';
    servicios.forEach(servicio => {
      const option = document.createElement('option');
      option.value = servicio.id;
      option.textContent = `${servicio.nombre} - $${servicio.precio.toLocaleString()}`;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error al cargar servicios:", error);
  }

  // Manejar envío de formulario
  reservaForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      servicio_id: document.getElementById("tipoServicio").value,
      comentarios: document.getElementById("comentarios").value
    };

    try {
      const result = await submitReserva(formData);
      alert(`Reserva exitosa! ID: ${result.data.id}`);
      reservaForm.reset();
    } catch (error) {
      alert("Error al enviar reserva: " + error.message);
    }
  });
});

// Resaltar enlace activo en el menú
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('#nav_list a');
  
  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }
  });
});