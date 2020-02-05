import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public _user$:  Observable<string>;

  private user$ = new BehaviorSubject<string>('');
  constructor() {
    this.init();
   }
  public setUser(param) {
    this.user$.next(param);
  }

  public getUser(): string {
     return this.user$.getValue();
  }

  public init() {
    this._user$  = this.user$.asObservable();
  }

}