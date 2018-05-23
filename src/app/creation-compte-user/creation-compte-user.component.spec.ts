import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCompteUserComponent } from './creation-compte-user.component';

describe('CreationCompteUserComponent', () => {
  let component: CreationCompteUserComponent;
  let fixture: ComponentFixture<CreationCompteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCompteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCompteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
