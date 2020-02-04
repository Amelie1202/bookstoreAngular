import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeauteurComponent } from './listeauteur.component';

describe('ListeauteurComponent', () => {
  let component: ListeauteurComponent;
  let fixture: ComponentFixture<ListeauteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeauteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeauteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
