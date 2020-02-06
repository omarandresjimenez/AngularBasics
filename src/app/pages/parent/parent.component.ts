import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {
  selectedNews = '';
  countNews = 2;
  sub: Subscription;
  constructor(
    private service: MainserviceService,
  ) { }

  ngOnInit() {
    // this.sub = this.service.customMessage$.subscribe(msg => this.selectedNews = msg);
    this.sub = this.service.getAnotherMessage(' From Parent Component').subscribe(msg => this.selectedNews = msg);
  }

  itemClicked($event) {
     this.selectedNews = $event;
  }

  changeCount(item) {
    this.countNews = item.target.value;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
