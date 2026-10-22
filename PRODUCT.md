# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Comprador B2B que evalúa incorporar un asistente virtual con IA a su empresa: gerente, dueño, director o responsable de área. La web sirve por igual a pymes y despachos profesionales y a empresas medianas o grandes, sin prioridad entre ambos; el plan A medida cubre el extremo superior. No es el usuario final del asistente. Llega a menudo desde LinkedIn, una conversación o una búsqueda, frecuentemente desde el móvil, con poca paciencia y comparando con otras soluciones de IA.

## Product Purpose

taridev.com presenta Aura, el asistente virtual 3D con IA de taridev, y entrega al comprador a una demo viva y a un contacto sin fricción. Aura habla por voz o texto, conoce la información de la empresa y se presenta con presencia 3D. El éxito de la web es que un comprador entienda en segundos qué es Aura y para quién es, pruebe la demo y pueda contactar por email o agenda; la demo hace la venta.

## Positioning

Aura no es un chatbot genérico: es un asistente 3D con voz que conoce los documentos, precios y preguntas reales de cada empresa, con un espacio separado por cliente. La posición que un competidor no puede copiar sin cambiar su modelo es la doctrina demo/piloto/implantación: la demo usa información pública y no toca datos; el piloto de 30 días usa datos reales con contrato y DPA; la implantación deja Aura en producción. A eso se suma publicar precios y alcance exactos.

## Operating Context

- Idioma: español (España). Sin selector de idioma en v1.
- La demo es una app aparte; la landing solo abre la puerta. El dominio `https://aura.taridev.com` ya resuelve. La fase 2 (modo demo guiado, `?demo=1`) está pendiente.
- El CTA principal apunta a `https://aura.taridev.com`.
- Contacto: `hola@taridev.com` y agenda Cal.com de 15 minutos (`https://cal.com/taridev/15min?overlayCalendar=true`). No se publica teléfono.
- La sección `#planes` explica demo, piloto e implantación, con precios, alcance, FAQ y CTA; puede ocultarse con `window.TARIDEV_SHOW_PRICING`.
- Los precios y el alcance públicos viven en `docs/sales/precios-y-alcance.md` y deben coincidir con la landing.
- El sitio es estático y se sirve como HTML/CSS/JS sin compilación.

## Capabilities and Constraints

- Funciona: landing estática, órbita de Aura, enlaces a demo y agenda, sección de planes con precios, FAQ, páginas legales (`privacidad.html`, `terminos.html`) y aviso de IA.
- Sin formulario propio, login, área privada, chat humano, blog, casos, equipo ni selector de idioma en v1.
- Precios públicos: Esencial 490 € + 149 €/mes; Negocio 990 € + 349 €/mes; Pro 1.900 € + 690 €/mes; A medida desde 4.900 € + 1.500 €/mes; piloto 299 € descontable; sin IVA, mínimo 3 meses, sin reembolso del piloto. El programa fundadores (3 plazas, por invitación) no publica precio.
- Aura no está terminada: la demo es un entorno controlado, no el producto completo. El multitenant existe como base de datos, no como experiencia de usuario terminada.
- No prometer aislamiento absoluto ni funciones que Aura aún no tenga; si algo es simulado, se indica.
- No publicar teléfono personal.

## Brand Commitments

- taridev es la empresa; Aura es el producto. No confundirlos ni fundirlos en un mismo mensaje.
- Tono: claro, honesto y sin hype; la transparencia de precios y la distinción demo/piloto son parte de la marca.
- Anti-objetivo: parecer una plantilla genérica de startup de IA.
- Activos existentes: logotipo de taridev, icono de Aura (`images/aura-icono.png`), `images/og-taridev.png`, favicons; nombre y dominio `taridev.com`.

## Evidence on Hand

- No hay clientes, testimonios, logos, casos de estudio ni métricas de resultados citables: el programa fundadores busca precisamente el primer caso. No inventar prueba social, clientes, resultados ni cifras.
- Documentación real: `docs/sales/precios-y-alcance.md` (precios, alcance, reglas comerciales y legales), `docs/playbook/implantacion-blindaje.md` (checklist interno) y `docs/superpowers/specs/2026-10-20-web-taridev-design.md` (spec de la web y la demo).
- Producto real: app de Aura (avatar 3D VRM con three.js, voz TTS, dictado STT, chat multi-proveedor, PWA, i18n es/ca/en) desplegada en `https://aura.taridev.com`.
- La sección de precios y el FAQ son contenido real; los precios están verificados por tests (`tests/pricing.test.mjs`).

## Product Principles

1. La demo hace la venta; la landing solo abre la puerta.
2. Demo, piloto e implantación son tres cosas distintas; si se usan datos internos, ya no es una demo.
3. Publicar precios y condiciones reales; la transparencia es parte de la propuesta.
4. No prometer más de lo que Aura puede cumplir hoy.
5. Cualificar antes de invertir tiempo en trabajo a medida.

## Accessibility & Inclusion

- WCAG AA como suelo: contraste 4,5:1 en texto, foco visible, navegación por teclado y enlaces reales.
- Respetar `prefers-reduced-motion`: la órbita y las entradas se desactivan.
- La información esencial no puede depender de `hover`.
- Debe funcionar en móvil (visita frecuente desde el teléfono) y con texto ampliado.
