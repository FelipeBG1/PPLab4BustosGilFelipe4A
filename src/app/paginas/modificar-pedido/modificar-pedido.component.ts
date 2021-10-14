import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.scss']
})
export class ModificarPedidoComponent implements OnInit {

  @Input () set pedidoAModificar(value : any)
  {
    this.cargarDatos(value);
  }

  id : any = "";

  agregado : string = "";
  public grupoControles !: FormGroup;
  constructor(private fb : FormBuilder,private firestore : AngularFirestore, private bd : ApiService) {
    this.grupoControles = this.fb.group({
      'nombreCliente' : ['',Validators.required],
      'mail' : ['',Validators.required],
      'localidad' : ['',Validators.required],
      'direccion' : ['',Validators.required],
      'descripcion' : ['',[Validators.required, Validators.maxLength(100)]],
      'precio' : ['',Validators.required],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
      'estado' : ['',Validators.required]
    });
   }

  ngOnInit(): void {
  
  }

  modificarPedido()
  {
    let pedido = new Pedido(this.grupoControles.get("nombreCliente")?.value,this.grupoControles.get("mail")?.value,this.grupoControles.get("localidad")?.value,this.grupoControles.get("direccion")?.value,
                            this.grupoControles.get("descripcion")?.value,this.grupoControles.get("precio")?.value,this.grupoControles.get("peso")?.value,this.grupoControles.get("estado")?.value);

    this.modificarPedidoBD({...pedido}, this.id).then((response : any) => {
      console.log("pedido registrado");
      this.agregado = "Se modifico el pedido";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    })
    .catch((response : any) => {
      console.log(response);
      this.agregado = "No se pudo modificar el pedido";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    });
  }

  agregarPedidoBD(pedido : Pedido)
  {
    return this.firestore.collection("pedidos").add(pedido);
  }

  modificarPedidoBD(pedido : Pedido, id : any)
  {
    return this.bd.modificar(pedido,id);
  }

  cargarDatos(value : any)
  {
    this.grupoControles.get('nombreCliente')?.setValue(value.nombreCliente);
    this.grupoControles.get('mail')?.setValue(value.mailCliente);
    this.grupoControles.get('localidad')?.setValue(value.localidad);
    this.grupoControles.get('direccion')?.setValue(value.direccion);
    this.grupoControles.get('descripcion')?.setValue(value.descripcion);
    this.grupoControles.get('precio')?.setValue(value.precio);
    this.grupoControles.get('peso')?.setValue(value.peso);
    this.grupoControles.get('estado')?.setValue(value.estado);

    this.id = value.id;
  }
}

