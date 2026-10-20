# Precios, alcance y reglas comerciales de Aura

- **Fecha:** 2026-10-20
- **Estado:** vigente
- **Responsable:** Jorge Tarifa
- **Uso:** interno. La versión pública vive en `index.html`, sección `#planes`.

## 1. Regla principal: demo, piloto e implantación

- **Demo:** Aura habla de una empresa de ejemplo o de información pública. No usa datos confidenciales. Es gratuita para proyectos cualificados y dura minutos.
- **Piloto:** Aura usa documentos, precios y preguntas reales de la empresa. Es un servicio de 30 días, con contrato, DPA y alcance acotado. Cuesta 299 € y se descuenta de la implantación si continúan.
- **Implantación:** Aura queda en producción, con todas las fuentes, integraciones, blindaje y soporte del plan contratado.

> Si el cliente quiere que Aura use datos internos, ya no es una demo: es un piloto.

No se vende una “demo personalizada” como producto. La demo con información pública es parte del proceso comercial y no se factura a leads cualificados. Si un lead no está cualificado y pide trabajo de demo a medida, se decide caso por caso y no se publica como oferta.

## 2. Planes públicos

| Plan | Implantación | Cuota | Conversaciones/mes | Idiomas | Avatar | Integraciones | Documentos | Pruebas | Soporte |
|---|---:|---:|---:|---:|---|---:|---:|---:|---|
| **Esencial** | 490 € | 149 €/mes | 300 | 1 | 1 | 1 | 10 | 50 | Email |
| **Negocio** | 990 € | 349 €/mes | 1.000 | 3 | 1 | 2 | 30 | 100 | Prioritario |
| **Pro** | 1.900 € | 690 €/mes | 3.000 | 3 | Varios | API + white-label | 100 | 200 | Dedicado |
| **A medida** | desde 4.900 € | desde 1.500 €/mes | A medida | A medida | A medida | A medida | A medida | A medida | SLA |

Notas:

- Precios sin IVA.
- Conversación adicional: 0,15 € + IVA.
- Implantación: 50% al inicio y 50% en la puesta en marcha.
- Mínimo 3 meses.
- Pago anual: 2 meses gratis, no acumulable con otras promociones.
- “Documento” = PDF/DOCX de hasta 20 páginas. “Página web” = hasta 1.000 palabras. Si se supera, se presupuesta.
- La cuota incluye hosting, LLM/TTS, monitorización, soporte del plan y las horas de actualización de contenido indicadas en la sección 4.

### Definición de conversación

- Una conversación es un bloque de hasta **10 minutos** y **10 mensajes del usuario**.
- Se cierra al alcanzar cualquiera de los dos límites o tras **5 minutos de inactividad**.
- Si el cliente sigue hablando, empieza una conversación nueva.
- No cuentan: mensajes de sistema, errores, pruebas internas ni llamadas internas a herramientas.
- Una hora seguida consume al menos 6 conversaciones, y más si se superan 10 mensajes por bloque.
- El panel debe mostrar el consumo y avisar al 80% y al 100% del límite.

### Voz y coste del exceso

- Con **Piper local**, el extra de 0,15 € + IVA cubre el coste actual; no hay tarifa por carácter.
- Al migrar a **TTS cloud estándar** (Azure Neural, Google Neural2, OpenAI TTS o similar), revisar el extra a **0,25-0,30 € + IVA** para cubrir la síntesis de voz.
- Las voces **premium** se ofrecen como add-on, no incluidas en el extra estándar.

## 3. Piloto Aura 30 días

| Concepto | Condición |
|---|---|
| Precio | **299 €** |
| Duración | 30 días desde la puesta en marcha |
| Datos | Documentos, precios y FAQs reales, con DPA |
| Alcance | 1 caso de uso, 1 web, 10 documentos, 1 idioma, 1 avatar, 1 integración |
| Conversaciones | 150 |
| Incluye | Implantación ligera, guion de prueba, métricas, informe final y sesión de cierre |
| No incluye | Desarrollo a medida, white-label, SLA, soporte 24/7, integraciones no previstas |
| Conversión | Los 299 € se descuentan de la implantación si continúan |
| Si no continúan | Se borran los datos. No hay reembolso |
| Ampliación | Se presupuesta aparte; no se extiende gratis |

Criterios de éxito del piloto:

- Precisión aceptable sobre un conjunto de 30-50 preguntas reales.
- Rechazo correcto de preguntas fuera de alcance.
- Sin fuga de datos entre clientes.
- Latencia percibida aceptable.
- El responsable del cliente valida el resultado y decide continuar o no.

## 4. Programa Fundadores

Oferta limitada a **3 empresas**, por invitación. No se publica el precio en la landing.

