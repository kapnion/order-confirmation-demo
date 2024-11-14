import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComparisonComponent } from './order-comparison.component';

describe('OrderComparisonComponent', () => {
  let component: OrderComparisonComponent;
  let fixture: ComponentFixture<OrderComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
