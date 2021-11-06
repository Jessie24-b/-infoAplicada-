import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { RestService } from '../../service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  constructor(private restService: RestService ) { }

  ngOnInit(): void {
  }

  createEmployee(form:NgForm){
    const newEmployee = form.value;
    console.log(newEmployee)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro éxitoso',
      showConfirmButton: false,
      timer: 1500
    })
    return this.restService.createEmploye(newEmployee)
  }

}
