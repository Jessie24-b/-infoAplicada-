import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }
  
  getEmployees(){
    return this.http.get(environment.url+'/employees/get/')
  }

  deleteEmployeByID(id:number){

    return this.http.delete(environment.url+'/employees/delete/'+id) 
  }

  createEmploye(body:any){
    return this.http.post(environment.url+'/employees/add', body).toPromise().then((data:any) => {
    })
  }

  getEmployee(id:number){
    console.log(id)
     return this.http.get(environment.url+'/employees/getById/'+id) //falta direccion
  }

  updateEmployee(body:any){
    console.log("Holi")
    return this.http.put(environment.url+'/employees/update', body).toPromise().then((data:any) => { //falta direccion
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || {};

  }

  login(correo: string, contrasenna: string): Observable<any> {
    console.log(correo+"--"+contrasenna);
    return this.http.get(environment.url + '/login/' + correo + '/' + contrasenna).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('login'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}


