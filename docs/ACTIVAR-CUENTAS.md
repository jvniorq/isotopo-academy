# Activar cuentas reales sin instalar nada

La web pública funciona desde GitHub Pages. El catálogo, filtros, rutas y favoritos locales están activos. La base Supabase ya está preparada; el registro público permanece deshabilitado mientras se termina la entrega de correo y la prueba integral.

## Estado verificado — 22 de noviembre de 2026

- Proyecto `isotopo-academy`, referencia `vbclpnsiotynzghgygxz`, región São Paulo, plan Free.
- Esquema aplicado: `courses`, `learning` y `course_resources`, con Row Level Security.
- Carga inicial: 40 cursos y 40 guías editoriales.
- Pruebas transaccionales en SQL Editor: lectura y modificación del aprendizaje propio; rechazo de inserciones para otro usuario; modificación de filas ajenas sin efecto; acceso a las 40 guías con rol autenticado; catálogo accesible y aprendizaje/guías bloqueados para visitantes.
- Las dos identidades sintéticas usadas en las pruebas SQL y sus filas se descartaron mediante ROLLBACK. No se crearon cuentas reales de estudiantes para estas pruebas.
- Site URL: https://jvniorq.github.io/isotopo-academy/
- Redirecciones permitidas: esa misma URL y https://jvniorq.github.io/isotopo-academy/?recovery=1
- Email/Password habilitado en Supabase, confirmación de correo activada y longitud mínima de contraseña: 12 caracteres.
- Remitente verificado en Brevo: **Isótopo Academy**, correo autorizado por el propietario: oswer9905@gmail.com. La cuenta dispone de 300 envíos diarios. Falta verificar teléfono, crear una clave SMTP y probar la entrega.
- Contacto de privacidad publicado con autorización: oswer9905@gmail.com.
- URL y clave publicable guardadas en [config.js](../js/config.js). No son secretos.
- `accountsEnabled: false` mantiene los formularios inactivos hasta completar las comprobaciones restantes. Esta bandera controla la interfaz; la protección real de los datos corresponde a Auth, los permisos SQL y RLS.

## Pendiente para abrir el registro

1. Configurar correo transaccional en Authentication → Emails → SMTP Settings. El correo de prueba incluido en Supabase solo admite direcciones del equipo del proyecto y no sirve para el registro general de estudiantes.
2. Mantener el proyecto sin gastos, según la decisión del propietario. Se propone probar Brevo Free (300 mensajes diarios según su documentación consultada el 22/11/2026). Sin dominio propio, Brevo puede sustituir temporalmente el dominio del remitente; verificar que la cuenta admite envíos transaccionales y que el mensaje llega realmente. No dar la entrega por garantizada.
3. El propietario debe crear/verificar la cuenta de correo y guardar la clave SMTP directamente en Supabase. Los datos previstos para Brevo son `smtp-relay.brevo.com`, puerto `587` y el usuario SMTP que muestre su panel. La contraseña es una clave SMTP de Brevo, no su clave API ni la contraseña personal.
4. El contacto de privacidad y la referencia a Brevo ya están publicados. Al activar las cuentas, actualizar la página de privacidad para reflejar su disponibilidad.
5. Probar confirmación de correo, acceso, cierre de sesión, recuperación, favoritos, progreso y guías. El flujo PKCE requiere abrir el enlace en el navegador donde se inició la solicitud. El propietario establece sus propias credenciales; no las comparte en el chat.
6. Cambiar `accountsEnabled` a `true` al preparar la prueba integral y verificar el despliegue. Si falla el correo o el acceso, volver a `false` hasta corregirlo. La activación no sustituye las pruebas.
7. Al modificar configuración o módulos de cuentas, actualizar las versiones de importación para evitar la caché de GitHub Pages.

## Protección y contenido

- `learning`: cada usuario puede leer y modificar únicamente sus filas; las políticas comprueban `auth.uid()`.
- `course_resources`: la API permite leer las guías solo a usuarios autenticados.
- `courses`: metadatos públicos de los cursos.
- El progreso es declarado por el estudiante, no una certificación institucional.
- Los enlaces institucionales son públicos. Las cuentas de Isótopo no otorgan acceso a cursos de pago de terceros.
- Las guías de muestra están en el repositorio público y no son secretos. Para contenido exclusivo, introducirlo directamente en la base de datos.
- Nunca publicar una clave `service_role` o `sb_secret`, contraseña de base de datos ni secreto SMTP en GitHub o en el navegador del estudiante.

## Reproducir la base

En un proyecto nuevo, ejecutar [schema.sql](../supabase/schema.sql) y después [seed.sql](../supabase/seed.sql) desde el SQL Editor. No se requiere ninguna instalación local.

La comprobación de API pública se ejecuta en GitHub Actions y valida el catálogo y el rechazo de las tablas privadas sin sesión. No sustituye las pruebas de sesión y correo con usuarios reales.

## Documentación oficial

- [Supabase: correo SMTP y restricciones del servicio de prueba](https://supabase.com/docs/guides/auth/auth-smtp)
- [Supabase: contraseñas](https://supabase.com/docs/guides/auth/passwords)
- [Supabase: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase: claves API](https://supabase.com/docs/guides/api/api-keys)
- [Brevo: configuración SMTP](https://help.brevo.com/hc/en-us/articles/7924908994450-Send-transactional-emails-using-Brevo-SMTP)
- [Brevo: plan gratuito](https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans)
- [Brevo: sustitución temporal del dominio del remitente](https://help.brevo.com/hc/en-us/articles/16045394674066-Troubleshooting-Domain-authentication)
