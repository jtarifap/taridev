# Diseño — Web de taridev y demo de Aura

- **Fecha:** 2026-10-20
- **Estado:** fase 1 implementada con sección de precios; fase 2 (demo guiada) pendiente
- **Repos:** `taridev-web` (landing) y la app de Aura (demo)
- **Idioma:** español (España)

## 1. La idea en una frase

`taridev.com` presenta a Aura y entrega al comprador a una demo viva donde el propio avatar le explica, en unos 90 segundos, lo que puede hacer por su empresa.

## 2. Intención y porqué

La web actual es una splash con el logo de taridev y Aura orbitando. La propuesta de valor vive en un tooltip que solo aparece al pasar el ratón: en móvil no se ve, y en escritorio exige que el visitante adivine que hay algo que descubrir.

La web no debe explicarlo todo. Su trabajo es:

1. Que un comprador entienda en segundos que Aura es un asistente virtual 3D con IA para empresas.
2. Que pruebe la demo.
3. Que pueda contactar sin fricción.

La demo hace la venta. La landing solo abre la puerta.

## 3. Audiencia

- **Comprador B2B:** gerente, director o responsable que evalúa incorporar un asistente virtual con IA a su empresa.
- No es el usuario final del asistente.
- Puede llegar desde LinkedIn, una conversación o una búsqueda, a menudo desde el móvil.
- Tiene poca paciencia y compara con otras soluciones de IA.

## 4. Objetivos, no objetivos y anti-objetivos

### Objetivos

- Explicar qué es Aura y para quién es en menos de 10 segundos.
- Llevar al comprador a una demo interactiva con un solo clic.
- Ofrecer contacto por email y agenda, sin publicar un teléfono personal.
- Dejar una estructura que admita más apps o secciones sin rehacer la home.
- Mantener la estética actual: papel cálido, tinta, coral, Manrope y DM Sans.

### No objetivos (v1)

- Web corporativa con casos, blog o equipo. La sección de precios ya forma parte de la landing.
- Login, área privada o gestión de cuentas.
- Selector de idioma.
- Formulario de contacto con backend propio.
- Chat en vivo atendido por una persona.
- Publicar el teléfono personal.

### Anti-objetivos

- Parecer una plantilla genérica de startup de IA.
- Un mensaje que prometa más de lo que la demo puede cumplir.
- Un CTA que lleve a una experiencia rota o a una página sin demo.
- Confundir taridev (la empresa) con Aura (el producto).
- Depender de `hover` para leer lo importante.

## 5. Flujo completo

1. **Landing:** logo de taridev, Aura orbitando, titular, subtítulo y botón principal.
2. **Clic en “Probar Aura”:** se entra en la app de Aura (misma pestaña, con enlace claro para volver). La demo guiada llega en la fase 2.
3. **Bienvenida:** Aura aclara que es una demo y que hablará de una empresa de ejemplo.
4. **Presentación:** Aura explica qué es y qué puede hacer por una empresa como la del comprador.
5. **Preguntas:** el comprador pregunta por voz o por texto, como en ChatGPT.
6. **Cierre:** Aura ofrece email y agenda para hablar con taridev.
7. **Vuelta:** enlace discreto a `taridev.com`.

## 6. Landing (`taridev-web`)

### 6.1 Contenido visible

- **Titular:** “Aura, el asistente virtual 3D que conoce tu empresa”.
- **Subtítulo:** “IA con la información de tu negocio, por voz o texto. Habla con ella y descubre lo que puede hacer por ti.”
- **Botón principal:** “Probar Aura”.
- **Apoyo bajo el botón:** “Demo interactiva · sin instalar nada · `hola@taridev.com`”.
- **Contacto secundario:** “Hablar con nosotros” (agenda) y `hola@taridev.com`.
- **Sección `#planes`:** explica demo, piloto e implantación; incluye precios, alcance, FAQ y CTA.
- **Precios ocultables:** `window.TARIDEV_SHOW_PRICING` en `index.html` muestra u oculta la sección `#planes` y el enlace “Ver planes” mediante la clase `pricing-hidden`.
- **Pie:** no hay pie en v1; el email queda bajo los botones y al final de la sección de planes.

