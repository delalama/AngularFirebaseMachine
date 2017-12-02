import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationContainerComponent } from './explanation-container.component';

describe('ExplanationContainerComponent', () => {
  let component: ExplanationContainerComponent;
  let fixture: ComponentFixture<ExplanationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplanationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
