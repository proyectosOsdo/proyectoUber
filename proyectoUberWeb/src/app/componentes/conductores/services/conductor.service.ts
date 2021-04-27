import { AngularFireAuthModule,AngularFireAuth } from '@angular/fire/auth';
import { AlertsService } from './../../shared/services/alerts.service';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ConductorI } from '../models/conductor.interface';
import { FileI } from '../models/file.interface';
import {MatDialog} from '@angular/material/dialog';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import  Swal  from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {
private conductorDB: AngularFireList<ConductorI>;
conductor:Observable<ConductorI>;
 private filePath: any;
  private downloadURL: Observable<string>;


  constructor(
    private db: AngularFireDatabase,
    public dialog: MatDialog,
    private auth :AngularFireAuth,
    private storage: AngularFireStorage
    ){
     this.conductorDB = this.db.list('Users/Drivers', (ref) =>ref.orderByChild('name'));
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
              GuardarConductor(conductores:ConductorI,key){
                conductores.idFirebase = key;
                return this.conductorDB.push(conductores).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }
              EditarConductor(conductor:ConductorI,key){
                const $key = conductor.$key;
                delete conductor.$key;
                this.db.list('Users/Drivers').update(key, conductor).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }
              EliminarConductor(id:string){
                this.db.list('Users/Drivers').remove(id).then(() => {
                                Swal.fire('Exitooo!!!', 'Se actualizo el registro correctamente', 'success');
                 }).catch(() => {
                                Swal.fire('Error al actualizar!!!', 'No se pudo actualizar el registro', 'error');
                 });
              }

              guardarEmailPassword(email,password,conductores:ConductorI){
                return this.auth.createUserWithEmailAndPassword(email,password)
                .then((userCredential)=>{
                  var id = userCredential.user.uid
                    this.GuardarConductor(conductores,id);
                    this.dialog.closeAll();

                }).catch(() => {
                  Swal.fire('Error al crear el usuario!!!', 'El correo ya existe', 'error');

                });


              }

              public preAddAndUpdatePost(post: ConductorI, image: FileI): void {
                this.uploadImage(post, image);
              }

              private uploadImage(conductor: ConductorI, image: FileI) {
                this.filePath = `images/${image.name}`;
                const fileRef = this.storage.ref(this.filePath);
                const task = this.storage.upload(this.filePath, image);
                task.snapshotChanges()
                  .pipe(
                    finalize(() => {
                      fileRef.getDownloadURL().subscribe(urlImage => {
                        this.downloadURL = urlImage;
                        conductor.foto=this.downloadURL;
                        this.guardarEmailPassword(conductor.email,conductor.password,conductor);
                      });
                    })
                  ).subscribe();
              }

}

