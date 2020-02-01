import { Component } from '@angular/core';
import { MainserviceService } from './pages/services/mainservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  constructor(private service: MainserviceService) {
    this.service.setMessage(' Fired for APP Component');
  }

}
