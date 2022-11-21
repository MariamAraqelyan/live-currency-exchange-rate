import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayPriceComponent } from './display-price.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';

describe('DisplayPriceComponent', () => {
  let component: DisplayPriceComponent;
  let fixture: ComponentFixture<DisplayPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          DisplayPriceComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
