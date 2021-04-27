import { AlertsService } from './../../shared/services/alerts.service';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SolicitudI } from './../models/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private solicitudesDB: AngularFireList<SolicitudI>;
  solicitud:Observable<SolicitudI>;


    constructor(

      private db: AngularFireDatabase,
      private alertService:AlertsService
      ){
       this.solicitudesDB = this.db.list('/ClientBooking', (ref) =>ref.orderByChild('status'));
      }


                //servicios de firebase realtime database

                ObtenerSolicitudes(): Observable<SolicitudI[]> {
                  //? this.jugadoresDB ya tiene la base de datos.
                  //? snapshotChanges obtiene la informacion en este momento.
                  //? Obtiene los datos junto con la Key
                  //? Con Pipe permite hacer modificaciones
                  //? Con Map haremos un cambio, que por cada uno de los jugadores retornaremos la informacion,
                  //? y se Agregue una Key.
                  //? El formato de key siempre es $key.
                  //? Payload es por donde esta viajando la data.
                  return this.solicitudesDB.snapshotChanges().pipe(
                    //?A veces hay que importar map manualmente de rsjs/operators
                    map((changes) => {
                      return changes.map((c) => ({
                        $key: c.payload.key,
                        ...c.payload.val(),
                      }));
                    })
                  );
                }

                ObtenerSolicitud() {

                }

                GuardarSolicitud(vehiculo:SolicitudI){
                  return this.solicitudesDB.push(vehiculo).then(() => {
                    this.alertService.mensajeGuardar();
                   }).catch(() => {
                    this.alertService.mensajeError();
                   });
                }
                EditarSolicitud(vehiculo:SolicitudI,key){
                  const $key = vehiculo.$key;
                  delete vehiculo.$key;
                  this.db.list('Users/Drivers').update(key, vehiculo).then(() => {
                    this.alertService.mensajeEditar();
                   }).catch(() => {
                    this.alertService.mensajeError();
                   });
                }
                EliminarSolicitud(id:string){
                  this.db.list('/ClientBooking').remove(id).then(() => {
                    this.alertService.mensajeEditar();
                   }).catch(() => {
                    this.alertService.mensajeError();
                   });
                }

  }
