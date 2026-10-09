export type ProductStatus = 'available' | 'low_stock' | 'sold_out';

export type Product = {
  id: string;
  name: string;
  group: string;
  artist: string;
  category: string;
  version?: string;
  price: string;
  status: ProductStatus;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'album-01',
    name: 'Map of the Soul',
    group: 'BTS',
    artist: 'BTS',
    category: 'Álbum',
    version: 'Standard Edition',
    price: 'S/ 95',
    status: 'available',
    image: '/images/products/album-01.jpg',
    featured: true,
  },
  {
    id: 'album-02',
    name: 'Karma',
    group: 'Stray Kids',
    artist: 'Stray Kids',
    category: 'Álbum',
    version: 'Photobook Edition',
    price: 'S/ 120',
    status: 'low_stock',
    image: '/images/products/album-02.jpg',
  },
  {
    id: 'album-03',
    name: 'Born Pink',
    group: 'BLACKPINK',
    artist: 'BLACKPINK',
    category: 'Pack',
    version: 'Special Package',
    price: 'S/ 150',
    status: 'available',
    image: '/images/products/album-03.jpg',
  },
  {
    id: 'album-04',
    name: 'Wings',
    group: 'BTS',
    artist: 'BTS',
    category: 'Álbum',
    version: 'Version 2',
    price: 'Consultar',
    status: 'low_stock',
    image: '/images/products/album-04.jpg',
  },
  {
    id: 'album-05',
    name: 'This That',
    group: 'Stray Kids',
    artist: 'Stray Kids',
    category: 'Álbum',
    version: 'Limited Edition',
    price: 'Consultar',
    status: 'available',
    image: '/images/products/album-05.jpg',
  },
  {
    id: 'album-06',
    name: 'Deadline',
    group: 'BLACKPINK',
    artist: 'BLACKPINK',
    category: 'Álbum',
    version: 'Photobook Ver.',
    price: 'Consultar',
    status: 'sold_out',
    image: '/images/products/album-06.jpg',
  },
];

export const productStatusLabel: Record<ProductStatus, string> = {
  available: 'Disponible',
  low_stock: 'Últimas unidades',
  sold_out: 'Agotado',
};
