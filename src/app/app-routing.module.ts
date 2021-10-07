import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path : 'bienvenido', component: BienvenidaComponent},
  { path : 'login', component: LoginComponent},
  { path: '', pathMatch:'full', redirectTo: 'login'},
  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [UserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
