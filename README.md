
# API Escolar (Node.js + Express + MongoDB)

API REST para gestión **escolar** con **CRUD de estudiantes**, **búsqueda**, **filtros**, **paginación** y **documentación Swagger**.

## 🚀 Stack
- Node.js + Express
- MongoDB (Mongoose)
- Swagger UI (Documentación)
- CORS + dotenv

## 📦 Instalación
```bash
npm install
cp .env.example .env
# Edita .env con tu cadena de conexión a MongoDB
npm run dev
```
Servidor por defecto: `http://localhost:${PORT||3000}`

## 🧭 Endpoints principales
- `POST /api/estudiantes`
- `GET  /api/estudiantes` (query params: `q, curso, minProm, maxProm, page, limit, sort`)
- `GET  /api/estudiantes/:id`
- `PUT  /api/estudiantes/:id`
- `DELETE /api/estudiantes/:id`
- Documentación: `GET /docs`

### Ejemplos de consulta
- Búsqueda por texto: `/api/estudiantes?q=juan`
- Filtro por curso: `/api/estudiantes?curso=3ro BGU`
- Rango de promedio: `/api/estudiantes?minProm=14&maxProm=20`
- Paginación & orden: `/api/estudiantes?page=2&limit=20&sort=-promedio`

## 🗺️ Diagramas & Colecciones
- `/docs/diagrama.drawio` (abre en diagrams.net)
- `/docs/postman_collection.json` (importa en Postman/Thunder Client)

## 📄 Licencia & Créditos
MIT. Estructura y lógica escritas para el dominio escolar. Inspiración general en patrones de **filtros + paginación** de proyectos open‑source similares.
