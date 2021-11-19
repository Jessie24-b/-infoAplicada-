import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../service/rest.service';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { SolicitudServicaService} from '../../../service/solicitud-service.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  editRequest: FormGroup;
  employees:any;
  proyect:any
  idMessage:any;
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

  constructor(private restService: RestService, public fb: FormBuilder,private router: Router,
     public dialog:MatDialogRef<EditRequestComponent>, 
     @Inject(MAT_DIALOG_DATA) public message: string,private soliService:SolicitudServicaService) { 

      this.editRequest= this.createFormGroup();
      this.idMessage=this.message;
      this.fillFormEdit(this.idMessage.idSolicitud);
     }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.restService.getEmployees().subscribe((res: any) => {
      this.employees = res;
      this.employeesTI = this.employees.filter((employee: any) => employee.descripcion =='TI');
    })
  }

  fillFormEdit(id){
      
    this.soliService.getSolicitud(id).subscribe((res: any) => {
    this.proyect=res;  
    console.log(this.proyect); 
    this.editRequest.controls['usuarioResponsable'].setValue(this.proyect.idResponsableTI);
    this.editRequest.controls['usuarioFinal'].setValue(this.proyect.idResponsableUsuarioFinal);  
    this.editRequest.controls['fechaInicio'].setValue(this.proyect.fechaInicio);
    this.editRequest.controls['fechaFin'].setValue(this.proyect.fechaFin);
    this.editRequest.controls['nombreProyecto'].setValue(this.proyect.nombreProyecto);
   // this.editRequest.controls['acta'].setValue(this.proyect.documentoActaConstitutiva);
   });  
  
}
onFileChange(e){
  this.file= e.target.files;
  console.log(this.file);
}

  updateRequest(){

    const proyect ={
      idSolicitud: this.idMessage.idSolicitud,
      usuarioResponsable:this.editRequest.value.usuarioResponsable,
      usuarioFinal:this.editRequest.value.usuarioFinal,
      fechaInicio:this.editRequest.value.fechaInicio,
      fechaFin:this.editRequest.value.fechaFin,
      nombreProyecto:this.editRequest.value.nombreProyecto,
      acta:'Editado',
    }

    if(this.editRequest.valid){
      console.log("holi")
      if(this.soliService.updateSolicitud(proyect)){
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

}
