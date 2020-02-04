import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeetagereComponent } from './listeetagere.component';

describe('ListeetagereComponent', () => {
  let component: ListeetagereComponent;
  let fixture: ComponentFixture<ListeetagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeetagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeetagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
