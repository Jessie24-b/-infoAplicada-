import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

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
  
        contrasena2: new FormControl('', [Validators.required,
        Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ]{1,15}$')]),

    });

  }

  newEmployee: FormGroup;

  constructor(private restService: RestService, public fb: FormBuilder,
     private route: ActivatedRoute, private router: Router) {
      this.newEmployee= this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createEmployee() {
   
    const employee = {
      nombre: this.newEmployee.value.nombre,
      apellidos: this.newEmployee.value.apellidos,
      fechaNacimiento: this.newEmployee.value.fechaNacimiento,
      sexo: this.newEmployee.value.sexo,
      departamento: this.newEmployee.value.departamento,
      loginName: this.newEmployee.value.loginName,
      contrasena: this.newEmployee.value.contrasena
    }

    const contrasena2 = this.newEmployee.value.contrasena2

    console.log(this.newEmployee.valid)

    if (this.newEmployee.valid) {

      if (this.restService.createEmploye(employee)) {
        console.log("if");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro éxitoso',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.href="/employee"
      }
    } 
  }


  get nombre(){ return this.newEmployee.get('nombre');}
  get apellidos(){ return this.newEmployee.get('apellidos');}
  get loginName(){ return this.newEmployee.get('loginName');}
  get contrasena(){ return this.newEmployee.get('contrasena');}
  get contrasena2(){ return this.newEmployee.get('contrasena2');}
}


