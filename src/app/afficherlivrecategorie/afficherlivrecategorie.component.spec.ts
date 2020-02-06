import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlivrecategorieComponent } from './afficherlivrecategorie.component';

describe('AfficherlivrecategorieComponent', () => {
  let component: AfficherlivrecategorieComponent;
  let fixture: ComponentFixture<AfficherlivrecategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherlivrecategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherlivrecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
