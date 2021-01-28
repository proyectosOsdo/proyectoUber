import { VehiculoI } from './../../models/vehiculo.interface';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';
import { VehiculoService } from './../../services/vehiculo.service';


@Component({
  selector: 'app-frm-editar',
  templateUrl: './frm-editar.component.html',
  styleUrls: ['./frm-editar.component.scss']
})
export class FrmEditarComponent implements OnInit{

@Input() DataVehiculo:VehiculoI;
  public car:Array<any> = [
    {id: 1, text: ' A1',tipo:"Van"},
    {id: 2, text: ' B2',tipo:"Buseta"},
    {id: 3, text: ' C3',tipo:"Minibus"},
    {id: 4, text: ' D4',tipo:"Automovil"},
];



  minDate: Date;
  maxDate: Date;
  public FrmEditarVehiculo:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private servicioVehiculo:VehiculoService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.FrmEditarVehiculo = formBuilder.group({
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
  ngOnInit(): void {
    this.inicializarForm();
  }
  submit(data:VehiculoI) {
    if (this.FrmEditarVehiculo.valid) {
      data.estado=true;
      data.fotos=null;
      this.servicioVehiculo.actualizarVehiculo(this.DataVehiculo.id,data);
    }
    else{
      //alert("Todos Los Campos Son Necesarios");
    }
  }

  onClose(){

  }

  onClear(){

  }

  inicializarForm(){
    this.FrmEditarVehiculo.patchValue({
      placa:this.DataVehiculo.placa,
      marca:this.DataVehiculo.marca,
      modelo:this.DataVehiculo.modelo,
      capacidad:this.DataVehiculo.capacidad,
      tipoLicencia:this.DataVehiculo.tipoLicencia,
      tipoVehiculo:this.DataVehiculo.tipoVehiculo,
      fechaIngreso :this.DataVehiculo.fechaIngreso,
      estado:this.DataVehiculo.estado

    }
      )
  }

}
