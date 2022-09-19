import { ActivePokesController } from "./Controllers/ActivePokesController.js";
import { ApiPokesController } from "./Controllers/ApiPokesController.js";

class App {
  apiPokesController = new ApiPokesController();
  activePokesController = new ActivePokesController();
}

window["app"] = new App();
