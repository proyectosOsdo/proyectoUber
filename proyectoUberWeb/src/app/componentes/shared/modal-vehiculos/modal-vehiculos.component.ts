import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-vehiculos',
  templateUrl: './modal-vehiculos.component.html',
  styleUrls: ['./modal-vehiculos.component.scss']
})
export class ModalVehiculosComponent implements OnInit {
 public data:any;

  constructor(public dialog: MatDialogRef<ModalVehiculosComponent>,@Inject(MAT_DIALOG_DATA) data) {
      this.data=data;

  }

  ngOnInit(){
  }

  }


