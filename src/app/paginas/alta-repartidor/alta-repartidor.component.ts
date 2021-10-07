import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {

  public grupoControles !: FormGroup;

  nombre : string = "";
  dni : number = 0;
  edad : number = 0;
  capacidadTransporte : number = 0;
  pais : string = "";
  unidadPropia : boolean = false;
  agregado : string = "";

  constructor(private fb : FormBuilder,private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'dni' : ['',Validators.required],
      'edad' : ['',Validators.required],
      'capacidadTransporte' : ['',Validators.required],
      'pais' : ['',Validators.required],
      'unidadPropia' : '',
    });
  }

  recibirPais($event : any)
  {
    this.grupoControles.get('pais')?.setValue($event.name);
    console.log(this.pais);
  }

  cargarRepartidor()
  {
    let repartidor : Repartidor = new Repartidor(this.grupoControles.get("dni")?.value,this.grupoControles.get("nombre")?.value,this.grupoControles.get("edad")?.value,this.grupoControles.get("capacidadTransporte")?.value,this.grupoControles.get("pais")?.value,this.grupoControles.get("unidadPropia")?.value);
    
    this.agregarPeliculaBD({...repartidor}).then((response : any) => {
      console.log("repartidor registrado");
      this.agregado = "Se agrego el repartidor";
      setTimeout(() => {
        this.agregado = "";
        this.grupoControles.reset();
      }, 3000);
    })
    .catch((response : any) => {
      console.log(response);
      this.agregado = "No se pudo agregar el repartidor";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    });
   
  }

  agregarPeliculaBD(repartidor : Repartidor)
  {
    return this.firestore.collection("repartidores").add(repartidor);
  }

}
