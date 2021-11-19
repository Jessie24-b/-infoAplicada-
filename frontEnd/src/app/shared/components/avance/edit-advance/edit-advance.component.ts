import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { SolicitudServicaService} from '../../../service/solicitud-service.service';
import { AvancesServiceService } from '../../../service/avances-service.service';


@Component({
  selector: 'app-edit-advance',
  templateUrl: './edit-advance.component.html',
  styleUrls: ['./edit-advance.component.css']
})
export class EditAdvanceComponent implements OnInit {

  editAdvance:FormGroup;
  advance:any;
  idMessage:any;
  proyects:any;
  public documento:any= [];

  createFormGroup(){
    
    return new FormGroup({
      proyecto: new FormControl('', [Validators.required]),
      trimestre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
    });

  }

  constructor(public fb: FormBuilder,private router: Router,
    public dialog:MatDialogRef<EditAdvanceComponent>, private avanceService:AvancesServiceService,
    @Inject(MAT_DIALOG_DATA) public message: string,private soliService:SolicitudServicaService) {

      this.editAdvance= this.createFormGroup();
      this.idMessage=this.message;
      this.fillFormEdit(this.idMessage.idAvance);
     }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects(){
    this.soliService.getSolicitudes().subscribe((res: any) => {
      this.proyects = res;
    })

  }

  fillFormEdit(id:number){
    console.log(id)
    this.avanceService.getAvance(id).subscribe((res: any) => {
      this.advance=res;
      console.log("Avance: " ,this.advance);
      this.editAdvance.controls['proyecto'].setValue(this.advance.idSolicitud);
      this.editAdvance.controls['trimestre'].setValue(this.advance.idTrimestre);
    })

  }

  onFileChange(e){
    this.documento= e.target.files;
    console.log(this.documento);
 }

 
 updateAdvance() {

 /*  let formData= new FormData();
  formData.append("documento",this.documento[0],this.documento[0].name);
   console.log(formData);
   this.avance.uploadFile(formData).subscribe((res)=>{
     console.log('Response:', res);
   }) */

   const advance ={
     idAvance: this.idMessage.idAvance,
     idTrimestre:this.editAdvance.value.trimestre,
     documento:'soy un avance editado',
     usuarioAplicativo: localStorage.getItem('token'),
     idSolicitud:this.editAdvance.value.proyecto
  }

  if(this.editAdvance.valid){
    if(this.avanceService.updateAvance(advance)){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro éxitoso',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.href="/advance"
    }

  } 

}

}
