import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'}) export class ComunicationService {
  private sendValueSoruce = new Subject<string>();
  sendValueSoruce$ = this.sendValueSoruce.asObservable();

  sendValue(value: string){
    this.sendValueSoruce.next(value);
  };
}
