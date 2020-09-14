import React from "react";
import "./App.css";
import help from "./assets/img/system_help.png";
import alta from "./assets/img/alta-vehiculo.png";
import pago from "./assets/img/pagodemultas.png";
import pago2 from "./assets/img/pagoydevoluciontasas.png";
import permiso from "./assets/img/permisoxpuntos.png";
import dot from "./assets/img/g.png"

function App() {
  return (
    <div id="contenedor" className="whole">
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
                <div
                  id=":0.targetLanguage"
                  className="goog-te-gadget-simple header1"
                >
                  <img
                    src={dot}
                    className="goog-te-gadget-icon header2"
                    alt=""
                  />
                  <span className="header3">
                    <a
                      aria-haspopup="true"
                      className="goog-te-menu-value"
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

      <div id="j_id11" className="central">
        <div id="j_id12" className="margenContenidos">
          <div id="j_id13" className="separacion10em"></div>
          <div id="j_id14">
            <div id="j_id23">
              <div id="j_id24" className="buscIntCab">
                <div id="j_id25" className="buscIntCabTexto">
                  <h1 id="j_id26" className="letraBlancaBold">
                    CITA PREVIA PARA TRÁMITE DE CONDUCTORES / VEHÍCULOS
                  </h1>
                </div>
                <div id="j_id28" className="buscIntCabTextoHelp">
                  <a
                    href="https://sedeapl.dgt.gob.es/NCIT_INTER/ayuda/index_es.html"
                    title="Ayuda en ventana nueva"
                    target="_blank"
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
                id="publicacionesForm"
                name="publicacionesForm"
                method="post"
                action="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso2.faces"
              >
                <input
                  type="hidden"
                  name="publicacionesForm"
                  value="publicacionesForm"
                />
                <div
                  id="publicacionesForm:content"
                  className="buscIntCamposEv2 buscIntCamposEvPub"
                >
                  <fieldset
                    id="publicacionesForm:j_id32"
                    className="buscIntCamposLinea"
                  >
                    <div
                      id="publicacionesForm:j_id36"
                      className="cuadroBlanco98por cuadroBlanco98porMain sinBorde"
                    >
                      <strong id="publicacionesForm:j_id37"> Sevilla</strong>
                      <div
                        id="publicacionesForm:j_id39"
                        className="saltobr"
                      ></div>
                    </div>
                    <div
                      id="publicacionesForm:j_id55"
                      className="cuadroBlanco98por cuadroBlanco98porMain sinBorde"
                    >
                      <strong id="publicacionesForm:j_id56">
                        Datos del interesado
                      </strong>
                    </div>
                    <div
                      id="publicacionesForm:j_id58"
                      className="cuadroBlanco98por cuadroBlanco98porPaso2"
                    >
                      <div
                        id="publicacionesForm:j_id59"
                        className="campoNombre"
                      >
                        <strong id="publicacionesForm:j_id60">
                          <label>NIF/NIE (*)</label>
                        </strong>
                        <input
                          id="publicacionesForm:NIFNIERDO"
                          type="text"
                          name="publicacionesForm:NIFNIERDO"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id65"
                        className="separacion1em"
                      ></div>
                      <div
                        id="publicacionesForm:j_id66"
                        className="campoNombre"
                      >
                        <strong id="publicacionesForm:j_id67">
                          <label>Nombre</label>
                        </strong>
                        <input
                          id="publicacionesForm:nombreRDO1"
                          type="text"
                          name="publicacionesForm:nombreRDO1"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id72"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id73">
                          <label>Primer apellido</label>
                        </strong>
                        <input
                          id="publicacionesForm:ape1RDO1"
                          type="text"
                          name="publicacionesForm:ape1RDO1"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id78"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id79">
                          <label>Segundo apellido</label>
                        </strong>
                        <input
                          id="publicacionesForm:ape2RDO"
                          type="text"
                          name="publicacionesForm:ape2RDO"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>

                      <div
                        id="publicacionesForm:j_id95"
                        className="separacion1em"
                      ></div>
                      <div
                        id="publicacionesForm:j_id101"
                        className="campoApellidos"
                      >
                        <div
                          id="publicacionesForm:j_id102"
                          className="saltobr"
                        ></div>
                        <strong id="publicacionesForm:j_id103">
                          <label>Correo electrónico (*)</label>
                        </strong>
                        <div
                          id="publicacionesForm:j_id105"
                          className="saltobr"
                        ></div>
                        <input
                          id="publicacionesForm:emailRDO"
                          type="text"
                          name="publicacionesForm:emailRDO"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                    </div>
                    <div
                      id="publicacionesForm:j_id1958"
                      className="cuadroBlanco98por cuadroBlanco98porMain sinBorde"
                    >
                      <strong id="publicacionesForm:j_id1959">
                        Datos del representante
                      </strong>
                    </div>
                    <div
                      id="publicacionesForm:j_id1961"
                      className="cuadroBlanco98por cuadroBlanco98porPaso2"
                    >
                      <div
                        id="publicacionesForm:j_id1962"
                        className="campoNombre"
                      >
                        <strong id="publicacionesForm:j_id1963">
                          <label>NIF/NIE</label>
                        </strong>
                        <input
                          id="publicacionesForm:NIFNIERNTE"
                          type="text"
                          name="publicacionesForm:NIFNIERNTE"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id1969"
                        className="separacion1em"
                      ></div>
                      <div
                        id="publicacionesForm:j_id1970"
                        className="campoNombre"
                      >
                        <strong id="publicacionesForm:j_id1971">
                          <label>Nombre</label>
                        </strong>
                        <input
                          id="publicacionesForm:nombreRNTE"
                          type="text"
                          name="publicacionesForm:nombreRNTE"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id1977"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id1978">
                          <label>Primer apellido</label>
                        </strong>
                        <input
                          id="publicacionesForm:ape1RNTE"
                          type="text"
                          name="publicacionesForm:ape1RNTE"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id1984"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id1985">
                          <label>Segundo apellido</label>
                        </strong>
                        <input
                          id="publicacionesForm:ape2RNTE"
                          type="text"
                          name="publicacionesForm:ape2RNTE"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id1992"
                        className="separacion1em"
                      ></div>
                      <div
                        id="publicacionesForm:j_id1998"
                        className="campoApellidos"
                      >
                        <div
                          id="publicacionesForm:j_id1999"
                          className="saltobr"
                        ></div>
                        <strong id="publicacionesForm:j_id2000">
                          <label>Correo electrónico</label>
                        </strong>
                        <div
                          id="publicacionesForm:j_id2002"
                          className="saltobr"
                        ></div>
                        <input
                          id="publicacionesForm:emailRNTE"
                          type="text"
                          name="publicacionesForm:emailRNTE"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                    </div>
                    <div
                      id="publicacionesForm:j_id2003"
                      className="cuadroBlanco98por cuadroBlanco98porMain sinBorde"
                    >
                      <strong id="publicacionesForm:j_id2004">
                        Otros datos
                      </strong>
                    </div>
                    <div
                      id="publicacionesForm:j_id2006"
                      className="cuadroBlanco98por cuadroBlanco98porPaso2 margin"
                    >
                      <div
                        id="publicacionesForm:j_id2007"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id2008">
                          <label>Tel. contacto</label>
                        </strong>
                        <input
                          id="publicacionesForm:telcto"
                          type="text"
                          name="publicacionesForm:telcto"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id2010"
                        className="campoApellidos"
                      >
                        <strong id="publicacionesForm:j_id2011">
                          <label>Nº expediente</label>
                        </strong>
                        <input
                          id="publicacionesForm:expediente"
                          type="text"
                          name="publicacionesForm:expediente"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                      <div
                        id="publicacionesForm:j_id2013"
                        className="campoNombre"
                      >
                        <strong id="publicacionesForm:j_id2014">
                          <label>
                            Matrícula o últimos 6<br />
                            dígitos del bastidor
                          </label>
                        </strong>
                        <input
                          id="publicacionesForm:matricula"
                          type="text"
                          name="publicacionesForm:matricula"
                          className="buscIntCamposEvProvInput2"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div
                  id="publicacionesForm:j_id2016"
                  className="buscIntCamposGral"
                >
                  <div
                    id="publicacionesForm:j_id2017"
                    className="buscIntCamposBuscar"
                  >
                    <div
                      id="publicacionesForm:j_id2018"
                      className="btnContinuarFomulario               "
                    >
                      <input
                        type="submit"
                        name="publicacionesForm:j_id2019"
                        value="Solicitar"
                        title="Solicitar"
                        className="botonSINimgen"
                      />
                    </div>
                    <div
                      id="publicacionesForm:j_id2020"
                      className="btnContinuarFomulario"
                    >
                      <input
                        type="reset"
                        name="publicacionesForm:j_id2021"
                        value="Limpiar"
                        title="Limpiar"
                        className="botonSINimgen"
                      />
                    </div>
                    <div
                      id="publicacionesForm:j_id2022"
                      className="btnContinuarFomulario"
                    >
                      <input
                        type="submit"
                        name="publicacionesForm:j_id2023"
                        value="Cancelar"
                        title="Cancelar"
                        className="botonSINimgen"
                      />
                    </div>
                  </div>
                  <div
                    id="publicacionesForm:j_id2024"
                    className="separacion7em"
                  ></div>
                </div>
                <div
                  id="publicacionesForm:j_id2036"
                  className="separacion5em"
                ></div>
                <div id="publicacionesForm:mensajeserror"></div>
                <input type="hidden" name="javax.faces.ViewState" />
              </form>
              <div id="j_id2038" className="separacion5em"></div>
            </div>
            <div id="myCarouselInferior" className="carousel">
            <a
                id="anguloIzquierdo"
                className="left carousel-control"
                href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
                data-slide="prev"
              >
                <svg
                  className="svg-inline--fa fa-angle-left fa-w-8"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa"
                  data-icon="angle-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
              </a>
              <div id="j_id2039:0:j_id2040" className="carousel-inner flex">
                <div
                  id="j_id2039:0:j_id2041"
                  className="col-md-3 col-sm-6 col-xs-12"
                >
                  <div id="j_id2039:0:j_id2042" className="small-box">
                    <div id="j_id2039:0:j_id2043" className="procedure-image">
                      <img src={alta} alt="Alta de vehículo." />
                    </div>
                    <div id="j_id2039:0:j_id2045" className="procedure-link">
                      <a
                        href="https://sede.dgt.gob.es/es/vehiculos/altas-bajas-y-rehabilitacion-de-vehiculos/index.shtml"
                        target="_blank"
                        title="Acceder a Alta de vehículo."
                        className="link"
                      >
                        Alta de vehículo.
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="j_id2039:1:j_id2041"
                  className="col-md-3 col-sm-6 col-xs-12"
                >
                  <div id="j_id2039:1:j_id2042" className="small-box">
                    <div id="j_id2039:1:j_id2043" className="procedure-image">
                      <img src={pago} alt="Pago de multas." />
                    </div>
                    <div id="j_id2039:1:j_id2045" className="procedure-link">
                      <a
                        href="https://sede.dgt.gob.es/es/multas/paga-tu-multa/index.shtml"
                        target="_blank"
                        title="Acceder a Pago de multas."
                        className="link"
                      >
                        Pago de multas.
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="j_id2039:2:j_id2041"
                  className="col-md-3 col-sm-6 col-xs-12"
                >
                  <div id="j_id2039:2:j_id2042" className="small-box">
                    <div id="j_id2039:2:j_id2043" className="procedure-image">
                      <img src={pago2} alt="Pago y devolución de tasas." />
                    </div>
                    <div id="j_id2039:2:j_id2045" className="procedure-link">
                      <a
                        href="https://sede.dgt.gob.es/es/otros-tramites/pago-de-tasas/"
                        target="_blank"
                        title="Acceder a Pago y devolución de tasas."
                        className="link"
                      >
                        Pago y devolución de tasas.
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="j_id2039:3:j_id2041"
                  className="col-md-3 col-sm-6 col-xs-12"
                >
                  <div id="j_id2039:3:j_id2042" className="small-box">
                    <div id="j_id2039:3:j_id2043" className="procedure-image">
                      <img src={permiso} alt="Permiso por puntos." />
                    </div>
                    <div id="j_id2039:3:j_id2045" className="procedure-link">
                      <a
                        href="https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/index.shtml"
                        target="_blank"
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
                id="anguloDerecho"
                className="right carousel-control"
                href="https://sedeapl.dgt.gob.es:7443/WEB_NCIT_CONSULTA/solicitarCitaPaso1.faces#myCarouselInferior"
                data-slide="next"
              >
                <svg
                  className="svg-inline--fa fa-angle-right fa-w-8"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="j_id2050" className="separacion5em"></div>
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
