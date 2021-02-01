import { ConductorService } from './../../services/conductor.service';
import { ConductorI } from './../../models/conductor.interface';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-frm-editar-conductor',
  templateUrl: './frm-editar-conductor.component.html',
  styleUrls: ['./frm-editar-conductor.component.scss']
})
export class FrmEditarConductorComponent  {
  @Input() DataConductor:ConductorI;

  public car:Array<any> = [
    {id: 1, text: ' Cedula Ciudadnia'},
    {id: 2, text: ' Cedula Estranjeria'},
    {id: 3, text: ' Pasaporte'},
    {id: 4, text: ' Registro Civil'},
];



  minDate: Date;
  maxDate: Date;
  public FrmEditarConductor:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private servicioConductor:ConductorService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.FrmEditarConductor = formBuilder.group({

      tipoDocumento: ['', [Validators.required]],
      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      numeroLicencia: ['', Validators.required],
      estado: ['', Validators.required],

    });


  }

  ngOnInit(): void {
    this.inicializarForm();
  }
  submit(data:ConductorI) {
    if (this.FrmEditarConductor.valid) {
      data.foto=null;
      this.servicioConductor.EditarConductor(data,this.DataConductor.$key);
    }
    else{
      //alert("Todos Los Campos Son Necesarios");
    }
  }

  inicializarForm(){
    this.FrmEditarConductor.patchValue({
      tipoDocumento:this.DataConductor.tipoDocumento,
      identificacion:this.DataConductor.identificacion,
      nombres:this.DataConductor.nombres,
      apellidos:this.DataConductor.apellidos,
      direccion:this.DataConductor.direccion,
      telefono:this.DataConductor.telefono,
      fechaNacimiento :this.DataConductor.fechaNacimiento,
      fechaIngreso :this.DataConductor.fechaIngreso,
      numeroLicencia :this.DataConductor.numeroLicencia,
      estado:this.DataConductor.estado

    }
      );
  }



}
