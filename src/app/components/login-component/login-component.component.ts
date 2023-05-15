import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from "../../models/Login";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ComunicationService } from "../../services/ComunicationService";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  constructor (private http: HttpClient, private router: Router, private comunicationService :ComunicationService){}

  mensajeError: string ="";
  Login : Login ={
    email: "",
    password: ""
  };

  @Output() tokenChange = new EventEmitter<string>();

  response:any = {
    status: 0,
    name: '',
    lastName: '',
    email: '',
    token: ''
  }

  onSubmit(){
    this.http.post("http://127.0.0.1:4500/api/users/login", this.Login).pipe(
      catchError((error) => {
        this.mensajeError = error.error.msg;
        return throwError('Something went wrong');
      }))
      .subscribe(data =>{
        this.response = data;
        if (this.response.status === 200) {
          localStorage.setItem("token", this.response.token);
          this.router.navigate(['/home']);
          this.mensajeError = "";
          this.changeToken(this.response.token);
        }
      })

  }

  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    }
  }


  changeToken(token : string) {
    this.comunicationService.sendValue(token);
  }
}
