import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../service/rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudServicaService} from '../../../service/solicitud-service.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  recuest: FormGroup;
  employees:any;
  employeesTI:any;
  public file:any= [];
  

  createFormGroup(){
    
    return new FormGroup({

      usuarioResponsable: new FormControl('', [Validators.required]),
      usuarioFinal: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      nombreProyecto: new FormControl('', [Validators.required]),
      acta: new FormControl('', [Validators.required]),
    });

  }

  constructor(private restService: RestService, public fb: FormBuilder,
    private route: ActivatedRoute, private router: Router, 
    private soliService:SolicitudServicaService) { 
      this.recuest= this.createFormGroup();
    }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.restService.getEmployees().subscribe((res: any) => {
      this.employees = res;
      console.log(this.employees)
      this.employeesTI = this.employees.filter((employee: any) => employee.descripcion =='TI');
      console.log(this.employeesTI)
    })
  }

  onFileChange(e){
    this.file= e.target.files;
    console.log(this.file);
 }


  createRecuest(){
    const proyect ={
      usuarioAplicativo: localStorage.getItem('token'),
      usuarioResponsable:this.recuest.value.usuarioResponsable,
      usuarioFinal:this.recuest.value.usuarioFinal,
      fechaInicio:this.recuest.value.fechaInicio,
      fechaFin:this.recuest.value.fechaFin,
      nombreProyecto:this.recuest.value.nombreProyecto,
      acta:this.recuest.value.acta,
    }

    if(this.recuest.valid){
      if(this.soliService.createSolicitud(proyect)){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro éxitoso',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.href="/request"
      }

    }

  }

  createBitacora(){

   const document={
     idTransaccion:'1',
     descripcion:'Se registro un proyecto',
     usuarioAplicativo: localStorage.getItem('token')
   }
  }

}
