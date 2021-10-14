import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './paginas/tabla-paises/tabla-paises.component';
import { ErrorLogueadoComponent } from './paginas/error-logueado/error-logueado.component';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { ListadoRepartidoresComponent } from './paginas/listado-repartidores/listado-repartidores.component';
import { DetallePaisComponent } from './paginas/detalle-pais/detalle-pais.component';
import { DetallesRepartidorComponent } from './paginas/detalles-repartidor/detalles-repartidor.component';
import { ErrorComponent } from './paginas/error/error.component';
import { AltaPedidoComponent } from './paginas/alta-pedido/alta-pedido.component';
import { DeliveryComponent } from './paginas/delivery/delivery.component';
import { ModificarPedidoComponent } from './paginas/modificar-pedido/modificar-pedido.component';
import { CambiarEstadoComponent } from './paginas/cambiar-estado/cambiar-estado.component';
import { ErrorAdminComponent } from './paginas/error-admin/error-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    ErrorLogueadoComponent,
    RepartidorDetalleComponent,
    ListadoRepartidoresComponent,
    DetallePaisComponent,
    DetallesRepartidorComponent,
    ErrorComponent,
    AltaPedidoComponent,
    DeliveryComponent,
    ModificarPedidoComponent,
    CambiarEstadoComponent,
    ErrorAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
