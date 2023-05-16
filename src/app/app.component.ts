import { Component} from '@angular/core';
import { ComunicationService } from "./services/ComunicationService";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private comunicationService: ComunicationService,
    private http: HttpClient
  ){}

  token: string = ""
  title = 'PruebaTecnicaFront';
  isLogin : boolean = false;
  heigth = 65*((window.screen.height) / 100);


  changeToken(token: string) {
    this.token = token;
  }

  ngOnInit(){
    const tokenLocal = localStorage.getItem("token");
    if (typeof tokenLocal == "string") {
      this.token = tokenLocal;
    }
    this.comunicationService.sendValueSoruce$.subscribe(value=>{
      this.token = value;
    });
  }
}
