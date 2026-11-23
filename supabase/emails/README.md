# Correos de Isótopo

Plantillas aplicadas al proyecto Supabase el 23 de noviembre de 2026 y revisadas en su previsualización. Falta validar mensajes recibidos. Se pueden copiar directamente desde GitHub, sin descargar archivos.

Para reproducir la configuración, pegar cada HTML en Authentication → Emails → Templates:

| Plantilla de Supabase | Archivo | Asunto |
| --- | --- | --- |
| Confirm sign up | confirm-signup.html | Confirma tu correo · Isótopo |
| Reset password | reset-password.html | Recupera tu acceso · Isótopo |

Conservar `{{ .ConfirmationURL }}` y `{{ .SiteURL }}`: Supabase los sustituye por los enlaces del flujo real. No reemplazar el enlace de recuperación por una URL fija.

Estas plantillas no cargan imágenes, fuentes externas ni píxeles. En Brevo se activó el consentimiento de seguimiento por contacto y se seleccionó **No** para rastrear contactos cuyo consentimiento es desconocido. El seguimiento anónimo también está seleccionado. Comprobar en el mensaje recibido que los enlaces de autenticación funcionan y no dependen de un redireccionador de seguimiento.

Verificar el resultado en la previsualización de Supabase y en un mensaje recibido, tanto en escritorio como en móvil, antes de abrir el registro. Los enlaces PKCE deben abrirse en el navegador que inició la solicitud.

[Documentación oficial de plantillas](https://supabase.com/docs/guides/auth/auth-email-templates)
