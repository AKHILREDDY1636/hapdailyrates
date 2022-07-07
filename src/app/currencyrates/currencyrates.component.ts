import { Component, OnInit } from '@angular/core';
import { HapserviceService } from '../hapservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currencyrates',
  templateUrl: './currencyrates.component.html',
  styleUrls: ['./currencyrates.component.css'],
})
export class CurrencyratesComponent implements OnInit {
  constructor(private hapservice: HapserviceService, private route: Router) {}
  lefthandvalue = 0;
  lefthand: any;
  righthandvalue = 0;
  righthand: any;
  emptycurrencies: boolean = true;
  currencies = [{ name: 'Indian Rupee', symbol: 'INR', value: 1 }];
  ngOnInit(): void {
    this.lefthand = this.currencies[0].symbol;
    this.righthand = this.currencies[0].symbol;
    this.emptycurrencies = true;
    if (this.hapservice.result) {
      this.emptycurrencies = false;
      this.currencies = this.hapservice.result;
    }
  }

  convert() {
    console.log(this.lefthand, this.righthand);
    var left = 1;
    var right = 0;
    for (let currency of this.currencies) {
      if (currency.symbol == this.lefthand) {
        left = currency.value;
      }
      if (currency.symbol == this.righthand) {
        right = currency.value;
      }
    }
    this.righthandvalue =
      Math.round((1 / left) * this.lefthandvalue * right * 100) / 100;
  }

  keyPressNumbersDecimal(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  goToHome() {
    this.route.navigate(['']);
  }
}
