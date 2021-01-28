import { VehiculoI } from './../models/vehiculo.interface';
import { ModalVehiculosComponent } from '../../shared/modal-vehiculos/modal-vehiculos.component';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { VehiculoService } from './../services/vehiculo.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit,AfterViewInit {

  constructor(
    public dialog: MatDialog,
    private servicioVehiculo:VehiculoService) {

    }

  displayedColumns: string[] = ['placa', 'marca', 'modelo', 'capacidad','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

ngOnInit(){
  this.servicioVehiculo.obtenerVehiculos().subscribe(resp => (this.dataSource.data=resp));


}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

}
  abrirModalAgregar(){
    this.abrirModal();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(row){
    this.abrirModal(row);
  }


  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.servicioVehiculo.eliminarVehiculo($key);
    }
    }

    abrirModal(contenido?: VehiculoI){
      const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = {
      titulo: contenido ? 'Editar Vehiculo':'Agregar Vehiculo',
      contenido:contenido
                        };
    this.dialog.open(ModalVehiculosComponent,dialogConfig);
  }

}
