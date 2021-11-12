import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  recuest: FormGroup;
  employees:any;

  createFormGroup(){
    
    return new FormGroup({

      usuarioResponsable: new FormControl('', [Validators.required]),
      usuarioFinal: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      acta: new FormControl('', [Validators.required]),
    });

  }

  constructor(private restService: RestService, public fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) {
      this.recuest= this.createFormGroup();
     }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.restService.getEmployees().subscribe((res: any) => {
      this.employees = res;
      console.log(this.employees)
    })
  }

  createRecuest(){

  }

}
