import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 
  editEmployee: FormGroup;

  createFormGroup(){
    
    return new FormGroup({

      nombre: new FormControl('', [Validators.required,
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,15}$')]),
  
        apellidos: new FormControl('', [Validators.required,
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,15}$')]),
  
        fechaNacimiento: new FormControl('', [Validators.required]),
  
        sexo: new FormControl('', [Validators.required]),
  
        departamento: new FormControl('', [Validators.required]),
  
        loginName: new FormControl('', [Validators.required, Validators.email]),
  
        contrasena: new FormControl('', [Validators.required,
        Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ]{1,15}$')]),

    });

  }
  
  employee:any;
  
  idMessage:any;

  constructor( public dialog:MatDialogRef<EditEmployeeComponent>, 
    @Inject(MAT_DIALOG_DATA) public message: string, private restService: RestService, 
    public fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 

/*       this.employee={
        nombre:'Melina',
        apellidos:'montero',
        fechaNacimiento:'1999-05-19',
        sexo:'true',
        departamento:'2',
        loginName:'meli',
        contrasena: '1234'
      }; */
      this.editEmployee= this.createFormGroup();
      this.idMessage=this.message;
      console.log(this.message);
      this.fillFormEdit(this.idMessage.idFuncionario);

    }



  ngOnInit(): void {
   
  }
  
   fillFormEdit(id){
      
      this.restService.getEmployee(id).subscribe((res: any) => {
      this.employee=res;   
      this.editEmployee.controls['nombre'].setValue(this.employee.nombre);
      this.editEmployee.controls['apellidos'].setValue(this.employee.apellidos);
      this.editEmployee.controls['fechaNacimiento'].setValue(this.employee.fecha);
      this.editEmployee.controls['sexo'].setValue(this.employee.idSexo);
      this.editEmployee.controls['departamento'].setValue(this.employee.idDepartamento);
      this.editEmployee.controls['loginName'].setValue(this.employee.loginName);
      this.editEmployee.controls['contrasena'].setValue(this.employee.contrasena);
     });  
    
  }

  updateEmployee(){
    const employee = {
      id: this.idMessage.idFuncionario,
      nombre: this.editEmployee.value.nombre,
      apellidos: this.editEmployee.value.apellidos,
      fechaNacimiento: this.editEmployee.value.fechaNacimiento,
      sexo: this.editEmployee.value.sexo,
      departamento: this.editEmployee.value.departamento,
      loginName: this.editEmployee.value.loginName,
      contrasena: this.editEmployee.value.contrasena
    }
    
    if (this.editEmployee.valid) {
      if (this.restService.updateEmployee(employee)) {
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Actualización éxitosa',
          showConfirmButton: false,
          timer: 1500
        })
       
        this.dialog.close();
       window.location.href="/employee"
      }
    } 
  }

  get nombre(){ return this.editEmployee.get('nombre');}
  get apellidos(){ return this.editEmployee.get('apellidos');}
  get loginName(){ return this.editEmployee.get('loginName');}
  get contrasena(){ return this.editEmployee.get('contrasena');}

  

}
