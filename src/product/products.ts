export const WebProducts: Array<IProduct> = [
  {
    title: "One Page",
    priceMin: 1200,
    priceMax: 1900,
    priceAltText: "Preis auf Anfrage",
    lines: [
      "Adress- und Kontaktdaten",
      "Über uns",
      "Slideshow",
      "Dienstleistungen",
      "Kontaktformular",
      "Lageplan Google Maps",
      "Socialmedias Links",
      "Datenschutzerklärung",
      "Impressum",
    ],
  },
  {
    title: "Multi Page",
    priceMin: 1900,
    priceMax: 3000,
    priceAltText: "Preis auf Anfrage",
    lines: [
      "Adress- und Kontaktdaten",
      "Über uns",
      "Slideshow",
      "Dienstleistungen",
      "Kontaktformular",
      "Lageplan Google Maps",
      "Socialmedias Links",
      "Datenschutzerklärung",
      "Impressum",
      "Bis zu 10 Seiten",
      "Kleine Webshops möglich(50 Produkte)",
    ],
  },
];

export interface IProduct {
  title: string;
  priceMin: number;
  priceMax: number;
  priceAltText: string;
  lines: string[];
}
