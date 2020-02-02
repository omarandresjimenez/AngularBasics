import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { News } from '../models/news';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, OnChanges {
  @Input()
  count = 1;

  @Output()
  newItemSelected = new EventEmitter<string>();
  originalNews: News[] = [];
  news: News[] = [];

  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
    this.mainservice._news$.subscribe( (info: News[]) => {
      this .news = this.originalNews.slice(0, this.count);
    });
  }

  ngOnChanges() {
    if (this.news.length) {
      this .news = this.originalNews.slice(0, this.count);
    }
  }

  onClickNews(id:  number) {
     this.newItemSelected.emit(this.news.find(item => item.id === id).description);
  }
}
