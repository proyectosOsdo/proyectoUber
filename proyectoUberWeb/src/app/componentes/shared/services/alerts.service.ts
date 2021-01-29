import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  mensajeGuardar(){
    this.PopUp('succes','Operacion Exitosa!!!','Registro Guardado Correctamente','');
  }

  mensajeEditar(){
    this.PopUp('succes','Operacion Exitosa!!!','Registro Actualizado Correctamente','');
  }

  mensajeError(){
    this.PopUp('error','Lo sentimos!!!','Ha Ocurrido un error','!!!!Operacion Cancelada¡¡¡¡');
  }

  PopUp(icon,title,text,footer){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      footer: footer
    })
  }
}
