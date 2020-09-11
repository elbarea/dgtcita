import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div>
      <div id="cabecera">
        <div id="j_id5" className="central central-borde">
          <a
            id="saltocontenido"
            href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#contenidos"
            title="Salto a contenido"
            className="saltoContenido"
          >
            Salto a contenido
          </a>
        </div>
        <div id="j_id7" className="central">
          <div id="j_id8" className="cabLogo"></div>
          <div id="j_id9" className="central-traducciones">
            <div id="google_translate_element">
              <div className="skiptranslate goog-te-gadget" dir="ltr">
                <div id=":0.targetLanguage" className="goog-te-gadget-simple header1">
                  <img
                    src="./Solicitar Cita Paso2_files/cleardot.gif"
                    className="goog-te-gadget-icon header2"
                    alt=""
                  />
                  <span className="header3">
                    <a
                      aria-haspopup="true"
                      className="goog-te-menu-value"
                      href="javascript:void(0)"
                    >
                      <span>Seleccionar idioma</span>
                      <img
                        src="./Solicitar Cita Paso2_files/cleardot.gif"
                        width="1"
                        height="1"
                        alt=""
                      />
                      <span className="header4">​</span>
                      <img
                        src="./Solicitar Cita Paso2_files/cleardot.gif"
                        width="1"
                        height="1"
                        alt=""
                      />
                      <span aria-hidden="true" className="header5">
                        ▼
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="j_id2051" className="pie">
        <div id="j_id2052" className="central">
          <a
            href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/avisoLegal_es.html"
            title="Aviso legal, en nueva ventana."
            target="_blank"
            className="colorBlack"
          >
            Aviso legal
          </a>
          |
          <a
            href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/accesibilidad_es.html"
            title="Accesibilidad, en nueva ventana."
            target="_blank"
            className="marginright10 colorBlack"
          >
            Accesibilidad
          </a>
        </div>
      </div>
  </div>
  );
}

export default App;
