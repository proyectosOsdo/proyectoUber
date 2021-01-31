import { AlertsService } from './../../shared/services/alerts.service';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorI } from './../models/conductor.interface';

import  Swal  from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {
private conductorDB: AngularFireList<ConductorI>;
conductor:Observable<ConductorI>;

  constructor(
    private db: AngularFireDatabase
    ){
     this.conductorDB = this.db.list('/Conductor', (ref) =>ref.orderByChild('estado'));
    }
              ObtenerConductores(): Observable<ConductorI[]> {
                return this.conductorDB.snapshotChanges().pipe(
                  map((changes) => {
                    return changes.map((c) => ({
                      $key: c.payload.key,
                      ...c.payload.val(),
                    }));
                  })
                );
              }

              ObtenerConductor(){

              }
              GuardarConductor(conductor:ConductorI){
                return this.conductorDB.push(conductor).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }
              EditarConductor(conductor:ConductorI,key){
                const $key = conductor.$key;
                delete conductor.$key;
                this.db.list('/Conductor').update(key, conductor).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }
              EliminarConductor(id:string){
                this.db.list('/Conductor').remove(id).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }

}
