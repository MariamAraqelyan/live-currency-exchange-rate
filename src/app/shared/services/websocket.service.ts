import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { getUser, newPrices } from '@app/store/actions';

interface AppState {
  payload: object;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

    constructor(private store: Store<AppState>, private http: HttpClient) { }

    private priceSocket = webSocket('wss://ws-feed.pro.coinbase.com');
    private priceHttp = this.http.get('https://api.pro.coinbase.com/products');
    private userHttp = this.http.get('http://www.mocky.io/v2/5d6d4f4530000064008fbb59');
    public currencyPairs: string[] = [];

    public subToData(): void {
      this.priceHttp.pipe(map((data: any) => Object.keys(data).map(key => data[key].id))).subscribe(
        message => this.handlePriceTags(message),
        error => console.log(error),
        () => console.log('Successfully fetched crypto prices')
      );
    }

    private handlePriceTags(message: string[]): void {
      message.sort();
      this.currencyPairs = message;
      this.priceSocket.next({
        'type': 'subscribe',
        'product_ids': message,
        'channels': ['ticker']
      });
      this.priceSocket.subscribe(
        message => this.dispatchPricePairs(message),
        error => console.log(error),
        () => console.log('Completed, socket closed')
      );
    }

    public fetchUser() {
      this.userHttp.subscribe(
        message => this.dispatchUser(message),
        error => console.log(error),
        () => console.log("Successfully fetched user data")
      )
    }

    private dispatchUser(message: any): void {
      this.store.dispatch(getUser({
        firstName: <string>message.firstName,
        lastName: <string>message.lastName,
        age: <number>message.age
      }));
    }

    private dispatchPricePairs(message: any): void {
      message.price ? this.store.dispatch(newPrices({
        product_id: <string>message.product_id,
        price: <number>parseFloat(message.price)
      }))
        : null;
    }
}
