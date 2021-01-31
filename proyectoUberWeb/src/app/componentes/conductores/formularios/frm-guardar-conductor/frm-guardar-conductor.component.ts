import { ConductorService } from './../../services/conductor.service';
import { ConductorI } from './../../models/conductor.interface';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-frm-guardar-conductor',
  templateUrl: './frm-guardar-conductor.component.html',
  styleUrls: ['./frm-guardar-conductor.component.scss']
})
export class FrmGuardarConductorComponent  {

  public car:Array<any> = [
    {id: 1, text: ' Cedula Ciudadnia'},
    {id: 2, text: ' Cedula Estranjeria'},
    {id: 3, text: ' Pasaporte'},
    {id: 4, text: ' Registro Civil'},
];



  minDate: Date;
  maxDate: Date;
  public FrmGuardarVehiculo:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private servicioConductor:ConductorService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.FrmGuardarVehiculo = formBuilder.group({

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
  submit(data:ConductorI) {
    if (this.FrmGuardarVehiculo.valid) {
      data.estado=true;
      data.foto=null;
      this.servicioConductor.GuardarConductor(data);
    }
    else{
      //alert("Todos Los Campos Son Necesarios");
    }
  }

  onClose(){

  }

  onClear(){

  }

}



