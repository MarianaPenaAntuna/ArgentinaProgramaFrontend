export class Experiencia {
    id?: number;
    lugar: string;
    puesto: string;
    imagen: string;
    fecha: string;
    descripcion: string;

    constructor(lugar:string, puesto:string, imagen: string, fecha: string, descripcion:string){
        this.imagen=imagen;
        this.lugar=lugar;
        this.puesto=puesto;
        this.descripcion=descripcion;
        this.fecha=fecha;
    }
}

