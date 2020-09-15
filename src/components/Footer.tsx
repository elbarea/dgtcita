import React from "react";

function Footer(props: any) {
  return (
    <div className={props.classes.pie}>
      <a href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/avisoLegal_es.html">
        Aviso legal
      </a>
      |
      <a href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/accesibilidad_es.html">
        Accesibilidad
      </a>
    </div>
  );
}

export default Footer;
