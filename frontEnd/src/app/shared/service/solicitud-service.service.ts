import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudServicaService {

  constructor(private http: HttpClient) { }

  getSolicitudes(){
    return this.http.get(environment.url+'')
  }

  getSolicitud(id:number){
    return this.http.get(environment.url+''+id)
  }

  deleteSolicitud(id:number){

    return this.http.delete(environment.url+''+id) 
  }

  createSolicitud(body:any){
    return this.http.post(environment.url+'//', body).toPromise().then((data:any) => {
    })
  }

  updateSolicitud(body:any){
    return this.http.put(environment.url+'//', body).toPromise().then((data:any) => { 
    })
  }

}
