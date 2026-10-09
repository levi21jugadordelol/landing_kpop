# LANDING-CRO-FASE2-HERO-01

## Título

Consolidar primer slide del hero con animación de entrada, lectura clara y CTA visible hacia WhatsApp.

## Product Management

Problema:
El hero actual presenta la propuesta principal, pero se percibe estático y todavía no aprovecha la animación como recurso de enganche.

Necesidad:
El primer viewport debe detener la atención, comunicar stock limitado y llevar a consulta por WhatsApp.

Usuario afectado:
Visitante que llega desde redes sociales y decide rápidamente si sigue viendo productos o consulta.

Por qué pertenece al MVP:
El hero es la primera zona de decisión de la landing. Si no comunica rápido, afecta la intención inicial.

Qué queda fuera:
- Crear los slides 2 y 3.
- Agregar backend.
- Agregar CMS.
- Agregar carrito o checkout.

## Marketing / CRO

Etapa del embudo:
Landing -> intención.

Fricción u objeción:
El visitante puede no detenerse a leer o no percibir urgencia/disponibilidad.

Hipótesis:
Una entrada animada por capas, un hero más vivo y un CTA visible pueden aumentar la probabilidad de que el visitante lea y consulte por WhatsApp.

Evento/métrica:
Clic en CTA principal hacia WhatsApp.

Resultado esperado:
Hero visualmente más claro, con animación de entrada y CTA destacado.

## Arquitectura / Técnica

Componentes afectados:
- src/styles/landing.css
- src/styles/animations.css

No cambia:
- src/sections/HeroSection.astro
- src/data/heroSlides.ts
- src/scripts/whatsapp/links.ts

Criterios de aceptación:
- El hero conserva imagen izquierda, texto central e imagen derecha en desktop.
- El hero mantiene CTA principal visible.
- El hero tiene animación de entrada por capas.
- Las imágenes tienen movimiento suave posterior.
- Se respeta prefers-reduced-motion.
- No se toca catálogo ni lógica de WhatsApp.
- Build correcto.
