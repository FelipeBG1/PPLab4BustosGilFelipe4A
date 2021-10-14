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
  pais : string = '';
  unidadPropia : boolean = false;
  agregado : string = "";
  bandera : string = "";

  constructor(private fb : FormBuilder,private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'dni' : ['',[Validators.required,Validators.min(10000000),Validators.max(99999999)]],
      'edad' : ['',[Validators.required,Validators.min(18),Validators.max(80)]],
      'capacidadTransporte' : ['',[Validators.required,Validators.min(1)]],
      'pais' : ['',Validators.required],
      'unidadPropia' : [false]
    });
  }

  recibirPais($event : any)
  {
    this.pais = $event.name;
    this.grupoControles.get('pais')?.setValue($event.name);
    this.bandera = $event.flag;
  }

  cargarRepartidor()
  {
    let pais : any = 
    {
      nombre : this.grupoControles.get("pais")?.value,
      bandera : this.bandera
    }
    let repartidor : Repartidor = new Repartidor(this.grupoControles.get("dni")?.value,this.grupoControles.get("nombre")?.value,this.grupoControles.get("edad")?.value,this.grupoControles.get("capacidadTransporte")?.value,pais,this.grupoControles.get("unidadPropia")?.value);
    
    this.agregarRepartidorBD({...repartidor}).then((response : any) => {
      console.log("repartidor registrado");
      this.agregado = "Se agrego el repartidor";
      setTimeout(() => {
        this.agregado = "";
        this.grupoControles.reset();
        this.bandera = "";
        this.pais = "";
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

  agregarRepartidorBD(repartidor : Repartidor)
  {
    return this.firestore.collection("repartidores").add(repartidor);
  }

}
