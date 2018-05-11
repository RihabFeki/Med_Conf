import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCongresComponent } from './liste-congres.component';

describe('ListeCongresComponent', () => {
  let component: ListeCongresComponent;
  let fixture: ComponentFixture<ListeCongresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCongresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCongresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