| Concepto | Condición |
|---|---|
| Perfil | Empresa que puede ir en producción en 45 días y acepta caso de estudio |
| Plan | Negocio |
| Implantación | **490 €** (50% sobre 990 €) |
| Cuota | **249 €/mes durante 12 meses** |
| Después | **349 €/mes** |
| Piloto | Si hicieron piloto, los 299 € se descuentan de la implantación: neto 191 € |
| Compromiso | 12 meses |
| A cambio | Caso de estudio, testimonio, logo, 2 entrevistas, métricas y feedback |
| Alcance | El estándar de Negocio, sin desarrollo a medida ni descuentos acumulables |
| Plazas | 3, con fecha de caducidad de la oferta |
| Cancelación anticipada | Se facturan los meses restantes del compromiso |

Reglas:

- No es un precio vitalicio.
- No se acumula con el descuento anual ni con otras promociones.
- No se ofrece a todo el mundo: solo a clientes que puedan dar un caso de estudio útil.
- El descuento se justifica por el caso de estudio y el compromiso, no por “ser amigo”.

## 5. Matriz de alcance

| Elemento | Esencial | Negocio | Pro | A medida |
|---|---|---|---|---|
| Web permitida | 1 | 1 | Varias | A medida |
| Documentos | 10 | 30 | 100 | A medida |
| Idiomas | 1 | 3 | 3 | A medida |
| Avatares | 1 | 1 | Varios | A medida |
| Integraciones | 1 | 2 | API + white-label | A medida |
| Conversaciones/mes | 300 | 1.000 | 3.000 | A medida |
| Pruebas de aceptación | 50 | 100 | 200 | A medida |
| Analítica | Básica | Sí | Avanzada | A medida |
| Revisión de seguridad | Básica | Básica | Sí | Sí |
| Horas de contenido/mes | 1 | 2 | 4 | A medida |
| Soporte | Email | Prioritario | Dedicado | SLA |

## 6. Qué no incluye ningún plan

- Desarrollo de software a medida no presupuestado.
- Integraciones nuevas no incluidas en el alcance.
- Creación de contenido, copywriting o traducciones.
- Modelado 3D de avatares, escenarios o imágenes personalizadas.
- Licencias de terceros, voces premium o costes extra de proveedores.
- Campañas de marketing, publicidad o posicionamiento SEO.
- Formación presencial.
- Soporte 24/7, salvo contrato Enterprise.
- Navegación abierta por internet o herramientas no aprobadas.
- Cambios ilimitados de contenido.

## 7. Condiciones económicas

- **Implantación:** 50% al aceptar el presupuesto y 50% en la puesta en marcha.
- **Cuota:** mensual, con mínimo de 3 meses.
- **Pago anual:** 10 meses por 12, no acumulable con fundador ni con otras promociones.
- **Excesos:** 0,15 € + IVA por conversación adicional; se facturan al mes siguiente. Una conversación = hasta 10 minutos y 10 mensajes del usuario. Con TTS cloud estándar, revisar a 0,25-0,30 € + IVA.
- **Impagos:** aviso a los 7 días y suspensión del servicio a los 15 días.
- **Cambios de alcance:** 75 €/h, presupuestados antes de ejecutar.
- **Partner:** 20% recurrente y 20% sobre implantación; condiciones por contrato.
- **Impuestos:** precios sin IVA. Revisar facturación intracomunitaria si aplica.

## 8. ROI para la conversación comercial

Fórmula:

```text
Retorno mensual =
  (oportunidades recuperadas × ticket medio × tasa de cierre)
  + (horas ahorradas × coste hora)
  − cuota mensual
  − (implantación / 12)
```

Ejemplo ilustrativo, no promesa:

- 300 consultas/mes, 20% no atendidas, ticket medio 60 €, cierre 30%.
- Oportunidad recuperada: 300 × 0,20 × 60 × 0,30 = 1.080 €/mes.
- Plan Negocio: 349 €/mes.
- Retorno antes de soporte y horas ahorradas: 731 €/mes.
- Implantación de 990 €: se recupera en menos de 2 meses.

Usar el ejemplo solo si el cliente reconoce sus propios números. No prometer resultados.

## 9. Reglas comerciales

- No regalar la implantación.
- No hacer demos personalizadas gratuitas a leads no cualificados.
- No vender el piloto como prueba gratuita.
- No prometer “100% blindado”; prometer aislamiento, fuentes aprobadas, pruebas y trazabilidad.
- No aceptar “ya veremos el alcance” sin matriz firmada.
- No ofrecer el programa fundador a más de 3 clientes.
- No descontar dos veces: piloto, fundador y anual no se acumulan salvo el crédito del piloto en la implantación.
- Cualificar antes de invertir tiempo: sector, web, documentos, volumen, decisor, plazo y presupuesto.

## 10. Legal y privacidad

- DPA con cada cliente, incluido el piloto.
- Aviso de privacidad y consentimiento de voz si se graba audio.
- Retención de datos definida por contrato.
- Borrado de datos al terminar el piloto sin conversión.
- Proveedor LLM con retención cero y región EU, o despliegue privado si el cliente lo exige.
- No usar datos de un cliente para otro.
- Revisar con asesoría antes de firmar compromisos de 12 meses y cláusulas de cancelación.
