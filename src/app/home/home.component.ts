import { Component, OnInit } from '@angular/core';
import { HapserviceService } from './../hapservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private hapservice: HapserviceService) {}
  button = { class: 'btn-outline-danger', text: 'LOAD DATA' };
  ngOnInit(): void {
    this.button = { class: 'btn-outline-danger', text: 'LOAD DATA' };
  }

  async loadData() {
    //this.loadCurrencyData();

    var currencies: any = await this.hapservice
      .triggerCurrencyAPI()
      .toPromise();
    currencies = this.hapservice.formatData(currencies.rates, 'currencies');

    //this.loadSymbolData();

    var symbols: any = await this.hapservice.triggerSymbolAPI().toPromise();
    symbols = this.hapservice.formatData(symbols.symbols, 'symbols');

    this.hapservice.mergeCurrencySymbol();

    var data = await this.hapservice.triggermetalAPI().toPromise();
    data = this.hapservice.formatMetalData(data);
    this.button = { class: 'btn-outline-success', text: 'LOADED DATA' };

    console.log('end');
  }
}
