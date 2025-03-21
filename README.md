# Prueba Técnica - Desarrollo de API REST

## Objetivo
El objetivo de esta prueba es evaluar tus habilidades en el desarrollo de APIs REST, la seguridad de los endpoints, la conexión a bases de datos, la implementación de buenas prácticas en el código y la realización de pruebas unitarias.

## Requisitos

### Parte 1: Desarrollo de API REST
-Levantar el docker-compose para tener una base de datos.
- Crea una API REST en **Node.js con NestJS** (puedes usar otro framework si lo prefieres).
- Define un **CRUD** para manejar una entidad llamada `Usuario` con los siguientes campos:
  - `id` (UUID, autogenerado)
  - `nombre` (string, requerido)
  - `apellido` (string, requerido)
  - `email` (string, requerido)
  - `clave` (string, requerido)
  - `creadoEn` (timestamp, autogenerado)
- Documenta la API con **Swagger**.
  

### Parte 2: Autenticación y Seguridad de Endpoints
- Implementa autenticación con **JWT**.
- Agrega roles (`admin`, `usuario`) y protege los endpoints según el rol.
- **El rol de admin puede acceder a todos los endpoints, mientras que el rol de usuario solo puede crear o visualizar los usuarios existentes.**

### Parte 3: Conexión a Base de Datos
- Usa **PostgreSQL** como base de datos.
- Implementa **TypeORM** para la gestión de la base de datos.

### Parte 4: Pruebas Unitarias
- Implementa **pruebas unitarias** con Jest o Mocha.
- Usa **mocks** para evitar dependencia de la base de datos en pruebas.

### Parte 5: Manejo de Variables de Entorno y Secretos
- Usa **dotenv** para la gestión de variables de entorno.
- No incluyas secretos en el código fuente.

### Parte 6: Buenas Prácticas
- Aplica principios SOLID.
- Usa DTOs y servicios correctamente.
- Maneja adecuadamente los errores.

## Entrega
- **Repositorio Git:** Debe incluir el código, pruebas y documentación.
- **Instrucciones:** Agrega un `README.md` con instrucciones para ejecutar la API.
- **Documentación Swagger:** Debe estar accesible en `/api/docs`.

**Tiempo estimado:** 1 a 2 horas.

## Criterios de Evaluación
- **Correcta implementación de la API.**
- **Seguridad y autenticación bien implementadas.**
- **Uso adecuado de PostgreSQL y TypeORM.**
- **Buena organización del código y principios SOLID.**
- **Uso de pruebas unitarias.**
- **Control de versiones correcto.**
- **Documentación clara y bien estructurada.**

**Nota:** Puedes utilizar documentación e inteligencia artificial para optimizar tu desarrollo.

