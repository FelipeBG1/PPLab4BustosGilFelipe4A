import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public grupoControles !: FormGroup;
  empleado : Usuario = {
    usuario : "empleado",
    clave : "empleado123"
  };
  
  admin : Usuario = {
    usuario : "admin",
    clave : "admin123"
  };

  usuario : string = "";
  clave : string = "";

  constructor(private fb : FormBuilder, private router : Router, private user : UserService) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'usuario' : ['',Validators.required],
      'clave' : ['',Validators.required],
    });
  }

  verificar()
  {
    let usuario : Usuario = new Usuario(this.grupoControles.get("usuario")?.value,this.grupoControles.get("clave")?.value);
    this.user.logearse(usuario);

    if(this.user.logeado)
    {
      this.router.navigateByUrl('repartidor/altaRepartidor');
    }
    
  }

  empleadoLogin()
  {
    this.usuario = this.empleado.usuario;
    this.clave = this.empleado.clave;
  }

  adminLogin()
  {
    this.usuario = this.admin.usuario;
    this.clave = this.admin.clave;
  }

}
