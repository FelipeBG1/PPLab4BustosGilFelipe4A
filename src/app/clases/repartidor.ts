export class Repartidor {
    dni : number;
    nombre : string;
    edad : number;
    capacidadTransporte : number;
    paisOrigen : string;
    unidadPropia : boolean;

    constructor(dni : number,nombre : string,  edad : number,  capacidadTransporte : number, paisOrigen : string, unidadPropia : boolean)
    {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.capacidadTransporte = capacidadTransporte;
        this.paisOrigen = paisOrigen;
        this.unidadPropia = unidadPropia;
    }
}
