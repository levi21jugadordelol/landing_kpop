import type { ImageMetadata } from 'astro';

import albumLeft from '../assets/hero/album-left.png';
import albumRight from '../assets/hero/album-right.png';
import heroMobile from '../assets/hero/hero_mobile_listo.png';

export type HeroSlideLayout = 'center-dual' | 'text-left' | 'text-right';

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  titleLines: string[];
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
    title: 'Encuentra tu álbum K-pop antes de que se agote',
    titleLines: ['Encuentra tu', 'álbum K-pop', 'antes de que', 'se agote'],
    description:
      'Mira productos seleccionados, confirma disponibilidad por WhatsApp y coordina tu compra sin carrito ni pasos innecesarios.',
    ctaLabel: 'Consultar disponibilidad',
    imageLeft: albumLeft,
    imageRight: albumRight,
    imageMobile: heroMobile,
    layout: 'center-dual',
  },
];
