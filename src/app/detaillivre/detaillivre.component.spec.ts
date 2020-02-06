import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillivreComponent } from './detaillivre.component';

describe('DetaillivreComponent', () => {
  let component: DetaillivreComponent;
  let fixture: ComponentFixture<DetaillivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
