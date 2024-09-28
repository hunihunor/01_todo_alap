import Sor from "./Sor.js";

export default class TablazatMegjelenit {
    #lista = []
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.empty()

    this.TablazatKiir();
    this.tbodyElem = $('.sorok')

    this.sorMegjelenit()

  }

  sorMegjelenit(){
    this.#lista.forEach((elem, index) => {
        elem.id = index
        new Sor(elem,this.tbodyElem);
    });
  }

  TablazatKiir() {
    this.szuloElem.append(`<table class="table table-stripped">
            <thead>
                <tr>
                    <th>Tevékenység</th>
                    <th>Határidő</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class = "sorok">

            </tbody>
            </table>`);
  }
}
