import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUtlilisateurComponent } from './ajouter-utlilisateur.component';

describe('AjouterUtlilisateurComponent', () => {
  let component: AjouterUtlilisateurComponent;
  let fixture: ComponentFixture<AjouterUtlilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUtlilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUtlilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
