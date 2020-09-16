import React from "react";
import help from "../assets/img/system_help.png";

function Central(props: any) {
  return (
    <div>
      <div className={props.classes.subHeader}>
        <div className={props.classes.shText}>
          <h1 className={props.classes.font}>{props.type}</h1>
        </div>
        <div className={props.classes.help}>
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
        <div className={props.classes.fieldset}>
          <fieldset className={props.classes.none}>
            <div className={props.classes.subtitles}>{props.place}</div>
            <div className={props.classes.subtitles}>Datos del interesado</div>
            <div className={props.classes.box}>
              <div className={props.classes.campos}>
                <strong>
                  <label>NIF/NIE (*)</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Nombre</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Primer apellido</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Segundo apellido</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Correo electrónico (*)</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
            </div>
            <div className={props.classes.subtitles}>
              Datos del representante
            </div>
            <div className={props.classes.box}>
              <div className={props.classes.campos}>
                <strong>
                  <label>NIF/NIE</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Nombre</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Primer apellido</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Segundo apellido</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Correo electrónico</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
            </div>
            <div className={props.classes.subtitles}>Otros datos</div>
            <div className={props.classes.box}>
              <div className={props.classes.campos}>
                <strong>
                  <label>Tel. contacto</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>Nº expediente</label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
              <div className={props.classes.campos}>
                <strong>
                  <label>
                    Matrícula o últimos 6<br />
                    dígitos del bastidor
                  </label>
                </strong>
                <input type="text" className={props.classes.field} />
              </div>
            </div>
          </fieldset>
        </div>

        <div className={props.classes.buttonGroup}>
          <div>
            <input
              type="submit"
              title="Solicitar"
              className={props.classes.button}
              value="Solicitar"
            />
          </div>
          <div>
            <input
              type="reset"
              title="Limpiar"
              className={props.classes.button}
              value="Limpiar"
            />
          </div>
          <div>
            <input
              type="submit"
              title="Cancelar"
              className={props.classes.button}
              value="Cancelar"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Central;
