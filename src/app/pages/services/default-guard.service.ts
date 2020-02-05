import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route,
  Router, RouterStateSnapshot, ActivatedRoute,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { SessionService } from './session.service';


@Injectable()
export class DefaultPageGuard implements CanActivate, CanLoad {


  public constructor(
     private router: Router,
     private route: ActivatedRoute,
     public session: SessionService,
  ) {
  }


  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    const url: string = state.url;
    return this.navigate(url);
  }


  public canLoad(route: Route): Observable<boolean> {
    const url = `/${route.path}`;
    return this.navigate(url);
  }


  private navigate(url: string): Observable<boolean> {
    return of(this.session.getUser())
      .pipe(
        map((user: string) => {
          if (!user) {
            this.router.navigateByUrl( 'about/login' );
            return false;
          }
          return true;
        }),
      );
  } // end navigate()

}
