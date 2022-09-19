export class PokeDetail {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
    this.sprites = data.sprites;
    this.height = data.height;
    this.weight = data.weight;
    this.id = data.id;
    this.type = data.type;
  }
  get mainTemplate() {
    return /*HTML*/ `
    <div class="card bg-secondary">
            <div class="card-body">
              <h3 class="text-center">${this.name}</h3>
              <img class="rounded" src="${this.sprites}" alt="" />
              <div class="d-flex justify-content-around my-3 justify-content-end">
                <kbd> Height : ${this.height}'</kbd>
                <kbd> Weight : ${this.weight} lbs</kbd>
                <kbd> Types : ${this.type}</kbd>
              </div>
              <div class="text-end pe-4">
                <button class="btn btn-outline-danger">Catch</button>
              </div>
            </div>
          </div>

    `;
  }
}
