import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePricesComponent } from './live-prices.component';
// import { DisplayPriceComponent } from './components/display-price/display-price.component';

describe('LivePricesComponent', () => {
  let component: LivePricesComponent;
  let fixture: ComponentFixture<LivePricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
