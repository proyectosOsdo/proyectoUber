import { ConductorService } from './../../conductores/services/conductor.service';
import { SolicitudI } from './../models/solicitud.interface';
import { ModalVehiculosComponent } from '../../shared/modal-vehiculos/modal-vehiculos.component';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SolicitudesService } from './../services/solicitudes.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private servicioSolicitud:SolicitudesService,
    private conductorService:ConductorService) {

    }

  displayedColumns: string[] = ['nameClient', 'origin', 'destination', 'km','nameDriver','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

ngOnInit(){
  this.servicioSolicitud.ObtenerSolicitudes().subscribe(resp => (this.dataSource.data=resp));
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
    Swal.fire({
      title: 'Esta Seguro?',
      text: "Esta Apunto de eliminar un registro,este proceso no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioSolicitud.EliminarSolicitud($key);

      }
    });
    }

    abrirModal(contenido?: SolicitudI){
      const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = {
      titulo: contenido ? 'Editar Solicitud':'Agregar Solicitud',
      contenido:contenido
                        };
    this.dialog.open(ModalVehiculosComponent,dialogConfig);
  }

}
