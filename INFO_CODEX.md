# INFO_CODEX

Documento de contexto generado tras revisar los archivos del proyecto `web_boda`.

## Resumen del proyecto

Este proyecto es una landing page estatica para la boda de **Jeny & Victor**, con una estetica oscura, gotica, victoriana y ritual. La pagina se presenta como "El Umbral" y organiza la informacion del evento en secciones narrativas: invitacion, normas, regalos ironicos, musica, confirmacion de asistencia y galeria futura.

La web no usa framework de aplicacion ni proceso de build. Se abre directamente desde `index.html` en el navegador.

## Tecnologias y dependencias

- **HTML5** en `index.html`.
- **CSS personalizado** en `css/styles.css`.
- **JavaScript vanilla** en `js/main.js`.
- **Tailwind CSS por CDN**:
  - `https://cdn.tailwindcss.com?plugins=forms,container-queries`
- **Fuentes externas de Google Fonts**:
  - `Bonheur Royale` (Para títulos principales h1 / display-lg)
  - `Bodoni Moda` (Para otros encabezados)
  - `Hanken Grotesk` (Para cuerpo de texto y etiquetas)
  - `Material Symbols Outlined` (Para iconos)
- **Imagenes ornamentales remotas** desde `lh3.googleusercontent.com`.

No hay `package.json`, dependencias locales, compilador, servidor de desarrollo ni backend activo.

## Estructura de archivos

```text
web_boda/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── README.md
├── CONTENIDO.md
├── ACTOS.md
├── GALERIA.md
├── artistas_titulos.csv
├── lista_ChatGTP.csv
└── lista_Boda.txt
```

## Archivo principal: index.html

`index.html` contiene toda la estructura visible de la pagina. Incluye:

- Configuracion inline de Tailwind.
- Carga de fuentes y Material Symbols.
- Enlace a `css/styles.css`.
- Enlace final a `js/main.js`.

Secciones principales:

1. **Navigation Shell**
   - Cabecera fija.
   - Menu desktop con anclas a `#normas`, `#regalos`, `#musica`, `#confirmar` y `#galeria`.
   - Boton de llamada a la accion: `Estais convocados`.
   - Menu movil tipo pantalla completa.

2. **Hero**
   - Titulo `Jeny & Victor`.
   - Texto ritual de invitacion.
   - Fecha mostrada como `Sabado, 31 de octubre`.
   - Hora: `12:00 h.`
   - Lugar: `Finca Torre Pilar`, `Garrapinillos - Zaragoza`.

3. **Normas**
   - Actualmente muestra solo los tres primeros mandamientos:
     - `01. EL CODIGO`
     - `02. LA PRESENCIA`
     - `03. EL SILENCIO DIGITAL`
   - El archivo `CONTENIDO.md` contiene los 10 mandamientos completos.

4. **Regalos / Ofrendas**
   - Muestra 3 tarjetas:
     - Cena en el restaurante mas caro del mundo.
     - Viaje orbital.
     - Castillo en ruinas con potencial.
   - `CONTENIDO.md` contiene mas ideas de regalos que todavia no estan integradas en el HTML.

5. **Musica**
   - Seccion `El eco de la Celebracion`.
   - Boton `Sugerir una pieza`.
   - Abre un modal con formulario de sugerencia musical.
   - No hay iframe de Spotify integrado en el HTML actual, aunque `CONTENIDO.md` incluye un iframe previsto.

6. **Confirmar**
   - Formulario `La Alquimia del Brindis`.
   - Campos:
     - Nombre.
     - Email.
     - Bebida preferida.
     - Preferencias para barra libre.
   - El envio abre un correo mediante `mailto:`.

7. **Galeria**
   - Seccion `El Testigo`.
   - Actualmente es un placeholder visual con bloques grises, desenfocados y sin interaccion.
   - `GALERIA.md` documenta una futura galeria real con subida de fotos.

8. **Footer**
   - Logo textual `Jeny & Victor`.
   - Enlaces:
     - Protocolo.
     - Ubicacion: `https://maps.google.com`.
     - Contacto: `mailto:victor.vxg@gmail.com`.

9. **Modal musical**
   - Formulario con nombre, cancion y artista.
   - Envia por `mailto:`.

