import { Component, OnInit } from '@angular/core';
import { HapserviceService } from '../hapservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metalrates',
  templateUrl: './metalrates.component.html',
  styleUrls: ['./metalrates.component.css'],
})
export class MetalratesComponent implements OnInit {
  constructor(private hapservice: HapserviceService, private route: Router) {}

  metals: any;
  emptymetals: boolean = true;

  ngOnInit(): void {
    this.emptymetals = true;
    if (this.hapservice.metals_data) {
      this.emptymetals = false;
      this.metals = this.hapservice.metals_data;
    }
  }

  goToHome() {
    this.route.navigate(['']);
  }
}
