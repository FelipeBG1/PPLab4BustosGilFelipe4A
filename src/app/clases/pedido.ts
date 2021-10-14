export class Pedido {
    nombreCliente : string;
    mailCliente  : string;
    localidad : string;
    direccion : string;
    descripcion : string;
    precio : number;
    peso : number;
    estado : string;

    constructor(nombreCliente : string,mailCliente : string,  localidad : string,  direccion : string, descripcion : string, precio : number, peso : number, estado : string)
    {
        this.nombreCliente = nombreCliente;
        this.mailCliente = mailCliente;
        this.localidad = localidad;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.peso = peso;
        this.estado = estado;
    }

}
