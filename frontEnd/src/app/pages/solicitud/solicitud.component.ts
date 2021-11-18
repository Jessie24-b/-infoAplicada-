import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

import { SolicitudServicaService} from '../../shared/service/solicitud-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditRequestComponent } from 'src/app/shared/components/request/edit-request/edit-request.component';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

 
  proyects:any;
  faAddressCard = faAddressCard;
  faTrashAlt = faTrashAlt;
  faUserEdit = faUserEdit;
  faFileMedical = faFileMedical;
  faBookMedical = faBookMedical;
  faFileContract = faFileContract;


  constructor(private soliService:SolicitudServicaService, public fb: FormBuilder,
     private router: Router, public dialog:MatDialog) {
     }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects(){
    this.soliService.getSolicitudes().subscribe((res: any) => {
      this.proyects = res;
    })
    
  }

  deleteProyect(id:number){

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
      this.soliService.deleteSolicitud(id).subscribe((res: any) => {
        console.log('eliminado exitosamente')
        // this.router.navigate(['/employee'])
         window.location.href="/request"
      })
    })

  }

  editRequest(id:number){
    this.openEdit(id);
  }

  openEdit(id:number):void{
    const dialogRef = this.dialog.open(EditRequestComponent,{
      height:'450px',
      width:'900px',
      data:{
        idSolicitud:id
      }
    });

    dialogRef.afterClosed().subscribe(result =>{

      console.log(`Dialog result ${result}`);
    })
  }

  advance(id:number){
    sessionStorage.setItem('idSolicitud',id.toString());
    this.router.navigate(['/advance']);
  }


}
