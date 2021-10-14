import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss']
})
export class CambiarEstadoComponent implements OnInit {

  @Input () pedido : any = "";
  estado : string = "";

  constructor(private firestore : AngularFirestore, private bd : ApiService) { }

  ngOnInit(): void {
  }

  cambiarEstado(estado : number)
  {
    if(estado == 1)
    {
      this.pedido.estado = "Entregado";
    }
    else
    {
      this.pedido.estado = "Rechazado";
    }

    this.bd.modificar(this.pedido,this.pedido.id);
  }

}
