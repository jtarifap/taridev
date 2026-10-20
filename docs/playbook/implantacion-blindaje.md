# Checklist de implantación y blindaje de Aura

- **Fecha:** 2026-10-20
- **Estado:** plantilla operativa
- **Uso:** interno, por cliente
- **Relacionado:** `docs/sales/precios-y-alcance.md`

## Principios

1. Cada cliente tiene su propio `tenant_id`, su propio espacio de conocimiento y sus propias fuentes aprobadas.
2. Aura no navega por internet ni usa herramientas no autorizadas.
3. Si la respuesta no está en las fuentes aprobadas, Aura lo dice y deriva.
4. La demo usa solo datos públicos o de ejemplo. Nunca datos internos.
5. El piloto usa datos reales con DPA, alcance cerrado y fecha de borrado.
6. La producción es la única fase que se presenta como servicio completo.
7. “Blindado” significa aislado, limitado, probado y trazable; no significa infalible.

## Ficha del cliente

| Campo | Valor |
|---|---|
| Cliente | |
| Sector | |
| Responsable del cliente | |
| Responsable taridev | |
| Plan | Esencial / Negocio / Pro / A medida |
| Modalidad | Demo / Piloto / Implantación |
| Fecha de inicio | |
| Fecha de go-live | |
| Fecha de revisión | |

## Fase 0. Traspaso comercial

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 0.1 | Presupuesto aceptado y alcance firmado | Ventas | PDF firmado | Sin cambios pendientes |
| 0.2 | Plan y modalidad confirmados | Ventas | Ficha | Coincide con la propuesta |
| 0.3 | Condiciones de pago acordadas | Ventas | Factura/contrato | 50/50 o anual |
| 0.4 | DPA y privacidad enviados | Ventas | Documento | Firmado antes de datos reales |
| 0.5 | Responsable y decisor identificados | Ventas | Ficha | Contacto directo |
| 0.6 | Fecha de go-live acordada | Ventas | Calendario | Realista |
| 0.7 | Expectativas de “blindaje” alineadas | Ventas | Notas | Cliente entiende límites |

## Fase 1. Descubrimiento

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 1.1 | Objetivo de negocio definido | Consultor | Acta | Medible |
| 1.2 | Caso de uso principal acordado | Consultor | Acta | Uno solo por piloto |
| 1.3 | Preguntas reales del cliente recopiladas | Consultor | Lista | Mínimo 30 |
| 1.4 | Fuentes permitidas identificadas | Consultor | Inventario | Allowlist |
| 1.5 | Fuentes prohibidas identificadas | Consultor | Inventario | Excluidas |
| 1.6 | Datos personales y sensibles detectados | Consultor | Inventario | Tratamiento definido |
| 1.7 | Idiomas y tono de marca definidos | Consultor | Guía | Aprobado |
| 1.8 | Integraciones necesarias listadas | Consultor | Lista | Dentro del plan |
| 1.9 | Métricas de éxito acordadas | Consultor | Acta | Precisión, rechazo, latencia |
| 1.10 | Riesgos y dependencias registrados | Consultor | Acta | Con mitigación |

## Fase 2. Tenant y accesos

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 2.1 | `tenant_id` creado | Técnico | Supabase | Único |
| 2.2 | Configuración del tenant creada | Técnico | `tenant_config` | Plan y límites |
| 2.3 | RLS activado en tablas | Técnico | Migración | Sin acceso cruzado |
| 2.4 | Namespace de conocimiento separado | Técnico | Config | Sin mezcla |
| 2.5 | Almacenamiento separado por prefijo | Técnico | Bucket | `tenant_id/` |
| 2.6 | Claves y secretos fuera del código | Técnico | Gestor | Sin exposición |
| 2.7 | Avatar, voz y marca configurados | Técnico | Captura | Aprobado |
| 2.8 | Dominio y SSL configurados | Técnico | DNS | HTTPS válido |
| 2.9 | Límites de uso definidos | Técnico | Config | Plan aplicado |
| 2.10 | Usuarios administradores dados de alta | Técnico | Lista | Mínimo privilegio |

