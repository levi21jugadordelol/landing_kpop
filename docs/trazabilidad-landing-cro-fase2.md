# Trazabilidad - Landing CRO Fase 2

## Contexto Del Producto

Producto:
Landing CRO comercial optimizada con Astro + Tailwind.

Objetivo:
Crear una landing reutilizable para negocios que venden por WhatsApp, con catálogo limitado, CTA directo, animaciones CSS avanzadas y medición CRO básica.

Límite principal:
No es CMS, no es ecommerce, no tiene backend, no tiene carrito y no tiene pasarela de pago.

## Decisiones Aprobadas

| Fecha      | Decisión                                                                 | Estado   |
| ---------- | ------------------------------------------------------------------------ | -------- |
| 2026-09-28 | Trabajar Fase 2 como Landing CRO con techo de productos                  | Aprobado |
| 2026-09-28 | Usar Astro + Tailwind                                                    | Aprobado |
| 2026-09-28 | Separar arquitectura en pages, layouts, sections, data, scripts y styles | Aprobado |
| 2026-09-28 | Crear archivo de trazabilidad del proyecto                               | Aprobado |

## Tarjetas

### LANDING-CRO-FASE2-SETUP-01

Estado: Cerrada

Resultado:

- Proyecto Astro creado en `/d/landing-cro`.
- Git iniciado.
- Dependencias instaladas.

### LANDING-CRO-FASE2-SETUP-02

Estado: Cerrada

Resultado:

- Tailwind instalado.
- `src/styles/global.css` importado en `src/pages/index.astro`.
- Tailwind validado visualmente.

### LANDING-CRO-FASE2-ARCH-01

Estado: Cerrada

Resultado:

- Carpetas base creadas:
  - `src/components/ui`
  - `src/components/landing`
  - `src/sections`
  - `src/data`
  - `src/scripts/cro`
  - `src/scripts/whatsapp`
  - `src/layouts`

### LANDING-CRO-FASE2-ARCH-02

Estado: Cerrada

Resultado:

- Archivos base creados:
  - `src/layouts/LandingLayout.astro`
  - `src/sections/HeroSection.astro`
  - `src/sections/CatalogSection.astro`
  - `src/sections/TrustSection.astro`
  - `src/sections/HowToBuySection.astro`
  - `src/sections/FaqSection.astro`
  - `src/sections/FinalCtaSection.astro`
  - `src/data/business.ts`
  - `src/data/products.ts`
  - `src/data/faqs.ts`
  - `src/scripts/cro/events.ts`
  - `src/scripts/whatsapp/links.ts`
  - `src/styles/animations.css`
  - `src/styles/landing.css`

### LANDING-CRO-FASE2-ARCH-03

Estado: Aprobada

Resultado:

- Responsabilidades de archivos definidas.
- Pendiente implementar contenido base.

## Siguiente Tarjeta

### LANDING-CRO-FASE2-DATA-01

Título:
Crear datos base del negocio, productos demo, FAQs, links de WhatsApp y eventos CRO.

Estado:
Pendiente

### LANDING-CRO-FASE2-DATA-01

Estado: Cerrada

Resultado:

- Se creó `src/data/business.ts` con datos base del negocio.
- Se creó `src/data/products.ts` con catálogo demo limitado.
- Se creó `src/data/faqs.ts` con preguntas frecuentes.
- Se creó `src/scripts/whatsapp/links.ts` para generar enlaces WhatsApp.
- Se creó `src/scripts/cro/events.ts` para nombres de eventos CRO y helper básico.

Evidencia:

- `npm run build` ejecutado correctamente.
- Resultado: 1 página estática generada.

### LANDING-CRO-FASE2-LAYOUT-01

Estado: Cerrada

Resultado:

- Se implementó `src/layouts/LandingLayout.astro`.
- Se conectó `src/pages/index.astro` con el layout base.
- Se conectaron las secciones:
  - `HeroSection`
  - `CatalogSection`
  - `TrustSection`
  - `HowToBuySection`
  - `FaqSection`
  - `FinalCtaSection`

Evidencia:

- `npm run build` ejecutado correctamente.
- Resultado: 1 página estática generada.

### LANDING-CRO-FASE2-HERO-01

Estado: En validación

Resultado aplicado:

- Se creó la tarjeta `docs/tarjetas/LANDING-CRO-FASE2-HERO-01.md`.
- Se generó auditoría focalizada en `docs/auditorias/LANDING-CRO-FASE2-HERO-01/auditoria-hero-actual.txt`.
- Se generó mapa de implementación en `docs/auditorias/LANDING-CRO-FASE2-HERO-01/mapa-implementacion-hero-01.txt`.
- Se consolidó `src/styles/landing.css` para eliminar capas históricas del hero.
- Se actualizó `src/styles/animations.css` con entrada por capas, flotación suave y brillo sutil en CTA.

Perspectiva principal:

- Marketing / CRO.

Perspectiva técnica:

- Arquitectura frontend.

Fuera de alcance:

- Slide 2 y slide 3.
- Catálogo.
- CMS.
- Backend.
- Ecommerce.
- Medición CRO real.

Validación pendiente:

- Build.
- Diff check.
- Revisión visual mobile/desktop.

Ajuste aprobado dentro de LANDING-CRO-FASE2-HERO-01:

- Se aprobó ampliar el alcance para animar el título por líneas.
- Se agregó `titleLines` en `src/data/heroSlides.ts`.
- Se actualizó `src/sections/HeroSection.astro` para renderizar el `h1` por líneas con `aria-label`.
- Se agregaron estilos `.hero-title` y `.hero-title-line`.
- Se agregó animación escalonada `heroTitleLineIn`.

Motivo:

- La animación por líneas no puede implementarse de forma controlada sobre un texto plano sin estructura HTML.

Ajuste UX/UI aprobado dentro de LANDING-CRO-FASE2-HERO-01:

- No se toca el CTA porque su brillo ya cumple la función de llamada a la acción.
- Se agrega énfasis sutil permanente únicamente a la línea `K-pop`.
- Se agrega respiración visual suave al fondo/luz del hero.
- Se mantiene el resto del texto estable para no afectar lectura.

Criterio UX/UI:

- Movimiento permanente solo en elementos de apoyo.
- Texto principal legible.
- CTA intacto.

Ajuste visual posterior dentro de LANDING-CRO-FASE2-HERO-01:

- Se desactiva el pulso permanente de `K-pop`.
- Motivo: visualmente se percibía como parpadeo o foco defectuoso.
- Se mantiene solo entrada por línea y énfasis estático leve.
- CTA no se toca.

Ajuste mobile aprobado dentro de LANDING-CRO-FASE2-HERO-01:

- Se usa `src/assets/hero/hero_mobile_listo.png` como imagen especifica para mobile.
- Se agrega `imageMobile` en `src/data/heroSlides.ts`.
- Se renderiza `.hero-mobile-visual` solo para mobile.
- En mobile se ocultan las imagenes desktop laterales.
- Se ajusta la composicion mobile para priorizar texto + CTA con imagen de apoyo al costado.
- Desktop se mantiene con composicion de dos imagenes laterales.
- CTA no se toca.
