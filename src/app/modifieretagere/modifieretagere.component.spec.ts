import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieretagereComponent } from './modifieretagere.component';

describe('ModifieretagereComponent', () => {
  let component: ModifieretagereComponent;
  let fixture: ComponentFixture<ModifieretagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieretagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieretagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
