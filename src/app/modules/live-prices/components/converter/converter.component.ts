import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

interface AppState {
  message: any;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @Output() selectedPair = new EventEmitter<string>();
  @Output() selectedFactor = new EventEmitter<string>();
  @Input() currencyPair: string;
  @Input() currencyPairs: string[];
  @Input() factor: number;
  @Input() pair: string;

  constructor() { }

  sendPair($event: any) {
    this.selectedPair.next($event.target.value);
  }

  sendFactor($event: any) {
    this.selectedFactor.next($event.target.value);
  }

  ngOnInit() { }

}
