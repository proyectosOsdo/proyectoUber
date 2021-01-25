import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehiculoI } from './../models/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
private coleccionVehiculos:AngularFirestoreCollection<VehiculoI>;
vehiculo:Observable<VehiculoI>;

  constructor(private fes: AngularFirestore) {
    this.coleccionVehiculos = fes.collection<VehiculoI>('vehiculos');
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
                this.fes.collection('vehiculos').add(vehiculo);
              }

              actualizarVehiculo(id:any,vehiculo:VehiculoI){
                this.fes.collection('vehiculos').doc(id).update(vehiculo);
              }
              eliminarVehiculo(id:any){
                this.fes.collection('vehiculos').doc(id).delete();
              }

}
