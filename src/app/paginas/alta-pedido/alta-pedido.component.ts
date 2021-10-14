import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.scss']
})
export class AltaPedidoComponent implements OnInit {

  @Output() pedidoEvent = new EventEmitter<Pedido>();
  public grupoControles !: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
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

  enviarPedido()
  {
    let pedido = new Pedido(this.grupoControles.get("nombreCliente")?.value,this.grupoControles.get("mail")?.value,this.grupoControles.get("localidad")?.value,this.grupoControles.get("direccion")?.value,
                            this.grupoControles.get("descripcion")?.value,this.grupoControles.get("precio")?.value,this.grupoControles.get("peso")?.value,this.grupoControles.get("estado")?.value);

    this.pedidoEvent.emit(pedido);
  }
}
