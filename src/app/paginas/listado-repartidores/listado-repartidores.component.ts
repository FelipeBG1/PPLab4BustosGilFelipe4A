import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.scss']
})
export class ListadoRepartidoresComponent implements OnInit {

  @Output() repartidorEvent = new EventEmitter<Repartidor>();
  
  repartidores : any = "";
  constructor(private bd : ApiService) {
    this.bd.traerRepartidores().subscribe(repartidores => {
      this.repartidores = repartidores;
    
    });
   }

  ngOnInit(): void {
  }

  enviarRepartidor(repartidor : Repartidor)
  {
    this.repartidorEvent.emit(repartidor);
    
  }
}
