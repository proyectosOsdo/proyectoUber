import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-conductores',
  templateUrl: './modal-conductores.component.html',
  styleUrls: ['./modal-conductores.component.scss']
})
export class ModalConductoresComponent implements OnInit {
  public data:any;

  constructor(public dialog: MatDialogRef<ModalConductoresComponent>,@Inject(MAT_DIALOG_DATA) data) {
      this.data=data;

  }
  ngOnInit(): void {
  }

}
