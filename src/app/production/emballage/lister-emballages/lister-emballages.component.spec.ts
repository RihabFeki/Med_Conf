import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEmballagesComponent } from './lister-emballages.component';

describe('ListerEmballagesComponent', () => {
  let component: ListerEmballagesComponent;
  let fixture: ComponentFixture<ListerEmballagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerEmballagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEmballagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
