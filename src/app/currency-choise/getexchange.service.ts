import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IExchange } from './iexchange';
import { IValute } from './ivalute';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})


export class GetexchangeService   {
  
  private apiAdress: string = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient ) {
  }
 
  public getExchange(): IExchange {
    //return IExchange object with valute information array
    let valuteAr: IValute[] = [];
    
    this.http.get(this.apiAdress).subscribe( (data) => {
        for (const i in data['Valute']){
            let valute: IValute = { 
                                  name: data['Valute'][i]['Name'],
                                  nominal: data['Valute'][i]['Nominal'],
                                  value: data['Valute'][i]['Value'],
                                }
            valuteAr.push(valute);  
            }
          }
        );

    return  { valute: valuteAr }
  }

  public getValuteInfo (valuteName: String): IValute {
    //return specific IValue O. by searching by valuteName

    //почему-то не работает при использовании из других метадов
    return this.getExchange().valute.find( (item) => item.name == valuteName)
  }

}
