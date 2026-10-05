import { site } from "./site";

export function waUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage = `Hi ${site.name}! I would like to book a taxi in Goa.`;

export function waBookPrefix() {
  return `Hi ${site.name}!`;
}
