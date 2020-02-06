import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenComponent } from './children.component';

describe('ChildrenComponent', () => {
  let component: ChildrenComponent;
  let fixture: ComponentFixture<ChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should return 2 news objects as initialized in the service', () => {
      const arrNewsExpected = [
        { id: 1, image: '1.jpg', description: 'Great place to live' },
        { id: 2, image: '2.jpg', description: 'Nice place to visit' },
        ];
        component.count = 2;
        component.getNews();
      expect(component.news).toEqual(arrNewsExpected);
  });

});
