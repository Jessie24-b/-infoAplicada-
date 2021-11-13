import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';


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


  constructor(private restService: RestService, public fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) {
     }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects(){
    
  }


}
