import { Component, OnInit, Output } from '@angular/core';
import { WebsocketService } from "@app/shared/services/websocket.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { share, map } from "rxjs/operators";

interface AppState {
  message: { prices: object };
}

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.css']
})
export class DisplayPriceComponent implements OnInit {

  constructor(public service: WebsocketService, private store: Store<AppState>) { }

  public prices: any = this.store ? this.store.select((state: any) => state.message ? state.message.prices : null).pipe(share()) : null;
  public currencyPair: any;
  public factor: number = 1;
  public pair: any;

  findPair(pair: any): void {
    this.pair = pair;
    this.currencyPair = this.store.select((state: any) => state.message ? state.message.prices[pair] : null).pipe(share());
  }

  changeFactor(factor: any): void {
    this.factor = factor;
  }

  trackByFn(index: string, item: any): any {
    return index;
  }

  ngOnInit(): void {
    this.service.subToData();
  }

}
