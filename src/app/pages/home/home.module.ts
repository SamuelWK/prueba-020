import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home.page';
import { HomePageRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomeModule { }
