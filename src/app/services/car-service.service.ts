import { HttpClient } from "@angular/common/http";
import { Car } from "../models/Car";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http: HttpClient) {
    this.http.get("http://127.0.0.1:4500/api/clients").subscribe(data =>{
      const value:any =data;
      this.clients =value.clients;
    });
  }
  orderCars: boolean=false;
  car: Car ={
    color:'',
    model: ''
  }
  clients :string[]=[]

  cars: Car[] = [];

  setCar(car: Car){
    this.car = car;
  }
  setCars(cars : Car[]){
    this.cars = cars;
  }
}
