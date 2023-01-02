export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    imagen: string;
    descripcion: string;
    frase: string;

    constructor(nombre: string, apellido: string, imagen:string, descripcion:string, frase:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.frase=frase;
    }
}
