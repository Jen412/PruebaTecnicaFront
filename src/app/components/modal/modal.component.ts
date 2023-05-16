import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  constructor (private router: Router){}
  @Input() Car: Car={
    model:"",
    color:""
  }
  @Input() Client ={
    name:"",
    email:""
  }

  aceptar(){
    this.router.navigate(['/home']);
  }
}
