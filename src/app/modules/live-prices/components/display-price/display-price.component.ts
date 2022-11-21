import { Component, OnInit, Output } from '@angular/core';
import { WebsocketService } from "@app/shared/services/websocket.service";
import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { map } from "rxjs/operators";

interface AppState {
  message: { prices: object };
}

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.scss'],
})
export class DisplayPriceComponent implements OnInit {

  constructor(private service: WebsocketService, private store: Store<AppState>) { }

  public prices: any = this.store ? this.store.select((state: any) => state.message ? state.message.prices : null).pipe(share()) : null;
  public currencyPair: any;
  public factor: number = 1;
  public pair: any;

  findPair(pair: any): void {
    this.pair = pair;
    this.currencyPair = this.store.select((state: any) => state.message ? state.message.prices[pair] : null).pipe(share());
  }

  trackByFn(index: any, item: any): string {
    return index;
  }

  ngOnInit(): void {
    this.service.subToData();
    console.log(this.prices, 'prices')
  }

}
