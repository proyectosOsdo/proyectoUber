import { SideBarComponent } from './componentes/navs/side-bar/side-bar.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './componentes/clientes/clientes/clientes.component';
import { ConductoresComponent } from './componentes/conductores/conductores/conductores.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos/vehiculos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ClientesComponent,
    ConductoresComponent,
    VehiculosComponent,
    PedidosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
