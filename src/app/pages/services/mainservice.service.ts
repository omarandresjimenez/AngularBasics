import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  public customMessage$ = new BehaviorSubject<string>('');
  constructor() {

   }
   public setMessage(param = '') {
     setTimeout(() => {
        this.customMessage$.next('Hello World from Service ' + param);
     }, 10000);
   }

   public getAnotherMessage(param = ''): Observable<string> {
     return  of('hello from Observable ' + param);
   }
}
