import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnChanges{

  @Input() priceKey: any;
  @Input() priceVal: any;

    constructor() { }

    public color: string;
    private prevPriceVal: string;
    public rise: boolean = false;

    ngOnChanges(): void {
      if (this.prevPriceVal) {
        if (this.prevPriceVal > this.priceVal) {
          this.color = 'red';
          this.rise = false;
        } else if (this.prevPriceVal < this.priceVal) {
          this.color = 'green';
          this.rise = true;
        }
        setTimeout(() => {
          this.color = 'black';
        }, 2500)
      }
      this.prevPriceVal = this.priceVal;
    }

}
