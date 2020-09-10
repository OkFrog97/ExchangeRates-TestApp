import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyChoiseComponent } from './currency-choise/currency-choise.component';
import { GetexchangeService } from './currency-choise/getexchange.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValuteCardComponent } from './currency-choise/valute-card/valute-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyChoiseComponent,
    ValuteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    GetexchangeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
