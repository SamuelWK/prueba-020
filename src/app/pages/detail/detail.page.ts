import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '@models/beer.model';
import { BeerService } from '@shared/services/api/beer.service';
import { lastValueFrom } from 'rxjs';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class Detail implements OnDestroy, OnInit {
  id!: number;
  subscriptions: any = [];
  beer!: Beer;

  chartOption!: EChartsOption;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerService: BeerService
  ) {
    this.subscriptions.push(this.route.params.subscribe((params: any) => {
      const parsed = Number.parseInt(params.id);
      if (Number.isNaN(parsed)) {
        this.router.navigate(['']);
      }

      this.id = parsed;
    }));
  }

  ngOnInit(): void {
    this.searchBeer();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: any) => sub.unsubscribe());
  }

  async searchBeer() {
    const res = await lastValueFrom(this.beerService.getById(this.id));
    if (res?.length) {
      this.beer = res[0];
    }

    this.setChart();
  }

  setChart() {
    this.chartOption = {

      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
        selectorLabel: {
          color: 'white'
        },
        textStyle: {
          color: 'white'
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.beer.ingredients.hops.map((hop: any) => ({ value: hop.amount.value, name: hop.name }))
        }
      ]
    }
  }
}
