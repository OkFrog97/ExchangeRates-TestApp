import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyChoiseComponent } from './currency-choise/currency-choise.component';
import { GetexchangeService } from './currency-choise/getexchange.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyChoiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GetexchangeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
