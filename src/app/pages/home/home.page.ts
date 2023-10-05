import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '@models/beer.model';
import { Store } from '@ngrx/store';
import { BeerService } from '@shared/services/api/beer.service';
import { SetBeerList } from '@store/actions/beer.action';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class Home implements OnDestroy {
  list: Array<Beer> = []
  subscriptions: any = [];
  constructor(
    private beerService: BeerService,
    private store: Store,
    private router: Router) {
    this.subscriptions.push(this.store.subscribe((res: any) => {
      this.list = res ? res[0].beers.list : []
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: any) => sub.unsubscribe());
  }

  async changeSearch(event: string) {
    if (!event || event === '') {
      this.store.dispatch(new SetBeerList([]));
      return;
    }

    const res = await lastValueFrom(this.beerService.getByFilter(event));
    this.store.dispatch(new SetBeerList(res as any));
  }

  selectedBeer(event: number) {
    this.router.navigate([event])
  }
}
