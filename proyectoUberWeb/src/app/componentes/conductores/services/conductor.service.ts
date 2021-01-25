import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  listaConductores:AngularFireList<any>;
  constructor(db: AngularFireDatabase) {}

  obtenerConductor(){}

}
