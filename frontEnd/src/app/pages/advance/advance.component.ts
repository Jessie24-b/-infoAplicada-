import { Component, OnInit } from '@angular/core';
import { AvancesServiceService } from 'src/app/shared/service/avances-service.service';
import { SolicitudServicaService } from 'src/app/shared/service/solicitud-service.service';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { AddAdvanceComponent } from 'src/app/shared/components/avance/add-advance/add-advance.component';
import { EditAdvanceComponent } from 'src/app/shared/components/avance/edit-advance/edit-advance.component';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {

  //iconos
  faAddressCard = faAddressCard;
  faTrashAlt = faTrashAlt;
  faUserEdit = faUserEdit;
  faFileMedical = faFileMedical;
  faBookMedical = faBookMedical;

  //variables
  proyects:any;
  advance:any;
  idSolicitud:number;

  constructor(private soliService:SolicitudServicaService, 
    private advanceService: AvancesServiceService,public fb: FormBuilder,
    private router: Router, public dialog:MatDialog) {
    

     }

  ngOnInit(): void {
    this.getAdvances();
    
  }

  getAdvances(){
    if(sessionStorage.getItem('idSolicitud')==null){
      this.advanceService.getAvances().subscribe((res: any)=>{
        this.advance=res
      })
    }else{
      this.idSolicitud=Number(sessionStorage.getItem('idSolicitud'));
      sessionStorage.removeItem('idSolicitud');
      
      console.log(this.idSolicitud)
      this.advanceService.getAvancesById(this.idSolicitud).subscribe((res: any)=>{
          console.log("2"+this.idSolicitud)
        this.advance=res
      })
    }
  }

  createAdvance(){
     this.openCreate();
  }

  openCreate():void{
    const dialogRef = this.dialog.open(AddAdvanceComponent,{
      height:'350px',
      width:'750px',
    });

    dialogRef.afterClosed().subscribe(result =>{

      console.log(`Dialog result ${result}`);
    })
  }

  editAdvance(id:number){
      this.openEdit(id);
  }

  openEdit(id:number):void{
    const dialogRef = this.dialog.open(AddAdvanceComponent,{
      height:'350px',
      width:'750px',
      data:{
        idAvance:id
      }
    });

    dialogRef.afterClosed().subscribe(result =>{

      console.log(`Dialog result ${result}`);
    })
  }
  
  deleteAdvance(id:number){
    Swal.fire({
      title: 'Esta seguro de eliminar?',
      text: "Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
      this.advanceService.deleteAvance(id).subscribe((res: any) => {
        console.log('eliminado exitosamente')
        // this.router.navigate(['/employee'])
         window.location.href="/advance"
      })
    })

  }

}
