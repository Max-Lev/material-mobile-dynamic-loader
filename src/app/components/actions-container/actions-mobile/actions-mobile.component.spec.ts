import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsMobileComponent } from './actions-mobile.component';

describe('ActionsMobileComponent', () => {
  let component: ActionsMobileComponent;
  let fixture: ComponentFixture<ActionsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
