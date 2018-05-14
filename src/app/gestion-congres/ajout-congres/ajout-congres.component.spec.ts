import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCongresComponent } from './ajout-congres.component';

describe('AjoutCongresComponent', () => {
  let component: AjoutCongresComponent;
  let fixture: ComponentFixture<AjoutCongresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCongresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCongresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
