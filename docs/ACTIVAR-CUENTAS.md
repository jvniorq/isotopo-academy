# Activar cuentas reales sin instalar nada

La web pública funciona desde GitHub Pages. El catálogo, filtros, rutas y favoritos locales están activos. La base Supabase y el SMTP de Brevo están configurados. El registro está temporalmente deshabilitado tras detectar un rechazo de autenticación SMTP durante la prueba real.

## Estado verificado — 23 de noviembre de 2026

- Proyecto `isotopo-academy`, referencia `vbclpnsiotynzghgygxz`, región São Paulo, plan Free.
- Esquema aplicado: `courses`, `learning` y `course_resources`, con Row Level Security.
- Carga inicial: 40 cursos y 40 guías editoriales.
- Pruebas transaccionales en SQL Editor: lectura y modificación del aprendizaje propio; rechazo de inserciones para otro usuario; modificación de filas ajenas sin efecto; acceso a las 40 guías con rol autenticado; catálogo accesible y aprendizaje/guías bloqueados para visitantes.
- Las dos identidades sintéticas usadas en las pruebas SQL y sus filas se descartaron mediante ROLLBACK. No se crearon cuentas reales de estudiantes para estas pruebas.
- Site URL: https://jvniorq.github.io/isotopo-academy/
- Redirecciones permitidas: esa misma URL y https://jvniorq.github.io/isotopo-academy/?recovery=1
- Email/Password habilitado en Supabase, confirmación de correo activada y longitud mínima de contraseña: 12 caracteres.
- Remitente verificado en Brevo: **Isótopo Academy**, correo autorizado por el propietario: oswer9905@gmail.com. La cuenta dispone de 300 envíos diarios. Identidad y teléfono verificados; el propietario creó la clave SMTP y la guardó directamente en Supabase. El panel confirma SMTP activado y contraseña almacenada. La prueba de registro devolvió el error SMTP 535: autenticación fallida. No se ha comprobado la entrega.
- Contacto de privacidad publicado con autorización: oswer9905@gmail.com.
- URL y clave publicable guardadas en [config.js](../js/config.js). No son secretos.
- Plantillas de confirmación y recuperación aplicadas en Supabase y revisadas en su previsualización.
- Brevo: seguimiento anónimo seleccionado y consentimiento por contacto activado; no se rastrean contactos cuyo consentimiento es desconocido. Revisar también los enlaces del mensaje recibido.
- `accountsEnabled: false` mantiene los formularios en mantenimiento hasta corregir el correo. Si falla la entrega o el acceso, volver a `false` hasta corregirlo. Esta bandera controla la interfaz; la protección real de los datos corresponde a Auth, los permisos SQL y RLS.

## Validación pendiente

1. Corregir la credencial SMTP de Brevo, comprobar que la clave figure activa en su panel y guardarla directamente en Supabase. Habilitar la prueba con `accountsEnabled: true`, crear una cuenta desde la web y comprobar que Brevo entrega el mensaje de confirmación. El propietario establece su contraseña directamente en el navegador y no la comparte en el chat.
2. Abrir el enlace en el mismo navegador donde se inició el registro (PKCE), comprobar el acceso y el cierre de sesión.
3. Probar favoritos y progreso sincronizados, y las guías reservadas para usuarios autenticados.
4. Probar recuperación y cambio de contraseña, también en el navegador que inició la solicitud.
5. Si falla el correo o el acceso, volver a `accountsEnabled: false` hasta corregirlo. Al modificar módulos de cuentas, actualizar las versiones de importación para evitar la caché de GitHub Pages.

## Configuración de correo

- Mantener el proyecto sin gastos, según la decisión del propietario. Brevo Free ofrece 300 mensajes diarios según su documentación y el panel consultados. Sin dominio propio puede sustituir temporalmente el dominio del remitente; comprobar la entrega real.
- Supabase: Authentication → Emails → SMTP Settings; servidor `smtp-relay.brevo.com`, puerto `587`, usuario SMTP del panel de Brevo y contraseña correspondiente a una clave SMTP. No usar la clave API ni la contraseña personal de Brevo.
- El propietario guarda las credenciales directamente en Supabase. Nunca copiarlas al repositorio.
- Brevo puede hacer caducar las claves después de 90 días de inactividad y en la fecha de vencimiento seleccionada. Revisar este punto si dejan de llegar mensajes.
- Las plantillas y los asuntos están documentados en [Correos de Isótopo](../supabase/emails/README.md).

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
