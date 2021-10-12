import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from 'src/app/paginas/alta-repartidor/alta-repartidor.component';
import { RepartidorDetalleComponent } from 'src/app/paginas/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path : 'altaRepartidor', component: AltaRepartidorComponent},
  { path : 'repartidorDetalle', component: RepartidorDetalleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
