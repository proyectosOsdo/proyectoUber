import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-solicitudes',
  templateUrl: './modal-solicitudes.component.html',
  styleUrls: ['./modal-solicitudes.component.scss']
})
export class ModalSolicitudesComponent implements OnInit {
  public data:any;

  constructor(public dialog: MatDialogRef<ModalSolicitudesComponent>,@Inject(MAT_DIALOG_DATA) data) {
      this.data=data;

  }
  ngOnInit(): void {
  }

}
