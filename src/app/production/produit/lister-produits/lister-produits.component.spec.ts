import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerProduitsComponent } from './lister-produits.component';

describe('ListerProduitsComponent', () => {
  let component: ListerProduitsComponent;
  let fixture: ComponentFixture<ListerProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
