import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../service/rest.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: any;
  showMsgError: boolean = false;
  showMsgRegistration: boolean = false;
  faEnvelope=faEnvelope;
  faLock=faLock;

  constructor(public rest:RestService, private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {

      if(this.route.snapshot.queryParamMap.get('showMsgRegistration')){
        this.showMsgRegistration= true;
      }
  
      this.loginForm = this.fb.group({
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ]{1,15}$')
        ])
    })
    }

    
  login() {
    
    if (this.loginForm.valid) {
      this.rest.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((result) => { 
        if(result != null){
          console.log(result);
          localStorage.setItem('token', result.idFuncionario);
          localStorage.setItem('user',JSON.stringify(result));
          this.router.navigate(['/main']);
        } else {
          this.showMsgError= true;
          this.showMsgRegistration= false;
        }
        
      }, (err) => {
        this.showMsgError= true;
        this.showMsgRegistration= false;
      });
    } 
  }

}