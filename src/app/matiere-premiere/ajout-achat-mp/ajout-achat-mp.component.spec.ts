import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMpComponent } from './ajout-achat-mp.component';

describe('StockMpComponent', () => {
  let component: StockMpComponent;
  let fixture: ComponentFixture<StockMpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
