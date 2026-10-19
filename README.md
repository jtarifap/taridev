# taridev — web corporativa

Pantalla de inicio de **taridev**: el logo y el nombre de la empresa aparecen centrados, con el icono de **Aura** orbitando a su alrededor. Construido con HTML, CSS y JavaScript nativos, sin dependencias ni proceso de compilación.

## Demo

Abre `index.html` en cualquier navegador moderno.

## Características

- **Splash centrado**: logo animado (pulso) y nombre `taridev` con entrada suave.
- **Órbita de Aura**: el icono `images/aura-icono.png` recorre una elipse alrededor del logo + texto y gira sobre sí mismo.
- **Tooltips**: al pasar el ratón sobre el logo/texto o sobre Aura aparece una ficha informativa.
  - taridev — *Software e inteligencia artificial a medida*
  - Aura — *Asistente inteligente para tu negocio*
- **Pausa al interactuar**: la órbita se detiene al posicionar el ratón sobre taridev o sobre Aura.
- **Acceso directo**: al hacer clic en Aura se abre <http://aura.taridev.com> en una pestaña nueva.
- **Responsive**: tamaños con `clamp()`, se adapta a móvil, tablet y escritorio.
- **Sin scroll accidental**: `overflow: hidden` evita barras de desplazamiento cuando el icono pasa cerca del borde.
- **Extensible**: preparado para añadir más apps orbitando alrededor de taridev.

## Estructura

```
index.html          Splash, metadatos SEO y lógica de la órbita (inline)
styles.css          Variables de color, tipografía y estilos base
script.js           Utilidades heredadas (menú móvil y año dinámico)
llms.txt            Resumen del sitio para asistentes de IA
favicon.ico         Icono multi-tamaño (16–256 px)
images/             Iconos, favicons e imágenes (og-taridev.png, icon-512.png, etc.)
index.html.backup   Copia de la web corporativa anterior (versión completa)
preventa/           Versión previa del sitio
taridev-web/        Copia de versión anterior
taridev-web_0/      Copia de versión anterior
```

## SEO y visibilidad en IA

`index.html` incluye:

- `title`, `description`, `author`, `canonical` y directivas `robots`.
- Open Graph y Twitter Cards para compartir en redes.
- Datos estructurados JSON-LD (`Organization`, `WebSite`, `SoftwareApplication` para Aura).
- Favicon y `apple-touch-icon` con el icono de taridev (`favicon.ico`, `images/favicon-*`, `images/apple-touch-icon.png`).
- Imagen Open Graph/Twitter `images/og-taridev.png` (1200×630) con el logotipo de taridev.
- `llms.txt` con un resumen del negocio y sus servicios para rastreadores de IA.

Tras publicar, valida los datos estructurados y comparte la URL para que se actualicen las previsualizaciones.

## Añadir más apps en órbita

Añade un nuevo `.orbit-item` dentro de `.orbit-ring`:

```html
<div class="orbit-item" data-url="https://otra-app.taridev.com" onclick="openApp(this)">
  <img src="images/otra-app.png" alt="Otra app" class="orbit-icon">
  <div class="orbit-tooltip">
    <strong>Otra app</strong>
    <p>Descripción breve de la aplicación</p>
  </div>
</div>
```

Para repartir varios iconos por la elipse, desfasa su animación con un retardo negativo:

```html
<div class="orbit-item" style="animation-delay: -3s, -3s" ...>
```

## Personalización

| Qué | Dónde |
| --- | --- |
| Velocidad de la órbita y del giro | `.orbit-item` → `animation: orbit-ellipse 6s ..., orbit-spin 6s ...` |
| Tamaño de la elipse | `@keyframes orbit-ellipse` (valores de `clamp()`) |
| Tamaño del icono | `.orbit-item` → `width` / `height` |
| Texto de los tooltips | HTML de `.orbit-tooltip` y `.taridev-tooltip` |
| Colores y tipografía | Variables en `:root` de `styles.css` |

> La velocidad de `orbit-ellipse` y `orbit-spin` debe mantenerse sincronizada para que el icono no "patine" al girar.

## Publicar en GitHub Pages

1. Crea un repositorio y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "taridev splash"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages**.
3. En *Source* selecciona **Deploy from a branch** → rama `main` → carpeta `/ (root)`.
4. Guarda y espera a que se publique en `https://<usuario>.github.io/<repo>/`.

También funciona en cualquier hosting estático (Render, Netlify, Vercel o hosting tradicional): no hay build, basta con servir los archivos de la raíz.

## Notas

- `http://aura.taridev.com` usa HTTP; si el servicio migra a HTTPS, actualiza el `data-url` para evitar contenido mixto.
- `index.html.backup` conserva la versión completa de la web corporativa por si necesitas recuperarla.
