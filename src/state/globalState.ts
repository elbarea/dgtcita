import { Action } from "redux";

interface GlobalState {
  link1: string;
}

export default GlobalState;

export const initialState: GlobalState = {
  link1: "Salto contenido",
};
