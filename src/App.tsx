import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, Reducer, Action } from "redux";
import GlobalState, { initialState } from "./state/globalState";

import Header from "./styledComponents/Header";
import Central from "./components/Central";
import Footer from "./styledComponents/Footer";

const reducer: Reducer<GlobalState,Action> = (state: GlobalState = initialState, action: Action) => {
  return state;
};
const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div id="contenedor">
        <Header />
        <Central />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
