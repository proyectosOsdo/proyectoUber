import { SolicitudI } from './../../models/solicitud.interface';
import { SolicitudesService } from './../../services/solicitudes.service';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-frm-editar-solicitud',
  templateUrl: './frm-editar-solicitud.component.html',
  styleUrls: ['./frm-editar-solicitud.component.scss']
})
export class FrmEditarSolicitudComponent implements OnInit {
  @Input() DataSolicitud:SolicitudI;

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
              private servicioSolicitud:SolicitudesService) {
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
  submit(data:SolicitudI) {
    if (this.FrmEditarConductor.valid) {
      this.servicioSolicitud.EditarSolicitud(data,this.DataSolicitud.$key);
    }
    else{
      //alert("Todos Los Campos Son Necesarios");
    }
  }

  inicializarForm(){
    this.FrmEditarConductor.patchValue({
      tipoDocumento:this.DataSolicitud.destination,
      identificacion:this.DataSolicitud.idClient,
      nombres:this.DataSolicitud.idDriver,
      apellidos:this.DataSolicitud.km,
      direccion:this.DataSolicitud.origin,
      telefono:this.DataSolicitud.status,
      fechaNacimiento :this.DataSolicitud.time,
      fechaIngreso :this.DataSolicitud.status,
      numeroLicencia :this.DataSolicitud.time,
      estado:this.DataSolicitud.status

    }

      );
  }


}
