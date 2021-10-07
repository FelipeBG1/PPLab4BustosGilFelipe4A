import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisEvent = new EventEmitter<any>();

  paises : any = [];
  constructor(private api : ApiService) {
    this.cargarTabla();
   }

  ngOnInit(): void {
  }

  cargarNacionalidad(pais : any)
  {
    this.paisEvent.emit(pais);
  }

  cargarTabla()
  {
    this.api.traerPaises().subscribe(paises => {
      this.paises = paises;
    
    });
    console.log(this.paises);
  }

}
