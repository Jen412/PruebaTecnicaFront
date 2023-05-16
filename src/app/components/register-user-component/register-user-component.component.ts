import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register-user-component',
  templateUrl: './register-user-component.component.html',
  styleUrls: ['./register-user-component.component.scss']
})
export class RegisterUserComponentComponent {
  constructor(private router: Router, private http: HttpClient){}
  mensaje: string = '';
  mensajeError: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  lastname: string = '';

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['/home']);
    }
  }

  onSubmit(){
    const body={
      email: this.email,
      password: this.password,
      name: this.name,
      lastName: this.lastname
    }
    let response;
    this.http.post("http://127.0.0.1:4500/api/users/", body).pipe(
      catchError((error) => {
        this.mensajeError = error.error.msg;
        return throwError('Something went wrong');
      }))
      .subscribe(data =>{
        response = data;
        this.mensaje = "Usuario Registrado Correctamente";
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
        this.mensajeError ="";
      });
  }
}
