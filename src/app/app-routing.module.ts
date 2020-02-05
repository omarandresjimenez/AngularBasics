import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: '**', redirectTo: 'contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
