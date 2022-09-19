import { appState } from "../AppState.js";
import { apiPokesService } from "../Services/ApiPokesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawPokes() {
  let template = "";
  appState.ApiPokes.forEach((p) => (template += p.leftTemplate));
  setHTML("catchables", template);
}

export class ApiPokesController {
  constructor() {
    console.log("Hello from the constructor");
    this.getSpells();
    appState.on("ApiPokes", drawPokes);
  }

  async getSpells() {
    try {
      await apiPokesService.getSpells();
      console.log("Talking to the Service");
    } catch (error) {
      console.error("[ERROR]", error);
      Pop.error(error);
    }
  }

  async getPokeDetails(url) {
    try {
      await apiPokesService.getPokeDetails(url);
    } catch (error) {
      console.error("[ERROR]", error);
      Pop.error(error);
    }
  }
}
