import React from "react";
import alta from "../assets/img/alta-vehiculo.png";
import pago from "../assets/img/pagodemultas.png";
import pago2 from "../assets/img/pagoydevoluciontasas.png";
import permiso from "../assets/img/permisoxpuntos.png";

function Carousel(props: any) {
  return (
    <div className={props.classes.carousel}>
      <a
        className={props.classes.control}
        href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
      >
        <svg viewBox="0 0 256 512">
          <path
            fill="currentColor"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          ></path>
        </svg>
      </a>
      <div className={props.classes.inner}>
        <div>
          <div className={props.classes.sBox}>
            <img
              src={alta}
              alt="Alta de vehículo."
              className={props.classes.image}
            />
            <div>
              <a
                href="https://sede.dgt.gob.es/es/vehiculos/altas-bajas-y-rehabilitacion-de-vehiculos/index.shtml"
                target="_blank"
                rel="noopener noreferrer"
                title="Acceder a Alta de vehículo."
                className={props.classes.link}
              >
                Alta de vehículo.
              </a>
            </div>
          </div>
        </div>

        <div className={props.classes.sBox}>
          <img
            src={pago}
            alt="Pago de multas."
            className={props.classes.image}
          />
          <div>
            <a
              href="https://sede.dgt.gob.es/es/multas/paga-tu-multa/index.shtml"
              target="_blank"
              rel="noopener noreferrer"
              title="Acceder a Pago de multas."
              className={props.classes.link}
            >
              Pago de multas.
            </a>
          </div>
        </div>

        <div>
          <div className={props.classes.sBox}>
            <img
              src={pago2}
              alt="Pago y devolución de tasas."
              className={props.classes.image}
            />
            <div>
              <a
                href="https://sede.dgt.gob.es/es/otros-tramites/pago-de-tasas/"
                target="_blank"
                rel="noopener noreferrer"
                title="Acceder a Pago y devolución de tasas."
                className={props.classes.link}
              >
                Pago y devolución de tasas.
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className={props.classes.sBox}>
            <img
              src={permiso}
              alt="Permiso por puntos."
              className={props.classes.image}
            />
            <div>
              <a
                href="https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/index.shtml"
                target="_blank"
                rel="noopener noreferrer"
                title="Acceder a Permiso por puntos."
                className={props.classes.link}
              >
                Permiso por puntos.
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        className={props.classes.control}
        href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
      >
        <svg viewBox="0 0 256 512">
          <path
            fill="currentColor"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default Carousel;
