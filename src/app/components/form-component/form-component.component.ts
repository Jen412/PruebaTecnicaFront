import { Component } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  constructor(
    private carService: CarServiceService,
    private router: Router,
  ) {}
  car: Car ={
    model: "",
    color: ""
  }
  clients: string[] = this.carService.clients;
  ngOnInit(){
    if (this.carService.car.color ==="") {
      this.router.navigate(['/home']);
    }
    this.car = this.carService.car;
  }
}
