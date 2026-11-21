# Activar cuentas reales sin instalar nada

La web pública funciona desde GitHub Pages. El catálogo, filtros, rutas y favoritos locales están activos. Las pantallas de cuentas están diseñadas, pero el registro permanece deshabilitado hasta completar esta configuración.

GitHub Pages sirve archivos estáticos: no puede verificar contraseñas ni proteger datos privados por sí solo. La integración preparada utiliza Supabase Auth y PostgreSQL. Todo se puede configurar desde el navegador; no hace falta descargar el proyecto ni instalar herramientas.

1. El propietario crea un proyecto en Supabase y conserva sus credenciales privadas.
2. En el SQL Editor del proyecto, ejecutar primero [schema.sql](../supabase/schema.sql) y después [seed.sql](../supabase/seed.sql). El segundo archivo carga los 40 cursos y una guía editorial por curso. No importa material protegido de las instituciones.
3. En Authentication → URL Configuration, establecer Site URL como https://jvniorq.github.io/isotopo-academy/ y permitir esa URL y https://jvniorq.github.io/isotopo-academy/?recovery=1 como redirecciones.
4. Habilitar Email/Password y confirmación de correo. Configurar un proveedor de correo para las comunicaciones de producción y revisar límites de envío. El flujo de recuperación usa PKCE: abrir el enlace en el navegador donde se solicitó.
5. En GitHub, editar [js/config.js](../js/config.js): agregar la URL del proyecto, su clave **publishable** (o la clave pública anon heredada) y un contacto responsable de privacidad. Esas son configuraciones públicas.
6. **Nunca** introducir una clave service_role, contraseña de la base de datos ni un secreto SMTP en GitHub ni en el código del navegador. Los secretos se configuran únicamente en el servicio correspondiente.
7. Revisar el texto de privacidad con los datos del responsable antes de activar el registro.
8. Verificar con dos cuentas de prueba: confirmación de correo, inicio y cierre de sesión, recuperación, favoritos, progreso y aislamiento de datos. Una cuenta no debe poder leer ni cambiar las filas de otra. Sin sesión, course_resources debe ser inaccesible a través de la API.

## Qué se protege

- learning: cada usuario puede leer y modificar únicamente sus filas; las políticas comprueban auth.uid().
- course_resources: la API permite leer las guías solo a usuarios autenticados.
- courses: metadatos públicos de los cursos.
- El progreso es declarado por el estudiante, no una certificación de una institución.
- Los enlaces institucionales son públicos; sus cursos mantienen sus propias condiciones. Las cuentas de Isótopo no otorgan acceso a cursos de pago de terceros.
- Las guías de muestra están en el repositorio público. La base de datos demuestra el control de acceso, pero estos textos de ejemplo no son secretos. Para contenido exclusivo, introducirlo directamente en la base de datos, no en este repositorio.

## Validación pendiente

La integración de cuentas y las políticas SQL deben probarse contra el proyecto real antes de anunciar registro operativo. Los ensayos de la interfaz pública no sustituyen esa prueba.

## Documentación oficial

- [Supabase: contraseñas](https://supabase.com/docs/guides/auth/passwords)
- [Supabase: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase: claves API](https://supabase.com/docs/guides/api/api-keys)
- [GitHub Pages](https://docs.github.com/en/pages)
