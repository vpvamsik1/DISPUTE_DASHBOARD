import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBox2Component } from './blue-box2.component';

describe('BlueBox2Component', () => {
  let component: BlueBox2Component;
  let fixture: ComponentFixture<BlueBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
