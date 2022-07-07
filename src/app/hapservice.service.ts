import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HapserviceService {
  constructor(private httpClient: HttpClient) {}

  metals_data: any;
  symbols: any;
  currencies: any;
  result: any;
  usd_value: any;
  metal_URL = 'https://api.metals.live/v1/spot';
  headers = {
    apikey: '0yxDBQksyV54xr8ZZ4UgU8ZmITOdxsrV',
  };
  currency_url = 'https://api.apilayer.com/exchangerates_data/latest?base=INR';
  symbol_url = 'https://api.apilayer.com/exchangerates_data/symbols?base=INR';

  formatMetalData(obj: any) {
    var data = [];
    for (let i of Object.keys(obj)) {
      var key = Object.keys(obj[i])[0];
      if (key != 'timestamp') {
        data.push({
          name: key,
          value: Math.round(this.usd_value * (obj[i][key] / 28.3495)),
        });
      }
    }

    this.metals_data = data;

    return data;
  }

  formatData(obj: any, st: String) {
    var data = [];
    for (let i of Object.keys(obj)) {
      if (i == 'USD' && st == 'currencies') {
        this.usd_value = 1 / obj[i];
      }
      data.push({ name: i, value: obj[i] });
    }
    if (st == 'symbols') {
      this.symbols = data;
    } else if (st == 'currencies') {
      this.currencies = data;
    }

    return data;
  }

  mergeCurrencySymbol() {
    var keys = Object.keys(this.currencies);
    var data = [];
    for (let i of keys) {
      data.push({
        symbol: this.currencies[i].name,
        name: this.symbols[i].value,
        value: this.currencies[i].value,
      });
    }
    this.result = data;
  }

  triggerCurrencyAPI() {
    return this.httpClient.get(this.currency_url, { headers: this.headers });
  }

  triggerSymbolAPI() {
    return this.httpClient.get(this.symbol_url, { headers: this.headers });
  }

  triggermetalAPI() {
    return this.httpClient.get(this.metal_URL);
  }
}
