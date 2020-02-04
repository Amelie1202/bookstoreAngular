import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagereComponent } from './etagere.component';

describe('EtagereComponent', () => {
  let component: EtagereComponent;
  let fixture: ComponentFixture<EtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
