import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class GetexchangeService {
  
  private apiAdress: string = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient ) {
  }

  public getExchange() {
    //get XML Exchange Rates data from api adres
    return this.http.get(this.apiAdress);
  }
}
