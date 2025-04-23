export async function submitReserva(formData) {
    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Error en la respuesta del servidor');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  export async function loadServicios() {
    try {
      const response = await fetch('/api/servicios');
      if (!response.ok) throw new Error('Error al cargar servicios');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }