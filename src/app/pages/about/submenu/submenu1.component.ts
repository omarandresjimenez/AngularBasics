import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './submenu1.component.html',
  styleUrls: ['./submenu1.component.css']
})
export class SubMenu1Component implements OnInit {

  constructor(public session: SessionService, private router: Router) { }

  public get username(): string {
    return this.session.getUser();
  }
  ngOnInit() {
  }

  public logout() {
     this.session.setUser('');
     this.router.navigateByUrl('about/login');
  }

}