El tooltip actual de Aura se mantiene como refuerzo en escritorio, pero deja de ser el único sitio donde se explica el producto. El tooltip de taridev puede conservar el email.

### 6.2 Comportamiento

- La órbita se mantiene; Aura sigue siendo el único satélite por ahora.
- El icono de Aura pasa de `div` con `onclick` a un enlace real (`<a href="...">`) para teclado, lector de pantalla y menú contextual.
- El clic lleva a la demo en la **misma pestaña**; la demo incluye un enlace “Volver a taridev”.
- La app actual ya permite probar Aura; el botón principal apunta a ella. El modo demo guiado (`?demo=1`) llega en la fase 2.
- La órbita se pausa al pasar el ratón o al enfocar con teclado.
- Con `prefers-reduced-motion`, la órbita queda estática y las animaciones de entrada se desactivan.

### 6.3 Responsive

- Móvil: logo, titular y botón apilados; órbita más pequeña; botón a ancho completo.
- El mensaje principal debe leerse sin hover y sin scroll.
- Nada de textos que dependan de `white-space: nowrap` en pantallas estrechas.

### 6.4 Accesibilidad

- Enlaces y botones con foco visible.
- `aria-label` claro en el enlace de Aura (“Probar la demo de Aura”).
- Contraste suficiente en titular, subtítulo y botón.
- La animación no es la única forma de transmitir información.

### 6.5 SEO y metadatos

- `title`: “taridev — Software, apps e IA a medida”.
- `description`: “taridev diseña software y apps a medida e integra IA. Descubre Aura, su asistente virtual 3D para empresas.”
- Mantener `Organization` y `WebSite` del JSON-LD.
- Actualizar `SoftwareApplication` de Aura con la URL real de la demo.
- La imagen Open Graph actual (solo logo) se puede mantener en v1; una imagen con Aura queda para después.
- La sección de precios no lleva JSON-LD `Offer` por ahora: los precios y el alcance pueden cambiar y no conviene consolidarlos en datos estructurados hasta estabilizar la oferta.

## 7. Demo de Aura (app de Aura)

Esta parte se implementa en la app de Aura, no en `taridev-web`.

### 7.0 Estado actual de Aura (2026-10-20)

- Repo local: `C:\Projects\Dev\IAvatar_Beta`. Remoto: `https://github.com/jtarifap/IAvatar_Beta.git`. Despliegue: `https://iavatar-beta.onrender.com`.
- Ya existe: avatar 3D VRM con three.js, voz TTS local (Piper) y del navegador, dictado STT, chat multi-proveedor (Ollama, OpenAI, Gemini, Anthropic, Groq), PWA, fondos e i18n es/ca/en.
- Multitenant: hay migración y seed de Supabase (`tenants`, `tenant_config`, `tenant_assets`, etc.) como base, pero la app todavía no resuelve tenant ni tiene login. No presentarlo como función terminada.
- Demo guiada: no existe todavía. La app actual es funcional y se usa como demo del producto en la fase 1. Hay una propuesta de guion JSON + runner en `docs/DemoVirtual.txt` que se puede reutilizar.

### 7.1 Entrada

- Modo demo dentro de la app, activado por `?demo=1` o por un botón “Conoce a Aura”. La app es una SPA sin router; no hace falta una ruta nueva.
- En la fase 1 la landing enlaza a la app actual (`https://iavatar-beta.onrender.com`); en la fase 2 pasará a `https://aura.taridev.com/?demo=1` cuando el DNS resuelva.
- La demo se marca visualmente como **DEMO** durante toda la experiencia.
- No requiere registro ni instalar nada.

### 7.2 Empresa de ejemplo

- Empresa ficticia y creíble. Propuesta: **Clínica Dental Alba**.
- Motivo: es fácil de entender, tiene servicios, horarios, profesionales, precios y preguntas frecuentes; el comprador puede trasladarlo mentalmente a su sector.
- La base de conocimiento de la demo se limita a esa empresa: servicios, horarios, ubicación, profesionales, precios orientativos y preguntas frecuentes.
- Si el comprador pregunta por otra empresa, Aura lo dice y le ofrece hablar con taridev.

### 7.3 Guion de presentación (60–90 s)

