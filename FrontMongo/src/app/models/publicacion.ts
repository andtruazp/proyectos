export class Publicacion{
    _id?:string;
    usuario: string;
    fechaPub?: Date;
    contenido: string;
    validado?: boolean;
    categoria: string;
    comentario?: Array<any>;

    constructor(usuario: string, contenido: string, categoria:string){
        this.usuario = usuario;
        this.contenido = contenido;
        this.categoria = categoria;
    }
}