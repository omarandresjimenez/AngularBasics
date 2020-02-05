import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private session: SessionService, private router: Router) {}
  public login(form, user, pwd) {
      if (!form.form.valid) {
          return false;
      }
      this.session.setUser(user.value);
      this.router.navigateByUrl('about/submenu1');
  }
}
