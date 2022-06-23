import React from "react";
import coding from "../pics/2J3NXDF.png"
export function DesignedAppSlide(props: {}) {
    const s = require("./DesignedAppSlide.module.css")
    return <div className={s.induvidual_solution}>
        <h1>Induvidual Entwicklungen</h1>
        <div className={s.inner}>
            <div className={s.desc}>
                <p className={s.short}>Ob <b>Web Lösung</b>, <b>Mobile-App Lösung</b> oder einfach ein <b>Computer-Programm</b>, hier wird es kosteneffizient und qualitativ hoch entwickelt.</p>
                <h3>Web Lösung</h3>
                <p>Ob Webshop oder sonnstige Weblösung, es wird nach Ihren Bedürfnisse entwickelt.</p>
                <h3>Mobile-App Lösung</h3>
                <p>Mobile App oder Game, Client spezifisch oder Client-Server wir finden eine Lösung.</p>
                <h3>Computer-Programm</h3>
                <p>Einen iterativer Arbeitsprozess als PC App zu automatisieren kann Ihnen viel Zeit zurück geben.</p>
            </div><div className={s.image}><img alt="Software Architecture" src={coding} /></div>
        </div>
    </div>


}