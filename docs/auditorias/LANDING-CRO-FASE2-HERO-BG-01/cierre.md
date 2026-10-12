# LANDING-CRO-FASE2-HERO-BG-01 - Cierre

## Cambio aplicado

- Se agrego una capa decorativa liviana dentro de `HeroSection.astro`.
- Se añadieron photocards CSS, orbitas y brillos rosados sin usar imagenes externas, Three.js, canvas ni librerias nuevas.
- Se reforzo el fondo base del hero con gradientes adicionales de baja opacidad.
- Se agregaron animaciones CSS sutiles y soporte para `prefers-reduced-motion`.
- Se ajustaron posiciones y tamaños especificos para mobile, tablet y desktop.
- Se aumento la intensidad perceptible de la animacion sin introducir JS.
- Se integro `src/assets/hero/hero-bg-mobile.png` como fondo optimizado solo para mobile/tablet.
- Desktop mantiene el fondo CSS original sin usar el asset vertical.
- Se agrego halo, sombra de apoyo y reflejo recortado para que el personaje mobile/tablet se integre con el piso neon.

## Archivos modificados

- `src/sections/HeroSection.astro`
- `src/styles/landing.css`
- `src/styles/animations.css`
- `docs/auditorias/LANDING-CRO-FASE2-HERO-BG-01/cierre.md`

## Validacion

### `npm run build`

Resultado: no completado en entorno local.

Motivo:

```text
spawn EPERM
```

El fallo ocurre al iniciar `esbuild` durante `Building static entrypoints`, comportamiento ya observado previamente en este entorno Windows.

## Criterios del ticket

- Cambio limitado al Hero: cumplido.
- Sin dependencias nuevas: cumplido.
- Sin Three.js/canvas/Lottie: cumplido.
- Sin imagenes externas pesadas: cumplido.
- CTA y texto por encima de la decoracion: cumplido por z-index.
- Decoracion marcada como `aria-hidden`: cumplido.
- `prefers-reduced-motion`: cumplido.
- Responsive mobile/tablet/desktop para la decoracion: cumplido.
- Fondo visual mobile/tablet inspirado en referencia: cumplido con asset local.

## Pendiente recomendado

- Validar visualmente en navegador/Railway desde la rama `hero-bg-neon-reference`.
- Si la composicion funciona, mergear hacia `master`.
- Si no funciona, descartar la rama sin afectar `master`.
