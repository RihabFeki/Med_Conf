import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLotComponent } from './ajouter-lot.component';

describe('AjouterLotComponent', () => {
  let component: AjouterLotComponent;
  let fixture: ComponentFixture<AjouterLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
