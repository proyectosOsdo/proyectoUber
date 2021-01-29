export interface VehiculoI{
  id:string;
  placa:String;
  marca:String;
  modelo:String;
  capacidad:number;
  tipoVehiculo:String;
  fechaIngreso:String;
  estado:boolean;
  tipoLicencia?:string;
  fotos?:String;
  $key:string;

}
