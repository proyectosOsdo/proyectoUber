import { VehiculoService } from './componentes/vehiculos/services/vehiculo.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { ModalConfirmarComponent } from './componentes/shared/modal-confirmar/modal-confirmar.component';
import { FrmGuardarComponent } from './componentes/vehiculos/formularios/frm-guardar/frm-guardar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ClientesComponent,
    ConductoresComponent,
    VehiculosComponent,
    PedidosComponent,
    HomeComponent,
    ModalConfirmarComponent,
    FrmGuardarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  entryComponents:[ModalConfirmarComponent],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
