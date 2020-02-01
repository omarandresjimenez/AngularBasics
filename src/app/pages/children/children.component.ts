import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { News } from '../models/news';

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

  constructor() { }

  ngOnInit() {
    this .originalNews.push({ id: 1, image: '1.jpg', description: 'Great place to live'});
    this .originalNews.push({ id: 2, image: '2.jpg', description: 'Nice place to visit'});
    this .originalNews.push({ id: 3, image: '3.jpg', description: 'Best place to go in vacations'});
    this .news = this.originalNews.slice(0, this.count);
  }

  ngOnChanges() {
    this .news = this.originalNews.slice(0, this.count);
  }

  onClickNews(id:  number) {
     this.newItemSelected.emit(this.news.find(item => item.id === id).description);
  }
}
