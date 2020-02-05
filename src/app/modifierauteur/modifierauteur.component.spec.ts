import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierauteurComponent } from './modifierauteur.component';

describe('ModifierauteurComponent', () => {
  let component: ModifierauteurComponent;
  let fixture: ComponentFixture<ModifierauteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierauteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierauteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
