import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChoiseComponent } from './currency-choise.component';

describe('CurrencyChoiseComponent', () => {
  let component: CurrencyChoiseComponent;
  let fixture: ComponentFixture<CurrencyChoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyChoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
