import { ModalConductoresComponent } from './../../shared/modal-conductores/modal-conductores.component';
import { ConductorService } from './../services/conductor.service';
import { ConductorI } from '../models/conductor.interface';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss']
})
export class ConductoresComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private servicioConductor:ConductorService) {

    }

  displayedColumns: string[] = ['identificacion','nombres', 'apellidos', 'direccion', 'telefono','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

ngOnInit(){
  this.servicioConductor.ObtenerConductores().subscribe(resp => (this.dataSource.data=resp));


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
        this.servicioConductor.EliminarConductor($key);
      }
    });
    }

    abrirModal(contenido?: ConductorI){
      const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = {
      titulo: contenido ? 'Editar Conductor':'Agregar Conductor',
      contenido:contenido
                        };
    this.dialog.open(ModalConductoresComponent,dialogConfig);
  }

}
