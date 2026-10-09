export const croEvents = {
  whatsappGeneralClick: 'whatsapp_general_click',
  whatsappProductClick: 'whatsapp_product_click',
  catalogProductView: 'catalog_product_view',
  heroCtaClick: 'hero_cta_click',
  finalCtaClick: 'final_cta_click',
} as const;

export type CroEventName = (typeof croEvents)[keyof typeof croEvents];

export function trackCroEvent(eventName: CroEventName, payload = {}) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('landing-cro:event', {
      detail: {
        eventName,
        payload,
      },
    })
  );
}
