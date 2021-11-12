import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/shared/service/rest.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from 'src/app/shared/components/edit-employee/edit-employee.component';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any;
  employee:any;
  faAddressCard = faAddressCard;
  faTrashAlt = faTrashAlt;
  faUserEdit = faUserEdit;
  faUserPlus = faUserPlus;


  constructor(private restService: RestService, 
    private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.restService.getEmployees().subscribe((res: any) => {
      this.employees = res;
      console.log(this.employees)
    })
  }

  deleteEmploye(id:number){
    
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
      this.restService.deleteEmployeByID(id).subscribe((res: any) => {
        console.log('eliminado exitosamente')
        // this.router.navigate(['/employee'])
         window.location.href="/employee"
      })
    })

  }

  editEmployee(id:number){
    
    // this.router.navigate(["edit",id]); 
   //.fillFormEdit(id);
     this.openEdit(id);
    
  }

  openEdit(id:number):void{
    const dialogRef = this.dialog.open(EditEmployeeComponent,{
      height:'540px',
      width:'900px',
      data:{
        idFuncionario:id
      }
    });

    dialogRef.afterClosed().subscribe(result =>{

      console.log(`Dialog result ${result}`);

    })
  }

}
