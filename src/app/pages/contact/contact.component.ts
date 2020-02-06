import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public price = 0;
  constructor() { }

  ngOnInit() {}

  public doSomething() {
    console.log('event binding!!');
  }

}
