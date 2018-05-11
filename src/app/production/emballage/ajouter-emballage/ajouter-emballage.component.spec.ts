import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmballageComponent } from './ajouter-emballage.component';

describe('AjouterEmballageComponent', () => {
  let component: AjouterEmballageComponent;
  let fixture: ComponentFixture<AjouterEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
