import { Component, OnInit, Input } from '@angular/core';
import { IValute } from '../ivalute';

@Component({
  selector: 'app-valute-card',
  templateUrl: './valute-card.component.html',
  styleUrls: ['./valute-card.component.scss']
})
export class ValuteCardComponent implements OnInit {

  @Input() Valutes: IValute;
  
  constructor() { }

  ngOnInit(): void {
  }

}
