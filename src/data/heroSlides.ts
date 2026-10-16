import type { ImageMetadata } from 'astro';

import albumLeft from '../assets/hero/album-left.png';
import albumRight from '../assets/hero/album-right.png';
import heroMobile from '../assets/hero/hero_mobile_listo.png';

export type HeroSlideLayout = 'center-dual' | 'text-left' | 'text-right';

export type HeroSlide = {
  id: string;
  eyebrow: string;
  description: string;
  ctaLabel: string;
  imageLeft?: ImageMetadata;
  imageRight?: ImageMetadata;
  imageMobile?: ImageMetadata;
  layout: HeroSlideLayout;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    eyebrow: 'Stock limitado · consulta directa',
    description:
      'Explora álbumes y photocards K-pop, confirma disponibilidad por WhatsApp y coordina tu compra sin carrito ni pasos innecesarios.',
    ctaLabel: 'Consultar disponibilidad',
    imageLeft: albumLeft,
    imageRight: albumRight,
    imageMobile: heroMobile,
    layout: 'center-dual',
  },
];
