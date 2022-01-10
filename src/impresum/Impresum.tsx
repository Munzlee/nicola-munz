import React from "react";

export function Impresum(props: {}) {
  const s = require("./impresumStyle.module.css");

  return (
    <div className={s.impresum}>
      <p>
        <strong>
          <i>Kontakt-Adresse</i>
        </strong>
      </p>
      <p>
        Nicola Munz Solutions
        <br />
        Nicola Alexander Munz
        <br />
        Burenweg 5<br />
        4127 Birsfelden
        <br />
        Schweiz
      </p>
      <p>
        E-Mail:
        <br />
        info@nicolamunz.ch
      </p>
      <br />
      <p>
        <strong>
          <i>Vertretungsberechtigte Person(en)</i>
        </strong>
      </p>
      Nicola Munz, Software Entwickler
      <br />
      <p>
        <strong>
          <i>Haftungsausschluss</i>
        </strong>
      </p>
      Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
      Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit
      der Informationen.<p></p>
      <p>
        Haftungsansprüche gegen den Autor wegen Schäden materieller oder
        immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
        Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
        Verbindung oder durch technische Störungen entstanden sind, werden
        ausgeschlossen.
      </p>
      <p>
        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich
        vor, Teile der Seiten oder das gesamte Angebot ohne besondere
        Ankündigung zu verändern, zu ergänzen, zu löschen oder die
        Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>
      <br />
      <p>
        <strong>
          <i>Haftungsausschluss für Links</i>
        </strong>
      </p>
      <p>
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
        Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
        Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
        erfolgen auf eigene Gefahr des jeweiligen Nutzers.
      </p>
      <br />
      <p>
        <strong>
          <i>Urheberrechte</i>
        </strong>
      </p>
      <p>
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
        anderen Dateien auf dieser Website, gehören ausschliesslich{" "}
        <strong>Nicola Alexander Munz</strong> oder den speziell genannten
        Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die
        schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
      </p>
      <br />
      Quelle:
      <a
        href="https://www.swissanwalt.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        SwissAnwalt
      </a>
    </div>
  );
}
