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
    return this.http.get(environment.url+'')
  }

  getTrimestre(){
    return this.http.get(environment.url+'')
  }

  getAvancesById(id:number){
    return this.http.get(environment.url+''+id)
  }

  getAvance(id:number){
    return this.http.get(environment.url+''+id)
  }

  deleteAvance(id:number){

    return this.http.delete(environment.url+''+id) 
  }

  createAvance(body:any){
    return this.http.post(environment.url+'//', body).toPromise().then((data:any) => {
    })
  }

  updateAvance(body:any){
    return this.http.put(environment.url+'//', body).toPromise().then((data:any) => { 
    })
  }
}
