export class Comentario{
    _id?:string;
    usuario?: string;
    fechaPub?: Date;
    contenidoC: string;
    

    constructor( contenidoC: string){
        this.contenidoC = contenidoC;
    }
}