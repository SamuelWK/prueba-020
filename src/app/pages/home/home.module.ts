import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home.page';
import { HomePageRoutingModule } from './home.routing.module';
import { ComponentsModule } from '@shared/components.module';
import { BeerListComponent } from './components/beer-list/beer-list.component';


@NgModule({
  declarations: [
    Home,
    BeerListComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModule,
  ],

})
export class HomeModule { }