10. **FAB movil**
   - Boton flotante en movil que lleva a la seccion de confirmacion.

## CSS: css/styles.css

El CSS propio complementa Tailwind. Define:

- `scroll-behavior: smooth`.
- Fondo general oscuro `#0e0e11`.
- Color principal de texto `#e9e1d8`.
- Textura de grano mediante `.bg-grain::before`, usando una imagen remota.
- Efecto atmosferico `.eclipse-glow`.
- Configuracion de iconos `Material Symbols`.
- Animaciones:
  - `fadeInScale`
  - `fadeInUp`
  - `fadeInLeft`
  - `pulse-glow`
  - `float`
- Clases de animacion:
  - `.animate-reveal`
  - `.animate-fade-up`
  - `.animate-fade-left`
  - `.animate-pulse-glow`
  - `.animate-float`
- Revelado al hacer scroll:
  - `.scroll-reveal`
  - `.scroll-reveal.visible`
- Menu movil:
  - `.mobile-menu`
  - `.mobile-menu.open`
- Modal:
  - `.modal-overlay`
  - `.modal-overlay.open`
  - `.modal-content`

## JavaScript: js/main.js

El JavaScript gestiona la interaccion de la pagina sin librerias externas.

Funcionalidades:

- Abrir y cerrar el menu movil.
- Cerrar el menu movil al pulsar un enlace.
- Scroll suave al formulario desde:
  - Boton CTA desktop.
  - Boton flotante movil.
- Abrir y cerrar el modal de sugerencias musicales.
- Cerrar el modal al pulsar fuera del contenido.
- Enviar el formulario de confirmacion mediante `mailto:victor.vxg@gmail.com`.
- Enviar el formulario musical mediante `mailto:victor.vxg@gmail.com`.
- Mostrar mensajes de exito temporales tras los envios.
- Animar elementos `.scroll-reveal` al entrar en pantalla.
- Aplicar parallax suave al texto del hero.
- Cambiar el estilo del header al hacer scroll.
- Mover los brillos atmosfericos segun la posicion del raton.

Punto importante: los formularios no guardan datos en ningun servidor. Solo abren el cliente de correo del usuario.

## Contenido editorial

### README.md

Resume el proyecto como una landing page elegante y oscura para la boda de Jeny y Victor, con estilo gotico/victoriano. Indica que se puede abrir directamente `index.html` y que no requiere dependencias.

### CONTENIDO.md

Contiene material editorial ampliado:

- Lista de regalos sugeridos:
  - Crucero `70000 Tons of Metal 2027`.
  - Viaje orbital para dos.
  - Castillo en ruinas.
  - Cueva de hielo.
  - Cena en Sublimotion Ibiza.
  - Bajo Ritter Royal Flora Aurum.
  - Guitarra PRS Private Stock.
  - Un lobo.
- Los **10 mandamientos del Ritual** completos.
- Texto de musica y enlace de colaborador de Spotify.
- Playlist `El Aquelarre` con enlace e iframe.
- Ideas para `El festin`.
- Nota sobre quitar email del formulario.
- Nota sobre permitir que la gente suba fotos.

### ACTOS.md

Organiza la musica por fases narrativas:

1. **Invocacion**
   - Ritual, pagana, ceremonial.
   - Pensada para la llegada de invitados y momentos previos.

2. **El Eclipse**
   - Gotica, melancolica e introspectiva.
   - Nucleo emocional de la estetica.

3. **El Despertar**
   - Sube el pulso y abandona la solemnidad.

4. **El Fuego**
   - Fase de energia alta para la celebracion.

5. **El Regreso**
   - Cierre con Paradise Lost, Katatonia y Nine Inch Nails.

### GALERIA.md

Planifica una futura galeria interactiva llamada `El Testigo`.

Propuesta:

- Despliegue en Vercel.
- Backend con funciones serverless.
- Almacenamiento recomendado:
  - Cloudinary como opcion preferida.
  - Supabase Storage como alternativa.
- Endpoints previstos:
  - `/api/upload`
  - `/api/photos`
- Validacion con `Clave del Ritual`.
- Variables de entorno previstas:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - `CLOUDINARY_UPLOAD_PRESET`
  - `CLAVE_RITUAL`

Esta funcionalidad no esta implementada todavia en el codigo.

