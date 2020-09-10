import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuteCardComponent } from './valute-card.component';

describe('ValuteCardComponent', () => {
  let component: ValuteCardComponent;
  let fixture: ComponentFixture<ValuteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
