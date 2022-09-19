import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function drawActivePoke() {
  if (appState.activePoke == null) {
    return;
  }
  setHTML("selected-pokemon", appState.activePoke.mainTemplate);
}

export class ActivePokesController {
  constructor() {
    // @ts-ignore
    appState.on("activePoke", drawActivePoke);
  }
}
