import ReactDOM from "react-dom";
import { MainMenuContextProvider } from './main-menu/MainMenuContextProvider';
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render((
  <MainMenuContextProvider>
    <App />
  </MainMenuContextProvider>
  ), app);