1. “Hola, soy Aura, la asistente virtual 3D de Clínica Dental Alba. Esto es una demo: voy a enseñarte lo que puedo hacer por una empresa como la tuya.”
2. “Puedo hablar contigo por voz o por escrito, y tengo presencia 3D.”
3. “Conozco la información de la empresa: servicios, horarios, profesionales, precios y preguntas frecuentes.”
4. “Puedo atender a tus clientes cuando tú no estás, sin perder el tono de tu marca.”
5. “Cada empresa tiene su propio espacio y su propia información, separada del resto.”
6. “Me adapto a la empresa: imagen, voz y conocimiento.”
7. “Ahora pregúntame lo que quieras, como si fueras un cliente. Cuando termines, te explico cómo tener esto en tu empresa.”

El guion es una guía, no un texto rígido: Aura puede reformular, pero no debe saltarse el orden ni inventar datos.

### 7.4 Preguntas y respuestas

- Voz y texto disponibles; el texto siempre funciona aunque el micrófono falle.
- El micrófono se pide solo al pulsar “Hablar”, nunca al cargar.
- La voz no arranca sola: hace falta un clic (“Empezar”) para cumplir las reglas de autoplay del navegador.
- Respuestas basadas solo en la base de conocimiento de la empresa de ejemplo.
- Si la pregunta se sale del ámbito: “En esta demo solo tengo información de Clínica Dental Alba. Para tu empresa, lo vemos en una llamada.”
- No inventar precios, plazos, disponibilidad ni datos legales.
- Límite de control: máximo orientativo de 10 preguntas o 5 minutos por sesión.
- Transcripción visible de lo que dice Aura (accesibilidad y refuerzo).

### 7.5 Cierre

- En cualquier momento, un botón visible: “Quiero esto para mi empresa”.
- Al pulsarlo (o al terminar la presentación), se muestra un panel con:
  - **Email:** `hola@taridev.com` (copiable).
  - **Agenda:** enlace a Cal.com/Calendly para una llamada de 20 minutos (URL pendiente).
  - Botón “Copiar email”.
- Sin teléfono personal.
- El panel no bloquea la conversación; se puede seguir preguntando.

## 8. Contacto

- **Email:** `hola@taridev.com`.
- **Agenda:** Cal.com — `https://cal.com/taridev/15min?overlayCalendar=true`.
- El botón “Hablar con nosotros” abre la agenda en una pestaña nueva; el email queda como alternativa.
- No se publica teléfono.

## 9. Fases de lanzamiento

### Fase 1 — Landing y contacto

- Titular, subtítulo, botón de contacto, email y agenda de Cal.com.
- Botón “Probar Aura” apuntando a la app actual, que ya funciona como demo del producto.
- Sección `#planes` con demo, piloto, implantación, precios, FAQ y programa fundadores.
- Objetivo: que la web deje de ser una splash muda y empiece a captar conversaciones.

### Fase 2 — Demo

- Modo demo (`?demo=1` o botón “Conoce a Aura”) en Aura, con la empresa de ejemplo, el guion y el cierre.
- La landing cambia el CTA de “Probar Aura” al modo demo guiado.
- Objetivo: que el comprador vea el producto funcionando.

### Fase 3 — Crecimiento

- Nuevas apps orbitando el logo.
- Nuevas secciones cuando haya contenido real (casos, servicios, etc.). La sección de precios ya está implementada y puede ocultarse con `window.TARIDEV_SHOW_PRICING`.
- La estructura de la órbita ya reserva el espacio.

## 10. Decisiones tomadas por el usuario

- El visitante objetivo es el **comprador**, no el usuario final.
- La web debe transmitir simplicidad: logo + una app; más adelante se añadirán apps o secciones.
- Aura es una app de IA con avatar 3D y multitenant; el comprador debe entenderlo.
- La demo no es un vídeo: es el mismo avatar explicando lo que hace y lo que puede hacer por la empresa.
- Al terminar la presentación, el comprador puede hablar con Aura por voz o texto, tipo ChatGPT.
- El cierre debe ofrecer email y otro medio de contacto.
- No se publica el teléfono personal.
- El segundo canal será una agenda (Cal.com/Calendly).
- La landing debe explicar con claridad la diferencia entre demo, piloto e implantación.
- Se publican precios exactos para Esencial, Negocio y Pro; A medida se muestra “desde”.
- El piloto de 30 días cuesta 299 € y se descuenta de la implantación.
- El programa fundadores es por invitación y no publica precio.
- La sección de precios debe poder ocultarse con una variable JavaScript.

