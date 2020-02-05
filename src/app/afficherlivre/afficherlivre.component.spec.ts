import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlivreComponent } from './afficherlivre.component';

describe('AfficherlivreComponent', () => {
  let component: AfficherlivreComponent;
  let fixture: ComponentFixture<AfficherlivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherlivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