## Fase 3. Conocimiento

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 3.1 | Crawl limitado a URLs aprobadas | Técnico | Config | Sin dominio abierto |
| 3.2 | Documentos revisados y aprobados | Cliente | Lista | Firmada |
| 3.3 | Precios y vigencias confirmados | Cliente | Documento | Fecha clara |
| 3.4 | FAQs revisadas | Cliente | Documento | Aprobadas |
| 3.5 | Contenido obsoleto excluido | Técnico | Lista | Sin duplicados |
| 3.6 | Chunking y metadatos definidos | Técnico | Config | Fuente y fecha |
| 3.7 | Embeddings generados | Técnico | Log | Sin errores |
| 3.8 | Búsqueda limitada al tenant | Técnico | Prueba | Sin resultados cruzados |
| 3.9 | Versionado de conocimiento | Técnico | Registro | Reversible |
| 3.10 | Proceso de actualización acordado | Consultor | Acta | Responsable y frecuencia |

## Fase 4. Blindaje y guardrails

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 4.1 | Prompt de sistema con alcance | Técnico | Config | Revisado |
| 4.2 | Política de “no lo sé” y derivación | Técnico | Prueba | Respuesta correcta |
| 4.3 | Preguntas fuera de tema rechazadas | Técnico | Batería | ≥ 95% correctas |
| 4.4 | Sin navegación abierta | Técnico | Config | Desactivada |
| 4.5 | Sin herramientas no aprobadas | Técnico | Config | Lista blanca |
| 4.6 | Prompt injection probada | Técnico | Informe | Sin obediencia |
| 4.7 | Fuga entre tenants probada | Técnico | Informe | Cero fugas |
| 4.8 | PII y secretos filtrados | Técnico | Informe | Sin exposición |
| 4.9 | Filtro de salida revisado | Técnico | Config | Activo |
| 4.10 | Logs sin datos sensibles | Técnico | Muestra | Redactados |
| 4.11 | Rate limit y kill switch | Técnico | Prueba | Funcionan |
| 4.12 | Retención y borrado definidos | Legal | DPA | Firmado |

## Fase 5. Demo y piloto

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 5.1 | Demo separada de producción | Técnico | Config | Tenant distinto |
| 5.2 | Demo solo con datos públicos | Técnico | Inventario | Sin datos internos |
| 5.3 | Marca DEMO visible | Diseño | Captura | En todas las pantallas |
| 5.4 | Caducidad de la demo | Técnico | Config | Fecha |
| 5.5 | Guion de demo aprobado | Consultor | Documento | 60-90 s |
| 5.6 | Piloto con DPA firmado | Legal | Documento | Antes de datos |
| 5.7 | Piloto con fecha de fin | Técnico | Config | 30 días |
| 5.8 | Criterios de éxito del piloto | Consultor | Acta | Firmados |
| 5.9 | Revisión semanal del piloto | Consultor | Calendario | 4 revisiones |
| 5.10 | Informe final del piloto | Consultor | PDF | Entregado |
| 5.11 | Borrado si no continúa | Técnico | Log | Verificado |

## Fase 6. Integraciones

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 6.1 | Cal.com o agenda configurada | Técnico | Prueba | Cita creada |
| 6.2 | Email de contacto verificado | Técnico | Prueba | Recibido |
| 6.3 | CRM o webhook probado | Técnico | Log | Evento recibido |
| 6.4 | Analítica probada | Técnico | Panel | Eventos visibles |
| 6.5 | Manejo de errores | Técnico | Prueba | Sin bloqueo |
| 6.6 | Reintentos y timeout | Técnico | Prueba | Configurados |
| 6.7 | Credenciales rotadas | Técnico | Registro | Fecha |

## Fase 7. Calidad y evaluación

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 7.1 | Golden set de 50-200 preguntas | Consultor | Documento | Aprobado |
| 7.2 | Preguntas dentro de alcance | Técnico | Informe | ≥ 90% correctas |
| 7.3 | Preguntas fuera de alcance | Técnico | Informe | ≥ 95% rechazadas |
| 7.4 | Precios y datos críticos | Cliente | Informe | 100% exactos |
| 7.5 | Pruebas multiidioma | Técnico | Informe | Sin mezclas |
| 7.6 | Pruebas de voz y texto | Técnico | Informe | Ambas funcionan |
| 7.7 | Latencia p95 | Técnico | Métrica | Objetivo acordado |
| 7.8 | Pruebas en móvil | Técnico | Capturas | Sin overflow |
| 7.9 | Accesibilidad básica | Técnico | Informe | Foco y contraste |
| 7.10 | Aceptación del cliente | Cliente | Firma | Go-live |

