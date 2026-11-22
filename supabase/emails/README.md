# Correos de Isótopo

Plantillas preparadas, todavía no aplicadas al proyecto Supabase. Se pueden copiar directamente desde GitHub, sin descargar archivos.

Después de activar y verificar el SMTP, pegar cada HTML en Authentication → Emails → Templates:

| Plantilla de Supabase | Archivo | Asunto |
| --- | --- | --- |
| Confirm sign up | confirm-signup.html | Confirma tu correo · Isótopo |
| Reset password | reset-password.html | Recupera tu acceso · Isótopo |

Conservar `{{ .ConfirmationURL }}` y `{{ .SiteURL }}`: Supabase los sustituye por los enlaces del flujo real. No reemplazar el enlace de recuperación por una URL fija.

Estas plantillas no cargan imágenes, fuentes externas ni píxeles. Desactivar en el proveedor el seguimiento de enlaces y aperturas para los mensajes de autenticación: puede reescribir los enlaces de un solo uso.

Verificar el resultado en la previsualización de Supabase y en un mensaje recibido, tanto en escritorio como en móvil, antes de abrir el registro. Los enlaces PKCE deben abrirse en el navegador que inició la solicitud.

[Documentación oficial de plantillas](https://supabase.com/docs/guides/auth/auth-email-templates)
