import React from "react";
import u from "../pics/profile.jpg";
import MobileCard from "./card/mobile/MobileCard";
import { ITheme } from "./card/Theme";

const themesArray: ITheme[] = [
  {
    baseTitle: "Berufserfahrung",
    title:
      "ICT Applikationsentwickler GIA Informatik AG, Oftringen. Zeitrahmen: 12/2018 – Heute	",
    listpoint: [
      "Umsetzung und Betrieb von Backend-Services in Micro-Service Architekturen Planung",
      "Umsetzung und Betrieb von Frontend Web Applikationen mit SPA Frameworks ",
      "Design Aufbau und Operations von GraphQL APls  DevOps (Continous lntegration and Deployment)",
      "Automatisierung und Optimierung von Business Prozessen ",
    ],
  },
  {
    baseTitle: "Berufserfahrung",
    title:
      "Software-Entwickler und Supporter MFA Informatik AG, Niederdorf Zeitrahmen:	08/2018 – 12/2018",
    listpoint: [
      "First-level Support für die Online-Buchungsplattform SPORTLOOP für Sportdienstleistungsanbieter und -Endkunden.",
      "Entwicklung von einem Problem-Management Tool der Plattform SPORTLOOP",
      "Konzeptionierung und Planung neuer Funktionalität in SPORTLOOP",
    ],
  },
  {
    baseTitle: "Berufliche Ausbildung",
    title:
      "Praktikum als Applikationsentwickler SMC Computer AG, Wallisellen. Zeitrahmen:	08/2016 – 07/2018",
    listpoint: [
      "Betreuung und Support der ERP Software PROFFIX",
      "Programmierung von sämtlichen Schnittstellen(Individual Software) für KMU’s zu PROFFIX",
      "Programmierung eines eigenen Web API zu PROFFIX",
      "Datenbank-Reporting und Support",
    ],
  },
  {
    baseTitle: "Berufliche Ausbildung",
    title:
      "Ausbildung zum Applikationsentwickler IBZ Schweizer Schule für Technik und Management, Aarau. Zeitrahmen:	08/2014 – 07/2018",
    listpoint: [],
  },
  {
    baseTitle: "Berufliche Ausbildung",
    title:
      "Lehre als Informatikpraktiker Novaskill, Münchenstein BL. Zeitrahmen:	08/2012 – 07/2014",
    listpoint: [
      "Bereitstellung von PCs",
      "Wartung von Schulungssystemen",
      "Bereitstellung von Schulungsräumen mit Hilfe von Software-Verteilungssystemen",
      "Reparieren von PCs",
    ],
  },
  {
    baseTitle: "Kenntnisse",
    title: "Programmierkenntnisse",
    listpoint: [
      "C# sehr gut",
      "VB.Net sehr gut",
      "Javascript sehr gut",
      "Type Script sehr gut",
      "Java sehr gut",
      "PHP sehr gut",
      "MSSQL sehr gut",
      "mySQL sehr gut",
    ],
  },
  {
    baseTitle: "Kenntnisse",
    title: "Programmierframework- Kenntnisse",
    listpoint: [
      ".Net Core sehr gut",
      "ASP .Net Core sehr gut",
      " React sehr gut",
      "GraphQL -Apollo sehr gut",
      "Net Framework sehr gut",
      "GraphQL - Hot Chocolate sehr gut",
    ],
  },
  {
    baseTitle: "Sprachkenntnisse",
    title: "Sprachkenntnisse",
    listpoint: ["Deutsch			Muttersprache", "Englisch		2.Muttersprache"],
  },
  {
    baseTitle: "Führerschein",
    title: "Führerschein",
    listpoint: ["Kategorie B"],
  },
];

export function Profile(props: {
  slideTo: (index: number) => void;
  sliderId: number;
}) {
  return (
    <div className="profile">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <MobileCard themes={themesArray} imagePath={u} />
    </div>
  );
}
