import React from "react";
import "../App.css";
import help from "../assets/img/system_help.png";
import alta from "../assets/img/alta-vehiculo.png";
import pago from "../assets/img/pagodemultas.png";
import pago2 from "../assets/img/pagoydevoluciontasas.png";
import permiso from "../assets/img/permisoxpuntos.png";

function Central() {
  return (
    <div>
      <div>
        <div className="buscIntCab">
          <div className="buscIntCabTexto">
            <h1 className="letraBlancaBold">
              CITA PREVIA PARA TRÁMITE DE CONDUCTORES / VEHÍCULOS
            </h1>
          </div>
          <div className="buscIntCabTextoHelp">
            <a
              href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/index_es.html"
              title="Ayuda en ventana nueva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={help}
                alt="Ayuda en ventana nueva"
                title="Ayuda en ventana nueva"
              />
            </a>
          </div>
        </div>
        <form
          method="post"
          action="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso2.faces"
        >
          <div className="buscIntCamposEv2 buscIntCamposEvPub">
            <fieldset className="buscIntCamposLinea">
              <div className="cuadroBlanco98por cuadroBlanco98porMain sinBorde">
                <strong> Sevilla</strong>
                <div className="saltobr"></div>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porMain sinBorde">
                <strong>Datos del interesado</strong>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porPaso2">
                <div className="campoNombre">
                  <strong>
                    <label>NIF/NIE (*)</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoNombre">
                  <strong>
                    <label>Nombre</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <strong>
                    <label>Primer apellido</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <strong>
                    <label>Segundo apellido</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <div className="saltobr"></div>
                  <strong>
                    <label>Correo electrónico (*)</label>
                  </strong>
                  <div className="saltobr"></div>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porMain sinBorde">
                <strong>Datos del representante</strong>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porPaso2">
                <div className="campoNombre">
                  <strong>
                    <label>NIF/NIE</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoNombre">
                  <strong>
                    <label>Nombre</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <strong>
                    <label>Primer apellido</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <strong>
                    <label>Segundo apellido</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <div className="saltobr"></div>
                  <strong>
                    <label>Correo electrónico</label>
                  </strong>
                  <div className="saltobr"></div>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porMain sinBorde">
                <strong>Otros datos</strong>
              </div>
              <div className="cuadroBlanco98por cuadroBlanco98porPaso2 margin">
                <div className="campoApellidos">
                  <strong>
                    <label>Tel. contacto</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoApellidos">
                  <strong>
                    <label>Nº expediente</label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
                <div className="campoNombre">
                  <strong>
                    <label>
                      Matrícula o últimos 6<br />
                      dígitos del bastidor
                    </label>
                  </strong>
                  <input type="text" className="buscIntCamposEvProvInput2" />
                </div>
              </div>
            </fieldset>
          </div>

          <div className="buscIntCamposBuscar">
            <div>
              <input
                type="submit"
                title="Solicitar"
                className="botonSINimgen"
                value="Solicitar"
              />
            </div>
            <div>
              <input
                type="reset"
                title="Limpiar"
                className="botonSINimgen"
                value="Limpiar"
              />
            </div>
            <div>
              <input
                type="submit"
                title="Cancelar"
                className="botonSINimgen"
                value="Cancelar"
              />
            </div>
          </div>

          <div className="separacion5em"></div>
        </form>
      </div>
      <div className="carousel">
        <a
          className="left carousel-control"
          href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
          data-slide="prev"
        >
          <svg viewBox="0 0 256 512">
            <path
              fill="currentColor"
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            ></path>
          </svg>
        </a>
        <div className="carousel-inner flex">
          <div>
            <div className="small-box">
              <div className="procedure-image">
                <img src={alta} alt="Alta de vehículo." />
              </div>
              <div className="procedure-link">
                <a
                  href="https://sede.dgt.gob.es/es/vehiculos/altas-bajas-y-rehabilitacion-de-vehiculos/index.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Acceder a Alta de vehículo."
                  className="link"
                >
                  Alta de vehículo.
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="small-box">
              <div className="procedure-image">
                <img src={pago} alt="Pago de multas." />
              </div>
              <div className="procedure-link">
                <a
                  href="https://sede.dgt.gob.es/es/multas/paga-tu-multa/index.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Acceder a Pago de multas."
                  className="link"
                >
                  Pago de multas.
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="small-box">
              <div className="procedure-image">
                <img src={pago2} alt="Pago y devolución de tasas." />
              </div>
              <div className="procedure-link">
                <a
                  href="https://sede.dgt.gob.es/es/otros-tramites/pago-de-tasas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Acceder a Pago y devolución de tasas."
                  className="link"
                >
                  Pago y devolución de tasas.
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="small-box">
              <div className="procedure-image">
                <img src={permiso} alt="Permiso por puntos." />
              </div>
              <div className="procedure-link">
                <a
                  href="https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/index.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Acceder a Permiso por puntos."
                  className="link"
                >
                  Permiso por puntos.
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="right carousel-control"
          href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
          data-slide="next"
        >
          <svg viewBox="0 0 256 512">
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Central;
