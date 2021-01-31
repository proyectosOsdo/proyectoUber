export interface ConductorI{
  nombreConductor:String;
  apellidosConductor:String;
  tipoDocumento:string;
  identificacion:String;
  fechaNacimiento:Date;
  fechaIngreso:Date;
  direccion:String;
  telefono:String;
  numeroLicencia:String;
  $key:string;
  estado:boolean;
  foto?:any;
}
