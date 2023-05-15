import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private carService: CarServiceService
) {}
  cars : Car[] =[];

  ngOnInit(){
    if (this.carService.cars.length === 0) {
      this.http.get("http://127.0.0.1:4500/api/cars").subscribe(data =>{
        const value: any =data;
        this.cars = value.data;
        this.carService.setCars(this.cars);
      });
    }
    else{
      this.cars = this.carService.cars;
    }

  }

  onClick(car: any){
    this.router.navigate(['/formModelo']);
    this.changeCar(car);
  }

  changeCar(car: Car){
    this.carService.setCar(car);
  }
}
