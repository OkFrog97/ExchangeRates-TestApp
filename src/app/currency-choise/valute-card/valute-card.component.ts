import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IValute } from '../ivalute';

@Component({
  selector: 'app-valute-card',
  templateUrl: './valute-card.component.html',
  styleUrls: ['./valute-card.component.scss']
})
export class ValuteCardComponent implements OnInit {

  @Input() Valutes: IValute;
  @Output() onDelite = new EventEmitter<boolean>();

  
  constructor() { }

  ngOnInit(): void {
  }

  deliteCard(name) {
    this.onDelite.emit(name);
  }

}
