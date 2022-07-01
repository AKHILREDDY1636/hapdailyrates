import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyratesComponent } from './currencyrates/currencyrates.component';
import { HomeComponent } from './home/home.component';
import { MetalratesComponent } from './metalrates/metalrates.component';

const routes: Routes = [
  { path: 'metals', component: MetalratesComponent },
  { path: 'currencies', component: CurrencyratesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