## Datos musicales

### artistas_titulos.csv

CSV simple con columnas:

- `Artista`
- `Titulo`

Contiene **56 canciones** y **38 artistas unicos**.

Primeros artistas/canciones:

- Heilung - Alfadhirhaiti.
- Wardruna - Fehu.
- Nytt Land - Ragnarok.
- Dead Can Dance - The Host of Seraphim.
- Danheim - Kala.

### lista_ChatGTP.csv

CSV exportado de Spotify con **56 filas** y datos completos de audio.

Columnas principales:

- Track URI.
- Track Name.
- Album Name.
- Artist Name(s).
- Release Date.
- Duration.
- Popularity.
- Explicit.
- Added By.
- Added At.
- Genres.
- Record Label.
- Danceability.
- Energy.
- Key.
- Loudness.
- Mode.
- Speechiness.
- Acousticness.
- Instrumentalness.
- Liveness.
- Valence.
- Tempo.
- Time Signature.

### lista_Boda.txt

Tiene el mismo formato y contenido aparente que `lista_ChatGTP.csv`: exportacion de playlist de Spotify con metadatos y audio features.

## Estilo visual

Paleta principal:

- Fondo casi negro: `#0E0E11`.
- Fondo secundario: `#16181D`.
- Superficies: `#1C1E22`.
- Texto claro: `#e9e1d8`.
- Dorado/acento: `#E5C17E`.
- Texto apagado: `#3A3D42`.

Direccion de arte:

- Oscura, solemne y ceremonial.
- Toques goticos/victorianos.
- Tipografia caligrafica fluida (`Bonheur Royale`) para titulos principales (h1).
- Tipografia serif ornamental (`Bodoni Moda`) para otros encabezados.
- Tipografia sans (`Hanken Grotesk`) para cuerpo y etiquetas.
- Brillos dorados, divisores ornamentales y textura de grano.

## Dependencias externas y riesgos

- La pagina depende de internet para:
  - Tailwind por CDN.
  - Google Fonts.
  - Material Symbols.
  - Imagenes ornamentales de `lh3.googleusercontent.com`.
- Si se abre sin conexion, la pagina seguira existiendo, pero puede perder estilos de Tailwind, fuentes, iconos e imagenes remotas.
- Los formularios dependen del cliente de correo del visitante. En muchos moviles funciona, pero no es tan fiable como un formulario con backend.
- El enlace de ubicacion apunta a `https://maps.google.com`, no a una direccion concreta.
- La fecha del hero usa "Sabado, 31 de octubre" sin ano explicito en formato normal, aunque el texto ritual muestra `OCTUBRE XXXI - MMXIV`.
- El README visto en algunas salidas puede mostrar caracteres raros si se lee con una codificacion incorrecta; los archivos de contenido principal estan pensados para UTF-8.

## Tareas pendientes sugeridas

1. Integrar en `index.html` los 10 mandamientos completos de `CONTENIDO.md`.
2. Decidir si se mantienen solo 3 regalos o se incorporan las demas ofrendas de `CONTENIDO.md`.
3. Sustituir `https://maps.google.com` por un enlace real a Finca Torre Pilar.
4. Decidir si los formularios siguen con `mailto:` o pasan a un sistema mas fiable.
5. Integrar el iframe de Spotify documentado en `CONTENIDO.md`.
6. Implementar la galeria real siguiendo `GALERIA.md`, si se quiere subida de fotos.
7. Revisar el texto de fecha/ano para que no parezca inconsistente.
8. Considerar descargar localmente los ornamentos e imagen de grano para reducir dependencia de enlaces externos.

## Como trabajar con el proyecto

Para ver la web:

```text
Abrir index.html directamente en un navegador.
```

Para cambiar textos principales:

- Editar `index.html` si el texto ya aparece en la web.
- Usar `CONTENIDO.md` como fuente de contenido pendiente o ampliado.

Para cambiar estilos:

- Ajustes rapidos de layout y color: clases Tailwind dentro de `index.html`.
- Animaciones, menu, modal, grano y efectos globales: `css/styles.css`.

Para cambiar comportamiento:

- Editar `js/main.js`.
- El email de destino actual esta en `js/main.js`: `victor.vxg@gmail.com`.

