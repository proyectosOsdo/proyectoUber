import { AlertsService } from './../../shared/services/alerts.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehiculoI } from './../models/vehiculo.interface';

import  Swal  from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
private coleccionVehiculos:AngularFirestoreCollection<VehiculoI>;
private vehiculosDB: AngularFireList<VehiculoI>;
vehiculo:Observable<VehiculoI>;

  constructor(
    private fes: AngularFirestore,
    private db: AngularFireDatabase,
    private alertService:AlertsService
    ){
     this.coleccionVehiculos = fes.collection<VehiculoI>('vehiculos');
     this.vehiculosDB = this.db.list('/vehiculos', (ref) =>ref.orderByChild('placa'));
    }

              public obtenerVehiculos():Observable<VehiculoI[]> {
                return this.fes.collection('vehiculos')
                .snapshotChanges()
                .pipe(
                  map(actions =>
                    actions.map(a =>{
                      const data = a.payload.doc.data() as VehiculoI;
                      const id = a.payload.doc.id;
                      return {id,...data};
                    }
                    )
                  )
                );
              }

              obtenerVehiculo(){
                this.fes.collection('vehiculos').valueChanges();
              }

              guardarVehiculo(vehiculo:VehiculoI){
                this.fes.collection('vehiculos').add(vehiculo).then(() => {
                  this.alertService.mensajeGuardar();
                 }).catch(() => {
                  Swal.fire('Error al Guardar!!!', 'No se pudo Guardar el registro', 'error');
                 });
              }

              actualizarVehiculo(id:any,vehiculo:VehiculoI){
                this.fes.collection('vehiculos').doc(id).update(vehiculo).then(() => {
                  Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                  Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }
              eliminarVehiculo(id:any){
                this.fes.collection('vehiculos').doc(id).delete();
              }
              //servicios de firebase realtime database

              ObtenerVehiculosRealDatabase(): Observable<VehiculoI[]> {
                //? this.jugadoresDB ya tiene la base de datos.
                //? snapshotChanges obtiene la informacion en este momento.
                //? Obtiene los datos junto con la Key
                //? Con Pipe permite hacer modificaciones
                //? Con Map haremos un cambio, que por cada uno de los jugadores retornaremos la informacion,
                //? y se Agregue una Key.
                //? El formato de key siempre es $key.
                //? Payload es por donde esta viajando la data.
                return this.vehiculosDB.snapshotChanges().pipe(
                  //?A veces hay que importar map manualmente de rsjs/operators
                  map((changes) => {
                    return changes.map((c) => ({
                      $key: c.payload.key,
                      ...c.payload.val(),
                    }));
                  })
                );
              }

              ObtenerVehiculoRealDatabase(){

              }
              GuardarVehiculoRealDatabase(vehiculo:VehiculoI){
                return this.vehiculosDB.push(vehiculo).then(() => {
                  this.alertService.mensajeGuardar();
                 }).catch(() => {
                  this.alertService.mensajeError();
                 });
              }
              EditarVehiculoRealDatabase(vehiculo:VehiculoI,key){
                const $key = vehiculo.$key;
                delete vehiculo.$key;
                this.db.list('/vehiculos').update(key, vehiculo).then(() => {
                  this.alertService.mensajeEditar();
                 }).catch(() => {
                  this.alertService.mensajeError();
                 });
              }
              EliminarVehiculoRealDatabase(id:string){
                this.db.list('/vehiculos').remove(id).then(() => {
                  this.alertService.mensajeEditar();
                 }).catch(() => {
                  this.alertService.mensajeError();
                 });
              }

}
