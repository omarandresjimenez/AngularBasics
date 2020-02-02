import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { News } from '../models/news';
import { MainserviceService } from '../services/mainservice.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  count = 1;

  @Output()
  newItemSelected = new EventEmitter<string>();
  originalNews: News[] = [];
  news: News[] = [];

  private set sub(sub: Subscription) {
    this.subs.push(sub);
  }

  private subs: Subscription[] = [];

  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
   this.getNews();
  }

  ngOnChanges() {
    this.getNews();
  }

  getNews() {
    this.sub = this.mainservice._news$.subscribe( (info: News[]) => {
      this .news = info.slice(0, this.count);
    });
  }

  ngOnDestroy() {
    this.subs.forEach (sub => sub.unsubscribe());
  }

  onClickNews(id:  number) {
     this.newItemSelected.emit(this.news.find(item => item.id === id).description);
  }
}
