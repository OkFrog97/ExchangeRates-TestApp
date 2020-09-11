import { Component, OnInit } from '@angular/core';
import { GetexchangeService } from './getexchange.service';
import { TmplAstBoundAttribute } from '@angular/compiler';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FormControl } from '@angular/forms';
import { IValute } from './ivalute';


@Component({
  selector: 'app-currency-choise',
  templateUrl: './currency-choise.component.html',
  styleUrls: ['./currency-choise.component.scss']
})
export class CurrencyChoiseComponent implements OnInit {
  
  public valuteNames = [];

  valuteChoiseControle: FormControl;
  
  userSelect: String;

  monitoringValute: IValute[] = [];
  
  constructor(private _GetExchangeService: GetexchangeService) {}

  ngOnInit(): void { 
    this.valuteNames = this._GetExchangeService.getExchange().valute;
    this.valuteChoiseControle = new FormControl;
    this.valuteChoiseControle.valueChanges.subscribe( (value) => this.userSelect = value );
  }

  monitore(): void {
    if (this.userSelect){
      this.monitoringValute.push(this.valuteNames.find( (item) => item.name == this.userSelect));
    }
  }

  deliteCard(delitedElementName: string): void {
    this.monitoringValute.splice( this.monitoringValute.findIndex( (item) => item.name == delitedElementName), 1);
    console.log(this.valuteNames.findIndex( (item) => item.name == delitedElementName))
    console.log(this.monitoringValute) 
  }

  
}