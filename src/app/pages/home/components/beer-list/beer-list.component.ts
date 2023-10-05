import { Component, Input } from '@angular/core';
import { Beer } from '@models/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {
  @Input() list: Array<Beer> = [];
}
