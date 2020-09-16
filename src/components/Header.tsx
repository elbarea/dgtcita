import React from "react";
import dot from "../assets/img/g.png";

function Header(props: any) {
  return (
    <div className={props.classes.cabecera}>
      <div className={props.classes.superior}>
        <a
          href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#contenidos"
          title="Salto a contenido"
          className={props.classes.saltoContenido}
        >
          {props.link1}
        </a>
      </div>
      <div className={props.classes.central}>
        <div className={props.classes.cabLogo}></div>
        <div className={props.classes.alignR}>
          <div className={props.classes.traductor}>
            <img src={dot} className={props.classes.img} alt="" />
            <span>Seleccionar idioma</span>
            <span className={props.classes.triangle}>▼</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
