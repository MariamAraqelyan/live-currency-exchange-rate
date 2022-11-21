import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('WebsocketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
          HttpClientModule,
          RouterTestingModule,
          FormsModule,
          ReactiveFormsModule,
          StoreModule.forRoot({})
        ],
      providers:[HttpClient]
  }));

  it('should be created', () => {
    const service: WebsocketService = TestBed.get(WebsocketService);
    expect(service).toBeTruthy();
  });
});
