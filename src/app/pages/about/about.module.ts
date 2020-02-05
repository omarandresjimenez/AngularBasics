import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SubMenu1Component } from './submenu/submenu1.component';
import { SubMenu2Component } from './submenu/submenu2.component';
import { AboutComponent } from './about.component';
import { DefaultPageGuard } from '../services/default-guard.service';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormatNumberDirective } from 'src/app/directives/number-format.directive';


const routes: Routes = [{
    path: '',
    component: AboutComponent,
    children: [
        {
            path: 'submenu1',
            component: SubMenu1Component,
            canActivateChild: [ DefaultPageGuard ],
            canActivate: [ DefaultPageGuard ],
            canLoad: [ DefaultPageGuard ],
        },
        { path: 'submenu2', component: SubMenu2Component },
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: 'login' },

    ],
}];

@NgModule({
    imports: [ CommonModule,
               FormsModule,
               RouterModule.forChild(routes)],
    declarations: [
        AboutComponent,
        SubMenu1Component,
        SubMenu2Component,
        LoginComponent,
    ],
    providers: [
        DefaultPageGuard,
      ],
})
export class AboutModule { }
