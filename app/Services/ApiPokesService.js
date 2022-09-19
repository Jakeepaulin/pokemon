import { appState } from "../AppState.js";
import { ApiPoke } from "../Models/ApiPoke.js";
import { PokeDetail } from "../Models/PokeDetail.js";
import { ApiServer } from "./AxiosService.js";

class ApiPokesService {
  async getPokeDetails(url) {
    const res = await ApiServer.get(url);
    appState.activePoke = new PokeDetail(res.data.results);
  }
  async getSpells() {
    const res = await ApiServer.get("api/v2/pokemon");
    console.log("You got some pokemon", res.data);
    appState.ApiPokes = res.data.results.map((p) => new ApiPoke(p));
  }
}

export const apiPokesService = new ApiPokesService();
