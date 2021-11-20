import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvancesServiceService {

  constructor(private http: HttpClient) { }

  uploadFile(documento){
    console.log("Service ",documento);
    return this.http.post(environment.url+'/employees/single',documento)
  }

  getAvances(){
    return this.http.get(environment.url+'/advance/get')
  }

  getReportAdvance(){
    return this.http.get(environment.url+'/advance/getAdvance')
  }

  getAvancesByIdSolicitud(id:number){ //obtener todos los avances de un proyecto

    return this.http.get(environment.url+'/advance/getByIdRequest/'+id)
  }

  getAvance(id:number){ //obtener un avance para modificar
    return this.http.get(environment.url+'/advance/getById/'+id)
  }

  deleteAvance(id:number){

    return this.http.delete(environment.url+'/advance/delete/'+id) 
  }

  createAvance(body:any){
    return this.http.post(environment.url+'/advance/add/', body).toPromise().then((data:any) => {
    })
  }

  updateAvance(body:any){
    return this.http.put(environment.url+'/advance/update', body).toPromise().then((data:any) => { 
    })
  }
}
