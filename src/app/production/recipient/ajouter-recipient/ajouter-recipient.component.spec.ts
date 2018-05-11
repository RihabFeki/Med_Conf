import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecipientComponent } from './ajouter-recipient.component';

describe('AjouterRecipientComponent', () => {
  let component: AjouterRecipientComponent;
  let fixture: ComponentFixture<AjouterRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
