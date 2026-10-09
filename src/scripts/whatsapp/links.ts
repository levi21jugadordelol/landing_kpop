import { business } from '../../data/business';
import type { Product } from '../../data/products';

export function buildWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encodedMessage}`;
}

export function buildGeneralWhatsAppLink() {
  return buildWhatsAppLink(
    `Hola, quiero consultar sobre ${business.niche}.`
  );
}

export function buildProductWhatsAppLink(product: Product) {
  return buildWhatsAppLink(
    `Hola, quiero consultar por el producto: ${product.artist} - ${product.name}.`
  );
}

export function buildGroupWhatsAppLink(groupName: string) {
  return buildWhatsAppLink(
    `Hola, quiero consultar qué álbumes o photocards tienen disponibles de ${groupName}.`
  );
}

export function buildMoreGroupsWhatsAppLink() {
  return buildWhatsAppLink(
    'Hola, quiero consultar si trabajan otros grupos K-pop además de los que aparecen en la página.'
  );
}

export function buildMoreProductsWhatsAppLink() {
  return buildWhatsAppLink(
    'Hola, quiero consultar más álbumes, versiones o photocards disponibles.'
  );
}
