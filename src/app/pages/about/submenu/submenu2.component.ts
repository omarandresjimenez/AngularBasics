import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  templateUrl: './submenu2.component.html',
  styleUrls: ['./submenu2.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SubMenu2Component implements OnInit {
  public arrGrocerySource: string[] = ['bread', 'milk', 'eggs', 'water', 'potatos'];
  public arrGrocery: string[];
  constructor() { }

  ngOnInit() {
    this.restart();
  }

  public removeItem(index) {
    this.arrGrocery.splice(index, 1);
  }

  public restart() {
    this.arrGrocery = this.arrGrocerySource.slice(0, this.arrGrocerySource.length);
  }
}

