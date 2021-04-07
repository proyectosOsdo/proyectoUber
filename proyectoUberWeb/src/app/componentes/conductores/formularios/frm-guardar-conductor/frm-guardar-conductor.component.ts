import { ConductorService } from './../../services/conductor.service';
import { ConductorI } from '../../models/conductor.interface';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators ,ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-frm-guardar-conductor',
  templateUrl: './frm-guardar-conductor.component.html',
  styleUrls: ['./frm-guardar-conductor.component.scss']
})
export class FrmGuardarConductorComponent  {
  private image: any;
  public car:Array<any> = [
    {id: 1, text: ' Cedula Ciudadania'},
    {id: 2, text: ' Cedula Estranjeria'},
    {id: 3, text: ' Pasaporte'},
    {id: 4, text: ' Registro Civil'},
];
  minDate: Date;
  maxDate: Date;
  public FrmGuardarConductor:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private servicioConductor:ConductorService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.FrmGuardarConductor = formBuilder.group({

      tipoDocumento: ['', [Validators.required]],
      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      numeroLicencia: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      rPassword: ['', Validators.required],
      estado: ['', Validators.required],
      imagenConductor:['', Validators.required]

    });


  }
  submit(data:ConductorI) {
    if (this.FrmGuardarConductor.valid) {
      data.estado=true;
      this.servicioConductor.preAddAndUpdatePost(data, this.image);
    }
    else{
      //alert("Todos Los Campos Son Necesarios");
    }
  }
  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
  onClose(){

  }

  onClear(){

  }

}



