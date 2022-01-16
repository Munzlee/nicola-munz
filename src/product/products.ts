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

export const InduvidualSolution: Array<IProduct> = [
  {
    title: "Web Lösung",
    priceMin: 0,
    priceMax: 0,
    priceAltText: "Preis auf Anfrage",
    lines: ["Ob Webshop oder sonnstige Weblösung, es wird nach Ihren Bedürfnisse entwickelt."],
  },
  {
    title: "Mobile-App Lösung",
    priceMin: 0,
    priceMax: 0,
    priceAltText: "Preis auf Anfrage",
    lines:  ["Mobile App oder Game, Client spezifisch oder Client-Server wir finden eine Lösung. "],
  },
  {
    title: "App Lösung",
    priceMin: 0,
    priceMax: 0,
    priceAltText: "Preis auf Anfrage",
    lines:  ["Einen iterativer Arbeitsprozess als PC App zu automatisieren kann Ihnen viel Zeit zurück geben."],
  },
];

export interface IProduct {
  title: string;
  priceMin: number;
  priceMax: number;
  priceAltText: string;
  lines: string[];
}
