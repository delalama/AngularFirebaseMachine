import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFbComponent } from './demo-fb.component';

describe('DemoFbComponent', () => {
  let component: DemoFbComponent;
  let fixture: ComponentFixture<DemoFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
