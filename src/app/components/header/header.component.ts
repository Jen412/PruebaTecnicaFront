import { Router } from '@angular/router';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (private router: Router) {

  }

  @Input() token: string = "";

  cerrarSesion(){
    this.token = "";
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
