export class Educacion {
    id?: number;
    lugar: string;
    curso: string;
    imagen: string;
    fecha: string;
    descripcion: string;

    constructor(lugar:string, curso:string, imagen: string, fecha: string, descripcion:string){
        this.imagen=imagen;
        this.lugar=lugar;
        this.curso=curso;
        this.descripcion=descripcion;
        this.fecha=fecha;
    }
}
