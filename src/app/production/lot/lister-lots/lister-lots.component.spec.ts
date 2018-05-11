import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerLotsComponent } from './lister-lots.component';

describe('ListerLotsComponent', () => {
  let component: ListerLotsComponent;
  let fixture: ComponentFixture<ListerLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
