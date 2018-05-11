import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerRecipientsComponent } from './lister-recipients.component';

describe('ListerRecipientsComponent', () => {
  let component: ListerRecipientsComponent;
  let fixture: ComponentFixture<ListerRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
