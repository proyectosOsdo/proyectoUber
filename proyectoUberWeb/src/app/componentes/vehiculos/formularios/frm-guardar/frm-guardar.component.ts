import { VehiculoI } from './../../models/vehiculo.interface';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';
import { VehiculoService } from './../../services/vehiculo.service';


@Component({
  selector: 'app-frm-guardar',
  templateUrl: './frm-guardar.component.html',
  styleUrls: ['./frm-guardar.component.scss']
})
export class FrmGuardarComponent  {

  public car:Array<any> = [
    {id: 1, text: ' A1',tipo:"Van"},
    {id: 2, text: ' B2',tipo:"Buseta"},
    {id: 3, text: ' C3',tipo:"Minibus"},
    {id: 4, text: ' D4',tipo:"Automovil"},
];



  minDate: Date;
  maxDate: Date;
  public FrmGuardarVehiculo:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private servicioVehiculo:VehiculoService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.FrmGuardarVehiculo = formBuilder.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', [Validators.required]],
      capacidad: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      tipoLicencia: ['', Validators.required],
      estado: ['', Validators.required],

    });


  }
  submit(data:VehiculoI) {
    if (this.FrmGuardarVehiculo.valid) {
      data.estado=true;
      data.fotos=null;
      this.servicioVehiculo.guardarVehiculo(data);
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



