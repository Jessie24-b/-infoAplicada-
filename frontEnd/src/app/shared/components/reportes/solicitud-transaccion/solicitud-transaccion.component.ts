import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SolicitudServicaService } from 'src/app/shared/service/solicitud-service.service';

@Component({
  selector: 'app-solicitud-transaccion',
  templateUrl: './solicitud-transaccion.component.html',
  styleUrls: ['./solicitud-transaccion.component.css']
})
export class SolicitudTransaccionComponent implements OnInit {

  //solicitudes
  solicitud:any;
  value:number;
  value2:number;
  fechas: FormGroup;
  createFormGroup(){
    return new FormGroup({
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required])
    });
  }
//-----------------------------
 //Transacciones
  meses: FormGroup;
  transaccion:any;
  createFormGroup2(){
    return new FormGroup({
      mesInicio: new FormControl('', [Validators.required]),
      mesFin: new FormControl('', [Validators.required])
    });
  }

 

  constructor( private soliService: SolicitudServicaService) {
    this.getDatos();
    this.fechas= this.createFormGroup();
    this.meses= this.createFormGroup2();
    this.value2=0;
   }

  ngOnInit(): void {
    
  }

  getDatos(){
    console.log('Holi');
    if(localStorage.getItem('cambio')=='soli'){
      this.value=1;
      console.log(this.value);

    }else if(localStorage.getItem('cambio')=='tran'){
      this.value=2;
    }
  }

  fillTable(){
   
    this.soliService.getSolicitudByDate( this.fechas.value.fechaInicio,
       this.fechas.value.fechaFin ).subscribe((res: any) => {
         
      this.solicitud = res;
      this.value2=1;
      console.log(this.solicitud);
    })

  }

  fillTableTran(){
    console.log("Transaccion");
    this.soliService.getTransacciones(this.meses.value.mesInicio,
      this.meses.value.mesFin).subscribe((res:any)=>{
         this.transaccion =res;
         this.value2=2;
         console.log(this.transaccion);
      })
  }

}
