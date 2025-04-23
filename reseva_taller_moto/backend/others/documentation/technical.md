# Documentación Técnica

## Estructura del Proyecto

```
.
├── backend/          # Código del servidor Node.js
├── static/           # Archivos estáticos (CSS, JS, imágenes)
├── templates/        # Plantillas HTML
└── others/           # Documentación y recursos adicionales
```

## API Endpoints

### GET /api/servicios
Retorna la lista de servicios disponibles

### POST /api/reservas
Crea una nueva reserva

Ejemplo:
```json
{
  "nombre": "Juan Perez",
  "email": "juan@example.com",
  "celular": "3001234567",
  "servicio_id": 1,
  "comentarios": "Necesito revisión urgente"
}
```