import { ConductorI } from './../../models/conductor.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm-editar-conductor',
  templateUrl: './frm-editar-conductor.component.html',
  styleUrls: ['./frm-editar-conductor.component.scss']
})
export class FrmEditarConductorComponent implements OnInit {
  @Input() DataConductor:ConductorI;
  constructor() { }

  ngOnInit(): void {
  }

}
