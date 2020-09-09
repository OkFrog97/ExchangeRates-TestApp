import { Component, OnInit } from '@angular/core';
import { GetexchangeService } from './getexchange.service';
import { TmplAstBoundAttribute } from '@angular/compiler';


@Component({
  selector: 'app-currency-choise',
  templateUrl: './currency-choise.component.html',
  styleUrls: ['./currency-choise.component.scss']
})
export class CurrencyChoiseComponent implements OnInit {
  
  
  public voluteInfo = [];
  
  constructor(private _GetExchangeService: GetexchangeService) {}

  ngOnInit(): void { 
    this._GetExchangeService.getExchange().subscribe((data) => {
       for (let i in data['Valute']){
          this.voluteInfo.push( data['Valute'][i]['Name'] );
       }
    });
  }

}
