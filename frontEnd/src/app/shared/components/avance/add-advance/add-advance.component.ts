import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { SolicitudServicaService} from '../../../service/solicitud-service.service';
import { AvancesServiceService } from '../../../service/avances-service.service';


@Component({
  selector: 'app-add-advance',
  templateUrl: './add-advance.component.html',
  styleUrls: ['./add-advance.component.css']
})
export class AddAdvanceComponent implements OnInit {

  addAdvance:FormGroup;
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

  constructor( public fb: FormBuilder,private router: Router,
    public dialog:MatDialogRef<AddAdvanceComponent>, private avance:AvancesServiceService,
    @Inject(MAT_DIALOG_DATA) public message: string,private soliService:SolicitudServicaService ) { 

      this.addAdvance= this.createFormGroup();
      this.idMessage=this.message;
    }

  ngOnInit(): void {
    this.getProyects();
   
  }

  getProyects(){
    this.soliService.getSolicitudes().subscribe((res: any) => {
      this.proyects = res;
    })

  }

  onFileChange(e){
     this.documento= e.target.files;
     console.log(this.documento);
  }



  createAdvance() {

    let formData= new FormData();
    formData.append("documento",this.documento[0],this.documento[0].name);
     console.log(formData);
     this.avance.uploadFile(formData).subscribe((res)=>{
       console.log('Response:', res);
     })

   /*  const advance ={
      proyecto:this.addAdvance.value.proyecto,
      trimestre:this.addAdvance.value.trimestre,
    }

    if(this.addAdvance.valid){
      if(this.advance.createAdvance(advance)){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro éxitoso',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.href="/advance"
      }

    } */

  }

}
