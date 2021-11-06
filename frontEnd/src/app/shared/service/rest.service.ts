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
    return this.http.get(environment.url+'/getEmployee/')//direcccion de node que saca empleados falta
  }

  deleteEmployeByID(id:number){

    return this.http.delete(environment.url+'/deleteEmployee/'+id) //direccion para eliminar falta
  }

  createEmploye(body:any){
    return this.http.post(environment.url+'/addEmployee/', body).toPromise().then((data:any) => {
      console.log(data)
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || {};

  }

  login(correo: string, contrasenna: string): Observable<any> {
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


