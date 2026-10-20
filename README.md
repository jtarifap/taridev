# taridev — landing de Aura y planes

Landing de **taridev** para presentar **Aura**, su asistente virtual 3D con IA para empresas. Construida con HTML, CSS y JavaScript nativos, sin dependencias ni proceso de compilación.

La página combina el logo de taridev con el icono de Aura orbitando, un titular visible, una llamada a probar Aura, un segundo acceso para hablar con taridev por Cal.com y una sección de planes con demo, piloto e implantación.

## Demo

Abre `index.html` en cualquier navegador moderno.

## Características

- **Hero responsive**: dos columnas en escritorio y una columna en móvil/tablet.
- **Órbita de Aura**: el icono `images/aura-icono.png` recorre una elipse alrededor del logo y el nombre de taridev.
- **Propuesta visible**: titular, subtítulo y botones no dependen de `hover`.
- **Acciones**:
  - **Probar Aura** → <https://iavatar-beta.onrender.com>.
  - **Hablar con nosotros** → <https://cal.com/taridev/15min?overlayCalendar=true>.
  - Email → <mailto:hola@taridev.com>.
- **Tooltips**: al pasar el ratón sobre taridev o Aura aparece una ficha informativa.
- **Pausa al interactuar**: la órbita se detiene al posicionar el ratón sobre el logo o sobre Aura, y al enfocar el enlace con el teclado.
- **Accesibilidad**: Aura es un enlace real, con foco visible y `aria-label`; se respeta `prefers-reduced-motion`.
- **Responsive**: tamaños con `clamp()`, órbita con variables CSS y botones a ancho completo en móvil.
- **Sin scroll horizontal**: la órbita se recorta en el eje X, pero la página puede desplazarse en vertical si el contenido no cabe.
- **Sección de planes**: explica la diferencia entre demo interactiva, piloto de 30 días e implantación, con precios, alcance, FAQ y CTA.
- **Conversación facturable**: bloque de hasta 10 minutos y 10 mensajes del usuario; se cierra tras 5 minutos de inactividad. Extra de 0,15 € + IVA con Piper local.
- **Precios ocultables**: `window.TARIDEV_SHOW_PRICING` permite mostrar u ocultar toda la capa de planes sin tocar el HTML.
- **Extensible**: preparado para añadir más apps orbitando alrededor de taridev.

## Estructura

```
index.html          Landing, estilos de la órbita, planes y metadatos SEO (inline)
styles.css          Variables de color, tipografía y estilos base
script.js           Utilidades heredadas (menú móvil y año dinámico)
llms.txt            Resumen del sitio para asistentes de IA
docs/sales/         Precios, alcance y reglas comerciales
docs/playbook/      Checklist de implantación y blindaje
tests/              Comprobaciones de la landing con Node
favicon.ico         Icono multi-tamaño (16–256 px)
images/             Iconos, favicons e imágenes (og-taridev.png, icon-512.png, etc.)
index.html.backup   Copia de la web corporativa anterior (versión completa)
preventa/           Versión previa del sitio
taridev-web/        Copia de versión anterior
taridev-web_0/      Copia de versión anterior
```

## SEO y visibilidad en IA

`index.html` incluye:

- `title`, `description`, `author`, `canonical` y directivas `robots`, centrados en Aura.
- Open Graph y Twitter Cards para compartir en redes.
- Datos estructurados JSON-LD (`Organization`, `WebSite`, `SoftwareApplication` para Aura).
- Favicon y `apple-touch-icon` con el icono de taridev (`favicon.ico`, `images/favicon-*`, `images/apple-touch-icon.png`).
- Imagen Open Graph/Twitter `images/og-taridev.png` (1200×630) con el logotipo de taridev.
- `llms.txt` con un resumen del sitio y de Aura para rastreadores de IA.

Tras publicar, valida los datos estructurados y comparte la URL para que se actualicen las previsualizaciones.

## Añadir más apps en órbita

Añade un nuevo enlace dentro de `.orbit-ring`:

```html
<a class="orbit-item" href="https://otra-app.taridev.com" aria-label="Abrir Otra app">
  <img src="images/otra-app.png" alt="Otra app" class="orbit-icon">
  <div class="orbit-tooltip">
    <strong>Otra app</strong>
    <p>Descripción breve de la aplicación</p>
  </div>
</a>
```

Para repartir varios iconos por la elipse, desfasa su animación con un retardo negativo:

```html
<a class="orbit-item" style="animation-delay: -3s" ...>
```

## Personalización

| Qué | Dónde |
| --- | --- |
| Velocidad de la órbita | `.splash-visual .orbit-item` → `animation: orbit-ellipse 6s linear infinite` |
| Tamaño de la elipse | `.splash-visual` → variables `--orbit-x` y `--orbit-y` |
| Tamaño del icono | `.orbit-item` → `width` / `height` |
| Texto de los tooltips | HTML de `.orbit-tooltip` y `.taridev-tooltip` |
| Colores y tipografía | Variables en `:root` de `styles.css` |
| Enlaces de acción | `index.html` → botones `.splash-btn` y enlace de Aura |
| Visibilidad de precios | `window.TARIDEV_SHOW_PRICING` en `index.html` |

> La animación `orbit-ellipse` incluye el giro del icono; no hay que sincronizar una segunda animación.

## Mostrar u ocultar precios

La sección `#planes` y el enlace “Ver planes” llevan el atributo `data-pricing`. Para ocultarlos, cambia el flag del `<head>` de `index.html`:

```js
window.TARIDEV_SHOW_PRICING = false;
```

También puedes hacerlo en tiempo de ejecución desde la consola:

```js
setPricingVisibility(false);
setPricingVisibility(true);
```

El estado se aplica con la clase `pricing-hidden` en `<html>`. Si JavaScript está desactivado, la sección se muestra por defecto.

## Tests

```bash
node --test tests/pricing.test.mjs
```

## Publicar en GitHub Pages

1. Crea un repositorio y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "landing de Aura"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages**.
3. En *Source* selecciona **Deploy from a branch** → rama `main` → carpeta `/ (root)`.
4. Guarda y espera a que se publique en `https://<usuario>.github.io/<repo>/`.

También funciona en cualquier hosting estático (Render, Netlify, Vercel o hosting tradicional): no hay build, basta con servir los archivos de la raíz.

## Notas

- La demo apunta a `https://iavatar-beta.onrender.com`; cuando `aura.taridev.com` resuelva y exista el modo demo, actualiza los enlaces a `https://aura.taridev.com/?demo=1`.
- La agenda usa Cal.com: `https://cal.com/taridev/15min?overlayCalendar=true`.
- Los precios y el alcance interno están en `docs/sales/precios-y-alcance.md`; la checklist operativa, en `docs/playbook/implantacion-blindaje.md`.
- La sección de precios se puede ocultar sin borrar el HTML con `window.TARIDEV_SHOW_PRICING = false`.
- `index.html.backup` conserva la versión completa de la web corporativa por si necesitas recuperarla.
