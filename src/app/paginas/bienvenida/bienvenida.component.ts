import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  datoGit : any = "";
  constructor(public api : ApiService) { 
    this.cargarDatosGit();
  }

  ngOnInit(): void {
  }


  cargarDatosGit()
  {
    this.api.traerDatosGitHub().subscribe(dato => {
      this.datoGit = dato;
      console.log(this.datoGit);
    });
  }

}
