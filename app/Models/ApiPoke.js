export class ApiPoke {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  get leftTemplate() {
    return /*HTML*/ `
       <div class="selectable no-select rounded d-flex justify-content-between align-content-center pt-3" onclick="app.ApiPokesController.getPokeDetails('${this.url}')">
          <h6 class="ps-1">${this.name}</h6>
          <p class="mdi mdi-pokeball pe-1"></p>
        </div>
    `;
  }
}
