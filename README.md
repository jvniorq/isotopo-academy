# Isótopo · Conocimiento que transforma

Plataforma en español para explorar 40 cursos relacionados con ingeniería nuclear.

**[Abrir la web](https://jvniorq.github.io/isotopo-academy/)**

## Incluido

- Identidad visual en azul petróleo, verde mineral y blanco; General Sans y Source Sans 3.
- Ilustraciones científicas vectoriales originales, transiciones con GSAP/ScrollTrigger, desplazamiento Lenis en escritorio y modo de movimiento reducido.
- 40 cursos, siete especialidades y siete rutas editoriales.
- Buscador tolerante a acentos y filtros combinables por área, costo, nivel, idioma, duración, certificado, institución, formato y disponibilidad.
- Filtros compartibles mediante URL, paginación, fichas y enlaces a instituciones.
- Favoritos en el navegador; interfaz de registro, acceso y recuperación.
- Integración preparada para autenticación real, progreso y favoritos sincronizados mediante Supabase.
- SQL con políticas de acceso por usuario y carga inicial de 40 cursos.
- Validación de sintaxis y pruebas del catálogo dentro de GitHub Actions.

## Estado de las cuentas

Las cuentas **no están activadas**. Los formularios lo indican y no envían credenciales. Se necesita conectar el proyecto Supabase del propietario y completar la validación de acceso. Consulta [Activar cuentas](docs/ACTIVAR-CUENTAS.md).

Los cursos originales pertenecen a sus instituciones. Isótopo organiza metadatos y guías editoriales; no vende acceso, no reproduce cursos completos ni emite certificados.

## Trabajar solo desde GitHub

Se puede editar cualquier archivo desde GitHub o github.dev. GitHub Pages publica main desde la raíz; no hay compilación ni instalación local. Las pruebas se ejecutan en runners de GitHub con Node.js 22.

- index.html: estructura base, navegación y tipografías.
- styles.css: diseño adaptable.
- js/app.js: vistas e interacciones.
- js/ui.js: componentes y páginas editoriales.
- js/data.js: catálogo utilizado por la interfaz.
- data/courses.json: exportación del mismo catálogo.
- js/catalog.js: filtros y rutas.
- js/animations.js / js/graphics.js: animación e ilustración.
- js/auth.js / js/config.js: integración de cuentas.
- supabase/: esquema y datos iniciales.
- tests/: integridad del catálogo, filtros, precios, rutas y SVG.

Al editar cursos, mantener sincronizados js/data.js, data/courses.json y la carga SQL. Las pruebas detectan discrepancias entre los dos primeros.

## Condiciones del catálogo

Selección inicial: 21 de noviembre de 2026. Los niveles, descripciones y temas orientativos son editoriales. Los costos, certificados y convocatorias pueden cambiar. Se muestran explícitamente los datos por verificar y las convocatorias cerradas. La presencia de una institución no supone afiliación.

No se instalaron ni descargaron archivos de este proyecto en la PC del propietario.
