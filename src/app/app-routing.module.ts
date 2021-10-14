import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { UserGuard } from './guards/user.guard';
import { ErrorLogueadoComponent } from './paginas/error-logueado/error-logueado.component';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { ErrorComponent } from './paginas/error/error.component';
import { DeliveryComponent } from './paginas/delivery/delivery.component';
import { AltaPedidoComponent } from './paginas/alta-pedido/alta-pedido.component';
import { AdminGuard } from './guards/admin.guard';
import { ErrorAdminComponent } from './paginas/error-admin/error-admin.component';

const routes: Routes = [
  { path : 'bienvenido', component: BienvenidaComponent},
  { path : 'login', component: LoginComponent},
  { path: '', pathMatch:'full', redirectTo: 'bienvenido'},
  { path : 'errorLogeo', component: ErrorLogueadoComponent},
  { path : 'errorAdmin', component: ErrorAdminComponent},
  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [UserGuard]},
  { path : 'delivery', component: DeliveryComponent, canActivate: [AdminGuard]},
  { path : '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
