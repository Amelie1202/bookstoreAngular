import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreutilisateurComponent } from './livreutilisateur.component';

describe('LivreutilisateurComponent', () => {
  let component: LivreutilisateurComponent;
  let fixture: ComponentFixture<LivreutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
