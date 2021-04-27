export interface ConductorI{
  nombres:String;
  apellidos:String;
  tipoDocumento:string;
  identificacion:String;
  fechaNacimiento:String;
  fechaIngreso:String;
  direccion:String;
  telefono:String;
  numeroLicencia:String;
  $key:string;
  estado:boolean;
  email:string;
  password:string;
  idFirebase:string;
  foto?:any;
}
