import { Action } from "redux";

interface GlobalState {
  link1: string;
  place: string;
  type: string;
}

export default GlobalState;

export const initialState: GlobalState = {
  link1: "Salto contenido",
  place: "Sevilla",
  type: "CITA PREVIA PARA TRÁMITE DE CONDUCTORES / VEHÍCULOS",
};
