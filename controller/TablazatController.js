import TablazatModel from "../model/TablazatModel.js";
import TablazatMegjelenit from "../view/tablazatMegjelenit.js";

export default class TablazatController{

    constructor(){
        //példányosítja a view-t és modelt-t

        this.tModel = new TablazatModel()
        const lista = this.tModel.getList()
        this.tView = new TablazatMegjelenit(lista, $('.tarolo'))
        this.torlesEsemeny()
    }

    torlesEsemeny(){
        $(window).on("torles", (event)=>{
            console.log(event.detail);
            let index = event.detail.id
            this.tModel.torles(index)
            const lista = this.tModel.getList()
            this.tMegjelenit = new TablazatMegjelenit(lista, $('.tarolo'))
        })

    }

}