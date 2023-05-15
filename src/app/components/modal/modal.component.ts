import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  @Input() Car: Car={
    model:"",
    color:""
  }
}
