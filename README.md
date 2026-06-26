# Jeny & Víctor - Landing Page de Boda

Landing page elegante y oscura para la boda de Jeny y Víctor, diseñada con un estilo gótico/victoriano.

## Estructura del Proyecto

```
web_boda/
├── index.html          # Archivo principal HTML
├── css/
│   └── styles.css      # Estilos CSS personalizados
├── js/
│   └── main.js         # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## Características

- **Diseño responsivo**: Funciona en desktop y móvil
- **Navegación suave**: Scroll suave entre secciones
- **Menú móvil**: Menú hamburguesa para dispositivos móviles
- **Formulario de confirmación**: Envía vía fetch a endpoint serverless (pendiente)
- **Modal de sugerencias musicales**: Formulario para sugerir canciones
- **Modal de contacto**: Formulario de contacto sin mailto:
- **Animaciones**: Efectos de scroll, parallax, hover y glow
- **Tailwind CSS**: Framework CSS para estilos
- **Fuentes personalizadas**: Bodoni Moda y Hanken Grotesk

## Secciones

1. **Hero**: Presentación principal con fecha y lugar
2. **Normas**: 10 mandamientos del ritual
3. **Ofrendas**: Lista irónica de regalos sugeridos (8 tarjetas)
4. **El Festín**: Menú completo (preludios, fuego, último rito)
5. **Música**: Spotify embed + sugerencias musicales
6. **Elixires**: Formulario de bebida preferida
7. **Galería**: Placeholder visual para galería de fotos (sin implementar)
8. **Ubicación**: Mapa con pin de Finca Torre Pilar

## Tecnologías

- HTML5
- CSS3 (Tailwind CSS + CSS personalizado)
- JavaScript (Vanilla)

## Uso

Simplemente abre `index.html` en un navegador web. No requiere servidor ni dependencias adicionales.

## Personalización

- Modificar colores: Edita la configuración de Tailwind en `index.html`
- Ajustar animaciones: Edita `css/styles.css`
- Cambiar contenido: Edita `index.html` directamente
