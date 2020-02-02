import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../models/news';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  public _customMessage$:  Observable<string>;
  public _news$:  Observable<News[]>;

  private news$ = new BehaviorSubject<News[]>([]);
  private customMessage$ = new BehaviorSubject<string>('');
  constructor() {
    this.init();
     this.initInformation();
   }
  public setMessage(param = '') {
     setTimeout(() => {
        this.customMessage$.next('Hello World from Service After 5 secs' + param);
     }, 5000);
  }

  public getAnotherMessage(param = ''): Observable<string> {
     return  of('hello from Observable ' + param).pipe(
       map( (res: string) => res.toUpperCase())
     );
  }

  public init() {
    this._customMessage$  = this.customMessage$.asObservable();
    this._news$ = this.news$.asObservable();
  }

  public initInformation() {
    this.news$.next([
      { id: 1, image: '1.jpg', description: 'Great place to live' },
      { id: 2, image: '2.jpg', description: 'Nice place to visit' },
      { id: 3, image: '3.jpg', description: 'Best place to go in vacations' },
      ]);
  }
}