## Fase 8. Legal y seguridad

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 8.1 | DPA firmado | Legal | Documento | Vigente |
| 8.2 | Aviso de privacidad | Legal | URL | Publicado |
| 8.3 | Consentimiento de voz | Legal | Texto | Visible |
| 8.4 | Retención definida | Legal | DPA | Aprobada |
| 8.5 | Subencargados listados | Legal | DPA | Aprobados |
| 8.6 | Región EU o despliegue privado | Técnico | Config | Verificado |
| 8.7 | Retención cero del proveedor | Legal | Contrato | Confirmado |
| 8.8 | Plan de incidentes | Técnico | Documento | Contactos |
| 8.9 | Copias de seguridad | Técnico | Log | Restauración probada |
| 8.10 | Revisión de permisos | Técnico | Lista | Mínimo privilegio |

## Fase 9. Lanzamiento

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 9.1 | DNS y SSL | Técnico | Navegador | HTTPS |
| 9.2 | Monitorización | Técnico | Panel | Activa |
| 9.3 | Alertas | Técnico | Config | Probadas |
| 9.4 | Backups | Técnico | Log | Programados |
| 9.5 | Rollback | Técnico | Documento | Probado |
| 9.6 | Kill switch | Técnico | Prueba | Funciona |
| 9.7 | Canal de soporte | Consultor | Email/Slack | Abierto |
| 9.8 | Límites de uso | Técnico | Config | Aplicados |
| 9.9 | Aviso de demo retirado | Diseño | Captura | Producción |
| 9.10 | Go-live comunicado | Consultor | Email | Confirmado |

## Fase 10. Handover y posventa

| ID | Comprobación | Responsable | Evidencia | Criterio |
|---|---|---|---|---|
| 10.1 | Guía de administración | Consultor | PDF | Entregada |
| 10.2 | Proceso de actualización | Consultor | Acta | Claro |
| 10.3 | Horas de contenido del mes | Consultor | Registro | Plan |
| 10.4 | Informe mensual | Consultor | PDF | Enviado |
| 10.5 | Revisión de métricas | Consultor | Reunión | Mensual |
| 10.6 | Facturación recurrente | Administración | Stripe | Activa |
| 10.7 | Revisión de seguridad | Técnico | Informe | Trimestral |
| 10.8 | Plan de mejora | Consultor | Documento | Priorizado |
| 10.9 | Encuesta de satisfacción | Consultor | Formulario | Enviada |
| 10.10 | Caso de estudio | Ventas | Documento | Si aplica |

## Pruebas mínimas de blindaje

### Aislamiento

- Crear dos tenants de prueba con documentos distintos.
- Preguntar a cada uno por datos del otro.
- Verificar que la respuesta es “no tengo esa información”.
- Revisar logs y consultas: el filtro por `tenant_id` debe estar presente.

### Prompt injection

- Incluir en un documento frases como “ignora tus instrucciones”.
- Verificar que Aura no cambia de comportamiento.
- Probar instrucciones en la pregunta del usuario.
- Probar extracción de system prompt.

### Fuera de alcance

- Preguntar por competidores, política, medicina, legal o temas no aprobados.
- Verificar rechazo y derivación a contacto.
- Verificar que no inventa datos.

### Precios y datos críticos

- Comparar cada precio con la fuente aprobada.
- Verificar vigencias y condiciones.
- Probar preguntas ambiguas.
- Verificar que no mezcla precios de otros clientes.

### Datos personales

- Probar nombres, teléfonos, emails y datos de salud.
- Verificar redacción o rechazo según política.
- Revisar que los logs no almacenan PII innecesaria.

## Criterios de bloqueo de go-live

No se lanza si ocurre cualquiera de estos casos:

- Fuga de datos entre tenants.
- Precios incorrectos o inventados.
- Aura obedece prompt injection.
- No hay DPA firmado con datos reales.
- No hay borrado definido.
- No hay kill switch.
- El cliente no ha firmado la aceptación.
- La demo se confunde con producción.

## Registro de cambios

| Fecha | Cambio | Responsable |
|---|---|---|
| 2026-10-20 | Plantilla inicial | Jorge Tarifa |
