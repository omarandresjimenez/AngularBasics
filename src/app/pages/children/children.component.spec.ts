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


  it('should return 1 news object as initialized in the component', () => {
      const arrNewsExpected = [
        { id: 1, image: '1.jpg', description: 'Great place to live' },
        ];
        component.count = 1;
        component.getNews();
      expect(component.news).toEqual(arrNewsExpected);
  });

});
