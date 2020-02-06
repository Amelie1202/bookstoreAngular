import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlivreetagereComponent } from './afficherlivreetagere.component';

describe('AfficherlivreetagereComponent', () => {
  let component: AfficherlivreetagereComponent;
  let fixture: ComponentFixture<AfficherlivreetagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherlivreetagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherlivreetagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
