import { Component } from '@angular/core';
import { Beer } from '@models/beer.model';
import { Store } from '@ngrx/store';
import { BeerService } from '@shared/services/api/beer.service';
import { SetBeerList } from '@store/actions/beer.action';
import { SetBeerListStatus } from '@store/actions/ui.action';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class Home {
  list: Array<Beer> = []
  constructor(private beerService: BeerService, private store: Store){
    this.store.subscribe((res: any) => {
      this.list = res ? res[0].beers.list: []
    })
  }

  async changeSearch(event: string){
    if (!event || event === '') {
      this.store.dispatch(new SetBeerList([]));
      return;
    }

    const res = await lastValueFrom(this.beerService.getByFilter(event));
    this.store.dispatch(new SetBeerList(res as any));
  }
}
