import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from 'src/app/servicios/api.service'; 

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  @Input () pedido : any = "";
  pedidoEnviar : any = ""; 

  agregado : string = "";
  pedidos : any = "";
  constructor(private firestore : AngularFirestore,private bd : ApiService) {
    this.bd.traerPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
   }

  ngOnInit(): void {
  }

  agregarPedidoBD(pedido : Pedido)
  {
    return this.firestore.collection("pedidos").add(pedido);
  }

  recibirPedido($event : Pedido)
  {
    this.pedido = $event;
    console.log(this.pedido);
    this.agregarPedidoBD({...this.pedido}).then((response : any) => {
      console.log("pedido registrado");
      this.agregado = "Se agrego el pedido";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    })
    .catch((response : any) => {
      console.log(response);
      this.agregado = "No se pudo agregar el pedido";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    });
  }

  enviar(pedido : Pedido)
  {
    //let pedidoEnviado : Pedido = new Pedido(pedido.nombreCliente,pedido.mailCliente,pedido.localidad, pedido.direccion,pedido.descripcion,pedido.precio,pedido.peso,pedido.estado);
    this.pedidoEnviar = pedido;
    console.log(pedido);
  }
}