## 11. Decisiones del builder (revisables)

- Empresa de ejemplo: Clínica Dental Alba.
- La demo se abre en la misma pestaña, con vuelta clara a taridev.
- El botón principal apunta a la app actual; en fase 2 pasa al modo demo.
- El texto “multitenant” no aparece en la landing; se explica dentro de la demo como “cada empresa con su propio espacio”.
- La landing no lleva lista de características; la demo las cuenta.
- Se mantiene la órbita y la paleta actual; no se introduce un framework ni una librería visual nueva.
- Agenda: Cal.com (`https://cal.com/taridev/15min?overlayCalendar=true`).
- Nombres de planes: Esencial, Negocio, Pro y A medida.
- Precios públicos: 490 € + 149 €/mes; 990 € + 349 €/mes; 1.900 € + 690 €/mes; desde 4.900 € + 1.500 €/mes.
- La demo es gratuita y no usa datos internos. Si se usan datos reales, es piloto.
- El piloto cuesta 299 € y se descuenta de la implantación.
- Una conversación facturable es un bloque de hasta 10 minutos y 10 mensajes del usuario; se cierra tras 5 minutos de inactividad. Extra: 0,15 € + IVA con Piper local; revisar a 0,25-0,30 € + IVA al migrar a TTS cloud estándar.
- El programa fundadores se mantiene fuera de la landing con precio; solo se menciona por invitación.
- La sección de planes se oculta con `window.TARIDEV_SHOW_PRICING = false` y la clase `pricing-hidden`.

## 12. Restricciones

- Aura no está terminada: la demo debe ser un entorno controlado, no el producto completo.
- El multitenant es hoy una base de datos, no una experiencia de usuario terminada.
- La web es estática (Render): un formulario requeriría un servicio externo; en v1 se evita.
- `aura.taridev.com` no resuelve a 2026-10-20; hasta arreglar el DNS, la demo puede usar la URL de Render.
- La demo no debe prometer funciones que Aura todavía no tenga; si alguna es simulada, se indica.
- El presupuesto de tokens/tiempo de la demo debe estar acotado.
- Los precios de la landing deben coincidir con `docs/sales/precios-y-alcance.md`.
- La sección de precios puede ocultarse, pero no debe quedar un enlace “Ver planes” visible sin la sección.

## 13. Riesgos

- **Demo frágil:** preguntas fuera de ámbito o respuestas inventadas. Mitigación: base de conocimiento acotada, guardrails y límite de preguntas.
- **Voz:** permisos de micrófono, autoplay y calidad de la voz. Mitigación: texto siempre disponible y botón explícito para hablar.
- **Latencia:** respuestas lentas rompen la sensación de producto. Mitigación: respuestas breves y un estado de “pensando” claro.
- **DNS:** el CTA puede llevar a una URL que no resuelve. Mitigación: usar la URL de Render hasta verificar el dominio.
- **Expectativa:** el CTA lleva a la app, no a la demo guiada. Mitigación: el botón dice “Probar Aura” y el modo guiado llega en la fase 2.

## 14. Criterios de éxito

- Un comprador puede decir en una frase qué es Aura tras 10 segundos en la web.
- El botón principal lleva a una demo que funciona en móvil y escritorio.
- La demo se completa sin errores y termina ofreciendo contacto.
- El comprador puede contactar por email o agenda en menos de dos clics.
- No se expone ningún teléfono personal.
- La web mantiene la simplicidad actual y se ve bien con movimiento reducido.

## 15. Preguntas abiertas

1. ¿Clínica Dental Alba vale como empresa de ejemplo, o prefieres otro sector?
2. ¿Quién asume el coste de las llamadas al LLM/TTS de una demo pública y con qué límite por sesión/mes?
3. ¿Cómo tratamos el consentimiento, el audio y las transcripciones (aviso, retención, terceros)?
4. ¿Solo español en v1?
5. ¿Usamos la URL de Render de Aura hasta que `aura.taridev.com` resuelva?
