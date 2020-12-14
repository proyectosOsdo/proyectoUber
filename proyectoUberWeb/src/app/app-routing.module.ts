import { PedidosComponent } from './componentes/pedidos/pedidos/pedidos.component';
import { ConductoresComponent } from './componentes/conductores/conductores/conductores.component';
import { ClientesComponent } from './componentes/clientes/clientes/clientes.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos/vehiculos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'pedidos',component:PedidosComponent},
  {path:'conductores',component:ConductoresComponent},
  {path:'vehiculos',component:VehiculosComponent},
  {path:'clientes',component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
