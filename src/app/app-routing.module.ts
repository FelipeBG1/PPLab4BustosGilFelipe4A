import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { UserGuard } from './guards/user.guard';
import { ErrorLogueadoComponent } from './paginas/error-logueado/error-logueado.component';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { ErrorComponent } from './paginas/error/error.component';

const routes: Routes = [
  { path : 'bienvenido', component: BienvenidaComponent},
  { path : 'login', component: LoginComponent},
  { path: '', pathMatch:'full', redirectTo: 'login'},
  { path : 'errorLogeo', component: ErrorLogueadoComponent},
  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [UserGuard]},
  { path : '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
