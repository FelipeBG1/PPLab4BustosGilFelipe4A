import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from 'src/app/paginas/alta-repartidor/alta-repartidor.component';

const routes: Routes = [
  { path : 'altaRepartidor', component: AltaRepartidorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
