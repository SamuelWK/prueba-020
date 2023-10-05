import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home.page';
import { HomePageRoutingModule } from './home.routing.module';
import { ComponentsModule } from '@shared/components.module';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModule,
  ],

})
export class HomeModule { }
