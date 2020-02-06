import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildrenComponent } from './pages/children/children.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormatNumberDirective } from './directives/number-format.directive';
import { AutoFormatNumberDirective } from './directives/number-auto-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    ContactComponent,
    FormatNumberDirective,
    AutoFormatNumberDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
