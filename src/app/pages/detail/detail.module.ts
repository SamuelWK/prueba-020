import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Detail } from './detail.page';
import { DetailPageRoutingModule } from './detail.routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    Detail
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
})
export class DetailModule { }
